import { NextRequest, NextResponse } from 'next/server';
import { getUserSession } from '@/lib/auth';
import { imageGeneration } from '@/lib/ai-tools/image-genarate-wrapper';
import { ImageSizeInfo, getSizeFromAspectRatio } from '@/lib/ai-tools/models';
import { allThemeMiniConfig, themes } from "@/lib/ai-tools/config-utils";
import { use } from 'react';

const max_duration = 60;

export async function POST(request: NextRequest) {
  // get user session
  const session = await getUserSession();


  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized. Login please" }, { status: 401 })
  }

  try {
    const formData = await request.formData();
    const toolId = formData.get('toolId') as string;
    const modelId = formData.get('modelId') as string;
    const rawPrompt = formData.get('prompt') as string;
    const selectedParams = formData.get(`selectedParams`) as string | undefined;
    const imageBase64 = formData.get('image') as string | undefined;
    const seed = formData.get('seed') as string;
    const aspectRatio = formData.get("aspectRatio") as string
    const originalWidth = formData.get("originalWidth")
      ? Number.parseInt(formData.get("originalWidth") as string)
      : undefined
    const originalHeight = formData.get("originalHeight")
      ? Number.parseInt(formData.get("originalHeight") as string)
      : undefined

    // Get size based on aspect ratio and original dimensions
    const size = getSizeFromAspectRatio(aspectRatio, originalWidth, originalHeight)

    console.log("Received form data:", {
      userName: session.user.name,
      credits: session.user.credits,
      subscriptionTier: session.user.subscriptionTier,
      toolId,
      modelId,
      rawPrompt,
      seed,
      aspectRatio,
      originalWidth,
      originalHeight,
      size
    });
    const sizeInfo: ImageSizeInfo = {
      width: size?.width,
      height: size?.height,
      size: size ? `${size.width}x${size.height}` : undefined,
      originalWidth: originalWidth,
      originalHeight: originalHeight,
      seed: seed ? seed : undefined,
    };

    //  find toolId
    const themeIndex = allThemeMiniConfig.findIndex(theme => theme.tools.find(t => t.id === toolId));
    if (themeIndex === -1) {
      NextResponse.json(
        { error: `Theme not found for toolId: ${toolId}` },
        { status: 500 }
      );
    }
    const tool = themes[themeIndex].tools.find(t => t.id === toolId);
    if (!tool) {
      NextResponse.json(
        { error: `Tool not found for toolId: ${toolId}` },
        { status: 500 }
      );
    }

    let prompt = rawPrompt;
    if (tool?.paramSchema && !selectedParams) {
      NextResponse.json(
        { error: `Invalid selectedParams for tool: ${toolId}` },
        { status: 500 }
      );
    }
    if (tool?.paramSchema && selectedParams) {
      console.log("selectedParams:", selectedParams)
      prompt = tool.paramSchema.callbackFunc(rawPrompt, selectedParams, tool.paramSchema.params);
    }

    const image = await imageGeneration(session.user.id, session.user.credits ?? 0, toolId, modelId, prompt, imageBase64, sizeInfo);

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
