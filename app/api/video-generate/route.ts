import { NextRequest, NextResponse } from 'next/server';
import { getUserSession } from '@/lib/auth';
import {imageGeneration} from '@/lib/ai-tools/image-genarate-wrapper';
import {ImageSizeInfo,getSizeFromAspectRatio} from '@/lib/ai-tools/models';
import {videoGeneration} from '@/lib/ai-video/video-genarate-wrapper';
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
    const modelId = formData.get('modelId') as string;
    const prompt = formData.get('prompt') as string;
    const imageUrl = formData.get('imageUrl') as string | undefined;
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
      toolId,
      modelId,
      prompt,
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
    };

    const {request_id , apiId}= await videoGeneration(session.user.id, session.user.credits ?? 0, toolId, modelId, prompt, imageUrl, sizeInfo);

    // Return the generated image
    return NextResponse.json({ request_id , apiId }, { status: 200 });
  } catch (error) {
    console.error('Error generating video:', error);
    return NextResponse.json(
      { error: `Failed to generate video ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    );
  }
}
