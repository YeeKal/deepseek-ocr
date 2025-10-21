
//  labubu doll lora
import { imgModels } from "@/lib/ai-tools/config";
import {compatibilityCheck, ImageSizeInfo} from "@/lib/ai-tools/models";
import { falaiClient, togetherClient, togetherFluxDevLoraClient } from "@/lib/ai-tools/image-genarate-client";
import { allThemeMiniConfig, themes } from "@/lib/ai-tools/config-utils";
import {updateUserCredits} from "@/lib/db";
import { Model } from "../types";
import { fal } from '@fal-ai/client';
import { error } from "console";

const Megapixels = 2 ** 20; // 1 Megapixel = 2^20 pixels

async function creditsDeduction(userId: string, model: Model, sizeInfo?: ImageSizeInfo): Promise<void> {
    if (!model || !model.credits || model.credits <= 0) {
        return; // No credits required for this model
    }
    const creditsRequired = model.credits;
    console.log("creditsRequired", creditsRequired);

    // console.log(`Deducting ${creditsRequired}/${model.credits} credits: outsize=${sizeInfo?.width}x${sizeInfo?.height}=${sizeInfo?.width && sizeInfo?.height ? sizeInfo?.width * sizeInfo?.height / Megapixels : 0} , original=${sizeInfo?.originalWidth}x${sizeInfo?.originalHeight}=${sizeInfo?.originalWidth && sizeInfo?.originalHeight ? sizeInfo?.originalWidth * sizeInfo?.originalHeight / Megapixels : 0}, model=${model.name}`);
    try {
        await updateUserCredits(userId, -creditsRequired);
    } catch (error) {
        console.error('Error deducting user credits:', error);
        throw new Error(`Failed to deduct user credits: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}
async function falHailuoClient(apiId: string, prompt: string, sizeInfo?: ImageSizeInfo, imageUrl?: string) {
    //  falai client
    const { request_id } = await fal.queue.submit(apiId, {
        input: {
          prompt,
          image_url: imageUrl,
        }
      });
    
      return request_id;

}

export async function videoGeneration(userId:string, credits: number, toolId: string, modelId: string, prompt?: string, imageUrl?: string, sizeInfo?: ImageSizeInfo) {
    if(!toolId || !modelId) {
        throw new Error('Missing required parameters: toolId or modelId, or prompt');
    }

    //  find toolId
    const themeIndex = allThemeMiniConfig.findIndex(theme => theme.tools.find(t => t.id === toolId));
    if (themeIndex === -1) {
        throw new Error(`Theme not found for toolId: ${toolId}`);
    }
    const tool = themes[themeIndex].tools.find(t => t.id === toolId);
    if (!tool) {
        throw new Error(`Tool not found for toolId: ${toolId}`);
    }

    // if no prompt, then use default prompt
    // if prompt, then add prefix and suffix
    const newPrompt = (!prompt || !prompt.trim()) ? tool.editorConfig.promptEngine.defaultPrompt : 
    `${tool.editorConfig.promptEngine.promptPrefix} ${prompt.trim()} ${tool.editorConfig.promptEngine.promptSuffix}`.trim();


    //  find modelId
    const imgModel = imgModels.find(model => model.id === modelId);
    if (!imgModel) {
        throw new Error(`Model not found: ${modelId}`);
    }
    console.log("imageUrl:", imageUrl);

    //  compatibility check
    if (!compatibilityCheck(imgModel, newPrompt, imageUrl)) {
        throw new Error(`Model ${imgModel.name} is not compatible with the provided parameters.`);
    }

    // throw new Error(`debug error: ${modelId}`);

    //  credits
    if (imgModel.credits && imgModel.credits > 0) {
        //  check user credits
        if (credits < imgModel.credits) {
            throw new Error(`Insufficient credits. You need ${imgModel.credits} credits to use this model.`);
        }

        try {
            //  update user credits
           await creditsDeduction(userId, imgModel, sizeInfo);
        }
        catch (error) {
            console.error('Error updating user credits:', error);
            throw new Error(`Failed to update user credits: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }

    }
    console.log("prompt:", newPrompt);
    // throw new Error(`imgmodels: ${JSON.stringify(imgModel)}`);


    const request_id = await falHailuoClient(imgModel.apiId, newPrompt, sizeInfo, imageUrl);
    return  {
        request_id:request_id,
        apiId:imgModel.apiId
    };
}

