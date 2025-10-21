import { NextRequest, NextResponse } from 'next/server';
import { getUserSession } from '@/lib/auth';
import {loraGeneration} from '@/lib/ai-tools/image-genarate-wrapper';
import {ImageSizeInfo,getSizeFromAspectRatio} from '@/lib/ai-tools/models';
import { kontextLoras, loraGroups } from '@/lib/ai-tools/loras';
import { allThemeMiniConfig, themes } from "@/lib/ai-tools/config-utils";
import {ToolCategory} from "@/lib/types"
import {Megapixels} from "@/lib/constants"
import {scaleImage} from "@/lib/image-process/scale-image"
const max_duration = 60;

export async function POST(request: NextRequest) {
  // get user session
  const session = await getUserSession();
  console.log(session)
  
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized. Login please" }, { status: 401 })
  }

  try {
    const formData = await request.formData();
    const toolId = formData.get('toolId') as string;
    const loraId = formData.get('modelId') as string;
    const prompt = formData.get('prompt') as string;
    const imageBase64 = formData.get('image') as string | undefined;
    const seed = formData.get('seed') as string;
    const aspectRatio = formData.get("aspectRatio") as string
    const originalWidth = formData.get("originalWidth")
      ? Number.parseInt(formData.get("originalWidth") as string)
      : undefined
    const originalHeight = formData.get("originalHeight")
      ? Number.parseInt(formData.get("originalHeight") as string)
      : undefined
    
          //  image pre process
    let processedImage = imageBase64
    let processedWidth = originalWidth
    let processedHeight = originalHeight
    if(imageBase64){
      const processedResult = await scaleImage(imageBase64, Megapixels)
      processedImage = `data:${processedResult.mimeType};base64,${processedResult.base64}`
      processedWidth = processedResult.width
      processedHeight = processedResult.height

    }
    
      // Get size based on aspect ratio and original dimensions
    const size = getSizeFromAspectRatio(aspectRatio, processedWidth, processedHeight)
    
    console.log("Received form data:", {
      toolId,
      loraId,
      prompt,
      seed,
      aspectRatio,
      originalWidth,
      originalHeight,
      processedWidth,
      processedHeight,
      size
    });
    const sizeInfo: ImageSizeInfo = {
      width: size?.width,
      height: size?.height,
      size: size ? `${size.width}x${size.height}` : undefined,
      originalWidth: processedWidth,
      originalHeight: processedHeight,
      seed: seed ? seed : undefined,
    };

    //  find lora base model
    if (!toolId) {
      return NextResponse.json({ error: `toolId not found: ${toolId}` }, { status: 404 });
    }
    const themeIndex = allThemeMiniConfig.findIndex(theme => theme.tools.find(t => t.id === toolId));
    if (themeIndex === -1) {
      return NextResponse.json({ error: `invalid toolid: ${toolId}` }, { status: 404 });
    }
    const tool = themes[themeIndex].tools.find(t => t.id === toolId);
    if (!tool) {
      return NextResponse.json({ error: `invalid toolid: ${toolId}` }, { status: 404 });
    }


    let selectedLoraIndex = -1;
    switch(tool.category) {
      case ToolCategory.KontextLora:
        selectedLoraIndex = 0
        break;
      default:
        break;

    }
    console.log(`tool:${tool.id} ${tool.slug}` )


    if( selectedLoraIndex < 0){
      return NextResponse.json({ error: `tool.category invalid: ${tool.category}` }, { status: 404 });
    }

    const selectedModel = loraGroups[selectedLoraIndex].baseModel;
    const selectedLora = loraGroups[selectedLoraIndex].loras.find(lora => lora.id === loraId);
    if (!selectedLora) {
      return NextResponse.json({ error: `LoRA not found: ${loraId}` }, { status: 404 });
    }

    // create new image model
    selectedModel.lora = {
      id: selectedLora.id,
      loraPath: selectedLora.loraPath,
      loraScale: selectedLora.loraScale,
      icon: selectedLora.icon,
      name: selectedLora.name,
      description: selectedLora.description,
      triggerWords: selectedLora.triggerWords,
      steps: selectedLora.steps,
    };


    const image = await loraGeneration(session.user.id, session.user.credits ?? 0, toolId, selectedModel, prompt, processedImage, sizeInfo);

    // Return the generated image
    return NextResponse.json({ base64: image?.base64, mimeType: image?.mimeType }, { status: 200 });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: `Failed to generate image ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
