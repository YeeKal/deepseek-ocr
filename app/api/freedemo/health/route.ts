import { NextResponse } from 'next/server';
import {GPU_API_URL} from '@/lib/constants';

// 强制动态渲染，防止 Next.js 缓存健康检查结果
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`${GPU_API_URL}/health`, {
        // 设置较短的超时，避免健康检查卡住页面
        signal: AbortSignal.timeout(10000)
    });

   if (!response.ok) {
      console.error("[v0] Health check failed:", response.status, response.statusText)
      return NextResponse.json(
        {
          status: "error",
          gpu_status: "unknown",
          max_concurrent_gpu_tasks: 0,
          available_gpu_slots: 0,
          max_queue_size: 0,
          current_queue_size: 0,
        },
        { status: 503 },
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("[v0] Health check error:", error)
    return NextResponse.json(
      {
        status: "error",
        gpu_status: "unknown",
        max_concurrent_gpu_tasks: 0,
        available_gpu_slots: 0,
        max_queue_size: 0,
        current_queue_size: 0,
      },
      { status: 503 },
    )
  }
}