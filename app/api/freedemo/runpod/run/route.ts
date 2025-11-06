import { type NextRequest, NextResponse } from "next/server"

const RUNPOD_ENDPOINT_ID = "r3wlvfad7k5hgv"
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY

async function verifyTurnstileToken(token: string): Promise<boolean> {
  try {
    const verifyResponse = await fetch(
      `${process.env.BASE_URL || 'http://localhost:3000'}/api/turnstile/verify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      }
    )

    if (!verifyResponse.ok) {
      const errorText = await verifyResponse.text()
      console.error("Failed to verify token with internal API:", verifyResponse.status, errorText)
      return false
    }

    const verifyResult = await verifyResponse.json()
    if (!verifyResult.success) {
      console.error("Turnstile verification failed:", verifyResult.error, verifyResult.details)
    }
    return verifyResult.success === true
  } catch (error) {
    console.error("Error verifying Turnstile token:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!RUNPOD_API_KEY) {
      return NextResponse.json(
        { error: "RUNPOD_API_KEY is not set in environment variables" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { turnstileToken } = body

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Security verification required" },
        { status: 400 }
      )
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken)
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Invalid security verification" },
        { status: 400 }
      )
    }

    // return NextResponse.json(
    //     { error: "Force Fail" },
    //     { status: 400 }
    //   )

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
