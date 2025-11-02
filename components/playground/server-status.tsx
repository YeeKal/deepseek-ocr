"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Clock } from "lucide-react"

type ServerHealth = {
  status: string
  gpu_status: string
  max_concurrent_gpu_tasks: number
  available_gpu_slots: number
  max_queue_size: number
  current_queue_size: number
}

export function ServerStatus() {
  const [health, setHealth] = useState<ServerHealth | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const fetchHealth = async () => {
    try {
      const response = await fetch("/api/health")
      if (response.ok) {
        const data = await response.json()
        setHealth(data)
        setLastUpdate(new Date())
      }
    } catch (error) {
      console.error("[v0] Failed to fetch server health:", error)
    }
  }

  useEffect(() => {
    fetchHealth()
    const interval = setInterval(fetchHealth, 5 * 60 * 1000) // 5 minutes
    return () => clearInterval(interval)
  }, [])

  if (!health) return null

  const isHealthy = health.status === "ok"
  const isGpuIdle = health.gpu_status === "idle"

  return (
    <Card className="p-4 space-y-3 min-w-[280px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4" />
          <span className="font-semibold text-sm">Server Status</span>
        </div>
        <Badge variant={isHealthy ? "default" : "destructive"}>{isHealthy ? "Online" : "Offline"}</Badge>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">GPU Status</span>
          <Badge variant={isGpuIdle ? "secondary" : "default"}>{health.gpu_status}</Badge>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Available Slots</span>
          <span className="font-medium">
            {health.available_gpu_slots} / {health.max_concurrent_gpu_tasks}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-muted-foreground">Queue</span>
          <span className="font-medium">
            {health.current_queue_size} / {health.max_queue_size}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs text-muted-foreground pt-2 border-t">
        <Clock className="h-3 w-3" />
        <span>Updated {lastUpdate.toLocaleTimeString()}</span>
      </div>
    </Card>
  )
}
