
//  labubu doll lora
import { imgModels } from "@/lib/ai-tools/config";
import {compatibilityCheck, ImageSizeInfo} from "@/lib/ai-tools/models";
import { wavespeedClient, falaiClient, togetherClient, togetherFluxDevLoraClient, falKontextLoraClient, falaiGeminiClient } from "./image-genarate-client";
import { allThemeMiniConfig, themes } from "./config-utils";
import {updateUserCredits} from "@/lib/db";
import { Model, ModelType } from "../types";

const Megapixels = 2 ** 20; // 1 Megapixel = 2^20 pixels

async function creditsDeduction(userId: string, model: Model, sizeInfo?: ImageSizeInfo): Promise<void> {
    if (!model || !model.credits || model.credits <= 0) {
        return; // No credits required for this model
    }
    let creditsRequired = model.credits;
    if(model.id == "remove-bg-birefnet-v2" && sizeInfo?.originalWidth && sizeInfo?.originalHeight) {
        const unit = Math.ceil(
            Math.max((sizeInfo.originalWidth * sizeInfo.originalHeight) / Megapixels - 0.1,0.1) // add 0.1 threshold to avoid 0 credits
        ); // 1 credit per 1M pixels
        creditsRequired = unit * model.credits; // 1 credit per 1M pixels
    }else if(model.type == ModelType.KontextLora && sizeInfo?.originalWidth && sizeInfo?.originalHeight){
        const unit = Math.ceil(
            Math.max((sizeInfo.originalWidth * sizeInfo.originalHeight) / Megapixels - 0.1,0.1) // add 0.1 threshold to avoid 0 credits
        ); // 1 credit per 1M pixels
        creditsRequired = unit * model.credits;

    }else if(sizeInfo?.width && sizeInfo?.height) {
        const unit = Math.ceil(
            Math.max((sizeInfo.width * sizeInfo.height) / Megapixels - 0.1,0.1) // add 0.1 threshold to avoid 0 credits
        ); // 1 credit per 1M pixels
        creditsRequired = unit * model.credits; // 1 credit per 1M pixels
    }
    console.log(`Deducting ${creditsRequired}/${model.credits} credits: outsize=${sizeInfo?.width}x${sizeInfo?.height}=${sizeInfo?.width && sizeInfo?.height ? sizeInfo?.width * sizeInfo?.height / Megapixels : 0} , original=${sizeInfo?.originalWidth}x${sizeInfo?.originalHeight}=${sizeInfo?.originalWidth && sizeInfo?.originalHeight ? sizeInfo?.originalWidth * sizeInfo?.originalHeight / Megapixels : 0}, model=${model.name}`);

    try {
        await updateUserCredits(userId, -creditsRequired);
    } catch (error) {
        console.error('Error deducting user credits:', error);
        throw new Error(`Failed to deduct user credits: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

export async function imageGeneration(userId:string, credits: number, toolId: string, modelId: string, prompt?: string, imageBase64?: string, sizeInfo?: ImageSizeInfo) {
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
    let imgModel = imgModels.find(model => model.id === modelId);
    if (!imgModel) {
        throw new Error(`Model not found: ${modelId}`);
    }

    //  compatibility check
    if (!compatibilityCheck(imgModel, newPrompt, imageBase64)) {
        throw new Error(`Model ${imgModel.name} is not compatible with the provided parameters.`);
    }

    //  handle composer, create a new img model if composer exists
    if (imgModel.composer && imgModel.composer.length > 0) {
        const composerModel = {...imgModel};

        let isSupported = false;
        for (const composer of imgModel.composer) {
            composerModel.apiId = composer.apiId;
            composerModel.providerId = composer.providerId;
            composerModel.credits = composer.credits;
            composerModel.price = composer.price;
            composerModel.type = composer.type;
            if (!compatibilityCheck(composerModel, newPrompt, imageBase64)) {
                continue; //  skip this composer if not compatible
            }
            imgModel = composerModel; 
            isSupported = true;
            break; //  break after the first compatible composer

        }

        if (!isSupported) {
            throw new Error(`No compatible composer found for model ${imgModel.name}.`);
        }
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

    const image_url = imageBase64 ? `${imageBase64}` : undefined;


    switch (imgModel.providerId) {
        case "wavespeedai":
            return wavespeedClient(imgModel.apiId, newPrompt, sizeInfo, image_url);
        case "falai":
            return falaiClient(imgModel.apiId, newPrompt, sizeInfo, image_url);
        case "togetherai":
            return togetherClient(imgModel.apiId, newPrompt, image_url, sizeInfo);
        case "togetherFluxDevLora":
            if(!imgModel.lora || !imgModel.lora.loraPath || !imgModel.lora.loraScale) {
                throw new Error(`Model ${imgModel.name} does not have a valid Lora path.`);
            }
            return togetherFluxDevLoraClient(imgModel.apiId, newPrompt, imgModel.lora.loraPath, imgModel.lora.loraScale, 
                imgModel.lora.n, 
                imgModel.lora.triggerWords, 
                imgModel.lora.steps, sizeInfo);
        case "falaiGeminiClient":
            return falaiGeminiClient(imgModel.apiId, newPrompt, sizeInfo, image_url);
        case "falKontextLora":
            if(!image_url || !imgModel.lora || !imgModel.lora.loraPath || !imgModel.lora.loraScale) {
                throw new Error(`Model ${imgModel.name} does not have a valid Lora path.`);
            }
            return falKontextLoraClient(
                imgModel.apiId,
                newPrompt,
                imgModel.lora.loraPath,
                imgModel.lora.loraScale,
                image_url,
                imgModel.lora.n,
                imgModel.lora.triggerWords,
                imgModel.lora.steps,
                sizeInfo
            );
        default:
            throw new Error(`Unsupported provider: ${imgModel.providerId}`);
    }
}

export async function loraGeneration(userId:string, credits: number, toolId: string, imgModel: Model, prompt?: string, imageBase64?: string, sizeInfo?: ImageSizeInfo) {
    if(!toolId || !imgModel) {
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


    //  compatibility check
    if (!compatibilityCheck(imgModel, newPrompt, imageBase64)) {
        throw new Error(`Model ${imgModel.name} is not compatible with the provided parameters.`);
    }

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

    const image_url = imageBase64 ? `${imageBase64}` : undefined;

    switch (imgModel.providerId) {
        case "falKontextLora":
            if(!image_url || !imgModel.lora || !imgModel.lora.loraPath || !imgModel.lora.loraScale) {
                throw new Error(`Model ${imgModel.name} does not have a valid Lora path.`);
            }
            return falKontextLoraClient(
                imgModel.apiId,
                newPrompt,
                imgModel.lora.loraPath,
                imgModel.lora.loraScale,
                image_url,
                imgModel.lora.n,
                imgModel.lora.triggerWords,
                imgModel.lora.steps,
                sizeInfo
            );
        default:
            throw new Error(`Unsupported provider: ${imgModel.providerId}`);
    }
}
