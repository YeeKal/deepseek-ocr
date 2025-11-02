import { NextResponse } from "next/server"

const RUNPOD_ENDPOINT_ID = "r3wlvfad7k5hgv"
const RUNPOD_API_KEY = process.env.RUNPOD_API_KEY

// 强制动态渲染，防止 Next.js 缓存健康检查结果
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    if (!RUNPOD_API_KEY) {
      console.error("[Runpod Health] RUNPOD_API_KEY is not set")
      return NextResponse.json(
        {
          status: "error",
          error: "RUNPOD_API_KEY is not set",
        },
        { status: 503 },
      )
    }

    const response = await fetch(
      `https://api.runpod.ai/v2/${RUNPOD_ENDPOINT_ID}/health`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${RUNPOD_API_KEY}`,
        },
        signal: AbortSignal.timeout(10000),
      }
    )

    if (!response.ok) {
      console.error("[Runpod Health] Health check failed:", response.status, response.statusText)
      return NextResponse.json(
        {
          status: "error",
          error: `Health check failed: ${response.status}`,
        },
        { status: 503 },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error: any) {
    console.error("[Runpod Health] Health check error:", error)
    return NextResponse.json(
      {
        status: "error",
        error: error.message || "Unknown error",
      },
      { status: 503 },
    )
  }
}
