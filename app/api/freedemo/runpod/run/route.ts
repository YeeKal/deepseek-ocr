import { type NextRequest, NextResponse } from "next/server"

const RUNPOD_ENDPOINT_ID = "r3wlvfad7k5hgv"
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY

export async function POST(request: NextRequest) {
  try {
    if (!RUNPOD_API_KEY) {
      return NextResponse.json(
        { error: "RUNPOD_API_KEY is not set in environment variables" },
        { status: 500 }
      )
    }

    const body = await request.json()

    const response = await fetch(
      `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT_ID}/run`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${RUNPOD_API_KEY}`,
        },
        body: JSON.stringify(body),
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
    console.error('[Runpod Run API Error]', error)
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    )
  }
}
