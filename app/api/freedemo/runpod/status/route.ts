import { type NextRequest, NextResponse } from "next/server"

const RUNPOD_ENDPOINT_ID = "r3wlvfad7k5hgv"
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const jobId = searchParams.get("job_id")

    if (!jobId) {
      return NextResponse.json(
        { error: "Missing required parameter: job_id" },
        { status: 400 }
      )
    }

    if (!RUNPOD_API_KEY) {
      return NextResponse.json(
        { error: "RUNPOD_API_KEY is not set in environment variables" },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT_ID}/status/${jobId}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${RUNPOD_API_KEY}`,
        },
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: "Unknown error" }))
      return NextResponse.json(
        { error: errorData.error || `Runpod API error: ${response.status}` },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error('[Runpod Status API Error]', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    )
  }
}
