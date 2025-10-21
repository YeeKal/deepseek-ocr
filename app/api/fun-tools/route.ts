import { NextRequest, NextResponse } from 'next/server';
import { getUserSession } from '@/lib/auth';
import { dispatchTool, ToolId } from '@/lib/image-process/fun-tool-functions';



const max_duration = 60;

export async function POST(request: NextRequest) {
  // get user session
  const session = await getUserSession();


  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized. Login please" }, { status: 401 })
  }


  try {
    const formData = await request.formData();

    const toolId = formData.get('toolId') as ToolId;
    const toolParam = formData.get('toolParam') as string;
    console.log("formData", formData);

    // cast toolId to satisfy dispatchTool's expected key type and await the result
    const response = await dispatchTool(session.user.id,toolId, toolParam);

    // Return the generated image
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: `Failed to process tool` },
      { status: 500 }
    );
  }
}
