"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ImageUpload } from "@/components/playground/image-upload"
import { ParameterSettings } from "@/components/playground/parameter-settings"
import { ResultDisplay } from "@/components/playground/result-display"
import { RUNPOD_MAX_EXECUTION_TIME } from "@/lib/constants"
import { THEME_COLOR } from "@/lib/constants"

export type OCRResult = {
  text_content: string
  bounding_boxes?: Array<{ text: string; box: number[] }>
  visualization_b64?: string | string[]
  delayTime?: number
  executionTime?: number
}

export type HealthStatus = {
  jobs: {
    completed: number
    failed: number
    inProgress: number
    inQueue: number
    retried: number
  }
  workers: {
    idle: number
    running: number
  }
}

export function DemoSection() {
  const [imageSource, setImageSource] = useState<{ type: "url" | "base64"; value: string } | null>(null)
  const [modelSize, setModelSize] = useState<string>("Gundam")
  const [taskType, setTaskType] = useState<string>("doc_to_markdown")
  const [prompt, setPrompt] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<OCRResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [jobId, setJobId] = useState<string | null>(null)
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null)
  const [elapsedTime, setElapsedTime] = useState<number>(0)

  // Fetch health status every 10 seconds
  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await fetch("/api/freedemo/runpod/health")
        if (response.ok) {
          const data = await response.json()
          setHealthStatus(data)
        }
      } catch (err) {
        console.error("Failed to fetch health status:", err)
      }
    }

    fetchHealth()
    const interval = setInterval(fetchHealth, 10000)

    return () => clearInterval(interval)
  }, [])

  // Timer for processing status
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isProcessing) {
      setElapsedTime(0)
      interval = setInterval(() => {
        setElapsedTime((prev) => prev + 1)
      }, 1000)
    } else {
      setElapsedTime(0)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isProcessing])

  const handleProcess = async () => {
    if (!imageSource) {
      handleError("Please upload an image first")
      return
    }

    if ((taskType === "custom" || taskType === "text_localization") && !prompt.trim()) {
      handleError("Prompt is required for this task type")
      return
    }

    setIsProcessing(true)
    setError(null)
    setResult(null)
    setJobId(null)

    try {
      // Step 1: Submit task
      const runResponse = await fetch("/api/freedemo/runpod/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: {
            input_source: imageSource,
            task_type: taskType,
            prompt: prompt.trim() || "",
            model_size: modelSize,
            output_options: {
              include_bounding_boxes: true,
              include_visualization: true,
            },
          },
        }),
      })

      if (!runResponse.ok) {
        const errorData = await runResponse.json()
        throw new Error(errorData.error || "Failed to submit task")
      }

      const runData = await runResponse.json()
      const { id: submittedJobId } = runData
      setJobId(submittedJobId)

      // Step 2: Poll for completion
      const pollStatus = async (jobId: string) => {
        const maxAttempts = RUNPOD_MAX_EXECUTION_TIME
        let attempts = 0

        const poll = async () => {
          attempts++

          try {
            const statusResponse = await fetch(
              `/api/freedemo/runpod/status?job_id=${encodeURIComponent(jobId)}`
            )

            if (!statusResponse.ok) {
              const errorData = await statusResponse.json()
              throw new Error(errorData.error || "Failed to check status")
            }

            const statusData = await statusResponse.json()

            if (statusData.status === "COMPLETED") {
              // Extract the output and metrics
              const output = statusData.output
              const result: OCRResult = {
                ...output,
                delayTime: statusData.delayTime,
                executionTime: statusData.executionTime,
              }
              setResult(result)
              setIsProcessing(false)
              setJobId(null)
              return
            }

            if (statusData.status === "FAILED") {
              throw new Error("Task failed to complete")
            }

            // Still processing, continue polling
            if (attempts < maxAttempts) {
              setTimeout(poll, 1000) // Poll every 1 second
            } else {
              throw new Error("Task timeout - maximum wait time exceeded")
            }
          } catch (err) {
            setIsProcessing(false)
            setJobId(null)
            handleError(err instanceof Error ? err.message : "An unexpected error occurred")
          }
        }

        poll()
      }

      pollStatus(submittedJobId)
    } catch (err) {
      setIsProcessing(false)
      setJobId(null)
      handleError(err instanceof Error ? err.message : "An unexpected error occurred")
    }
  }

  // Error dialog state
  const [showErrorDialog, setShowErrorDialog] = useState(false)

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setShowErrorDialog(true)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <>
      <section id="demo" className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Interactive Playground</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload an image and experience the power of DeepSeek-OCR technology
            </p>

            {/* Free and No Login Badge */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Unlimited Free</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-semibold">No Login Required</span>
              </div>
            </div>
          </div>

          {/* System Status - Compact layout */}
          {healthStatus && (
            <Card className="grid lg:grid-cols-2 gap-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50">
              <div>
                <div className="flex items-center gap-x-10 mb-2">
                  <h3 className="text-sm font-semibold">Server status</h3>
                  {healthStatus.workers.running === 0 && (
                    <span className="text-xs text-rose-500">⚡️ Cooling down</span>
                  )}
                </div>
                {healthStatus.workers.running === 0 && (
                  <div className="mb-3 p-2  rounded text-xs text-purple-800 dark:text-amber-200">
                    ⚡️ System is cooling down. First request may take ~40 seconds to start.
                  </div>
                )}
             </div>
              <div className="flex gap-3 text-center">
                <div className="flex-1">
                  <div className="text-lg font-bold text-emerald-500">
                    {(healthStatus.jobs.completed + 1024).toLocaleString()}
                  </div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-blue-500">
                    {healthStatus.jobs.inProgress}
                  </div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div className="flex-1">
                  <div className="text-lg font-bold text-amber-500">
                    {healthStatus.jobs.inQueue}
                  </div>
                  <div className="text-xs text-muted-foreground">In Queue</div>
                </div>
              </div>
            </Card>
          )}

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <div className="space-y-4">
                  <ImageUpload onImageChange={setImageSource} />
                 

                {/* Process Button */}
                <button
                  onClick={handleProcess}
                  disabled={!imageSource || isProcessing}
                  className="w-full py-3 px-4 rounded-lg font-medium text-sm transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: THEME_COLOR.PRIMARY,
                    color: 'white',
                  }}
                >
                  {isProcessing ? 'Processing...' : 'Extract Text'}
                </button>

                <ParameterSettings
                  modelSize={modelSize}
                  taskType={taskType}
                  prompt={prompt}
                  onModelSizeChange={setModelSize}
                  onTaskTypeChange={setTaskType}
                  onPromptChange={setPrompt}
                />

                {jobId && (
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                      Task ID: {jobId}
                    </p>
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6">
              <ResultDisplay result={result} error={error} isProcessing={isProcessing} elapsedTime={elapsedTime} />
            </Card>
          </div>
        </div>
      </section>

      {/* Error Dialog */}
      {showErrorDialog && error && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-red-500 mb-4">Error</h3>
            <p className="text-sm text-muted-foreground mb-6">{error}</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowErrorDialog(false)}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowErrorDialog(false)
                  handleProcess()
                }}
                className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
