import { type NextRequest, NextResponse } from "next/server"
import {OCRRequest, processOCR} from '@/lib/deepseek-ocr';




export async function POST(request: NextRequest) {
  try {
    const body: OCRRequest = await request.json()

    // Validate required fields
    if (!body.input_source || !body.input_source.type || !body.input_source.value) {
      return NextResponse.json({ error: "Missing required field: input_source" }, { status: 400 })
    }

    if (!body.task_type) {
      return NextResponse.json({ error: "Missing required field: task_type" }, { status: 400 })
    }

    // Validate task_type
    const validTaskTypes = [
      "doc_to_markdown",
      "general_ocr",
      "simple_ocr",
      "figure_parse",
      "image_description",
      "text_localization",
      "custom",
    ]
    if (!validTaskTypes.includes(body.task_type)) {
      return NextResponse.json(
        { error: `Invalid task_type. Must be one of: ${validTaskTypes.join(", ")}` },
        { status: 400 },
      )
    }

    // Validate prompt requirement for certain task types
    if ((body.task_type === "custom" || body.task_type === "text_localization") && !body.prompt) {
      return NextResponse.json({ error: `Prompt is required for task_type: ${body.task_type}` }, { status: 400 })
    }

    // Validate model_size
    const validModelSizes = ["Tiny", "Small", "Base", "Large", "Gundam"]
    if (body.model_size && !validModelSizes.includes(body.model_size)) {
      return NextResponse.json(
        { error: `Invalid model_size. Must be one of: ${validModelSizes.join(", ")}` },
        { status: 400 },
      )
    }

    // Make request to OCR API
    const result = await processOCR(body)
    return NextResponse.json(result.output);
  } catch (error: any) {
    console.error('[API Route Error]', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
