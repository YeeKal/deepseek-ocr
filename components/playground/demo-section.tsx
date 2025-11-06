"use client"

import { useState, useEffect, useCallback } from "react" // Import useCallback
import { Card } from "@/components/ui/card"
import { ImageUpload } from "@/components/playground/image-upload"
import { ParameterSettings } from "@/components/playground/parameter-settings"
import { ResultDisplay } from "@/components/playground/result-display"
import { RUNPOD_MAX_EXECUTION_TIME } from "@/lib/constants"
import { THEME_COLOR } from "@/lib/constants"

// TypeScript types (no changes)
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
  
  // --- Turnstile State ---
  const [showTurnstile, setShowTurnstile] = useState<boolean>(false)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileLoaded, setTurnstileLoaded] = useState<boolean>(false)
  const [isVerifying, setIsVerifying] = useState<boolean>(false)

  // Load Turnstile script with better error handling
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if already loaded
      if (typeof window.turnstile !== 'undefined') {
        setTurnstileLoaded(true);
        return;
      }

      // Check if script is already being loaded
      if (document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) {
        // Wait for it to load
        const checkInterval = setInterval(() => {
          if (typeof window.turnstile !== 'undefined') {
            clearInterval(checkInterval);
            setTurnstileLoaded(true);
          }
        }, 100);
        
        const timeout = setTimeout(() => {
          clearInterval(checkInterval);
          setTurnstileLoaded(false);
        }, 5000);
        
        return () => {
          clearInterval(checkInterval);
          clearTimeout(timeout);
        };
      }

      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;

      const timeout = setTimeout(() => {
        console.error('Turnstile script load timeout');
        setTurnstileLoaded(false);
      }, 5000);

      script.onload = () => {
        clearTimeout(timeout);
        setTurnstileLoaded(true);
      };
      
      script.onerror = () => {
        clearTimeout(timeout);
        console.error('Turnstile script failed to load');
        setTurnstileLoaded(false);
      };
      
      document.head.appendChild(script);

      return () => {
        clearTimeout(timeout);
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);
  
  // Render/cleanup Turnstile widget when modal is shown/hidden
  useEffect(() => {
    let widgetId: string | null = null;
    
    if (showTurnstile && turnstileLoaded && typeof window !== 'undefined' && typeof window.turnstile !== 'undefined') {
      // Clear container first
      const container = document.getElementById('turnstile-container');
      if (container) {
        container.innerHTML = '';
        
        try {
          widgetId = window.turnstile.render('#turnstile-container', {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
            size: 'normal',
            callback: (token:string) => {
              handleTurnstileSuccess(token);
            },
            'error-callback': (errorCode:string) => {
              console.error("Turnstile verification error with code:", errorCode);
              handleTurnstileError();
            },
            'expired-callback': () => {
              console.log("Turnstile verification expired");
              setTurnstileToken(null);
            },
            'unsupported-callback': () => {
              console.error("Turnstile unsupported browser");
              handleTurnstileError();
            },
          });
        } catch (error) {
          console.error("Error rendering Turnstile widget:", error);
          handleTurnstileError();
        }
      }
    }
    
    // Cleanup function
    return () => {
      if (widgetId && typeof window !== 'undefined' && typeof window.turnstile !== 'undefined') {
        try {
          window.turnstile.remove(widgetId);
        } catch (e) {
          console.warn('Failed to remove Turnstile widget:', e);
        }
      }
    };
  }, [showTurnstile, turnstileLoaded]);

  // Fetch health status (no changes)
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

  // Timer for processing (no changes)
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

  // --- MODIFIED: Logic to handle submission after token is received ---
  useEffect(() => {
      // This effect triggers when a new token is received from the Turnstile callback.
      if (turnstileToken) {
          // Immediately start the process with the new token.
          handleProcessWithToken(turnstileToken);
      }
  }, [turnstileToken]); // Dependency array ensures this only runs when turnstileToken changes.

  const handleProcess = async () => {
    if (!imageSource) {
      handleError("Please upload an image first")
      return
    }
    if ((taskType === "custom" || taskType === "text_localization") && !prompt.trim()) {
      handleError("Prompt is required for this task type")
      return
    }
    if (isVerifying || isProcessing) return

    setIsVerifying(true)
    // Simply show the Turnstile modal. The rest of the flow is now handled by useEffect.
    setShowTurnstile(true)
  }
  
  const handleProcessWithToken = async (token: string) => {
    // --- MODIFIED: Reset token immediately to prevent reuse ---
    setTurnstileToken(null);
    
    setIsProcessing(true)
    setError(null)
    setResult(null)
    setJobId(null)

    try {
      const runResponse = await fetch("/api/freedemo/runpod/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
          turnstileToken: token, // Use the passed token
        }),
      })

      if (!runResponse.ok) {
        const errorData = await runResponse.json()
        throw new Error(errorData.error || "Failed to submit task")
      }

      const runData = await runResponse.json()
      const { id: submittedJobId } = runData
      setJobId(submittedJobId)

      // Polling logic remains the same...
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
              const output = statusData.output
              const result: OCRResult = { ...output, delayTime: statusData.delayTime, executionTime: statusData.executionTime }
              setResult(result)
              setIsProcessing(false)
              setJobId(null)
              return
            }
            if (statusData.status === "FAILED") {
              throw new Error("Task failed to complete")
            }
            if (attempts < maxAttempts) {
              setTimeout(poll, 1000)
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

  const [showErrorDialog, setShowErrorDialog] = useState(false)

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setShowErrorDialog(true)
  }

  // --- MODIFIED: handleTurnstileSuccess is now simpler ---
  const handleTurnstileSuccess = (token: string) => {
    console.log("Turnstile verification successful:", token.slice(0, 10) + "...");
    setIsVerifying(false);
    setShowTurnstile(false); // Close the modal
    setTurnstileToken(token); // Set the token, which will trigger the useEffect for submission
  }

  const handleTurnstileError = () => {
    setIsVerifying(false);
    setShowTurnstile(false); // Close the modal on error
    handleError("Verification failed. Please check your connection and try again.")
  }

  // The rest of the component's JSX remains exactly the same...
  return (
    <>
      <section id="playground" className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* ... (all your existing JSX for the page layout, cards, etc.) ... */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold"> Drag, Drop, and Understand</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload an image and experience the power of DeepSeek-OCR technology
            </p>
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
              <a href="https://runpod.io?ref=5kdp9mps" target="_blank">
              <div className="inline-flex items-center px-4 py-2 hover:bg-none hover:bg-purple-400 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none"  viewBox="0 0 24 24" stroke="currentColor" >
                  <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>
                </svg>
                <span className="font-semibold">Support by Runpod</span>
              </div>
              </a>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <div className="space-y-4">
                  <ImageUpload onImageChange={setImageSource} />
                <button
                  onClick={handleProcess}
                  disabled={!imageSource || isProcessing || isVerifying}
                  className="w-full py-3 px-4 rounded-lg font-medium text-sm transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: THEME_COLOR.PRIMARY,
                    color: 'white',
                  }}
                >
                  {isProcessing ? 'Processing...' : (isVerifying ? 'Verifying...' : 'Extract Text')}
                </button>
                <ParameterSettings
                  modelSize={modelSize}
                  taskType={taskType}
                  prompt={prompt}
                  onModelSizeChange={setModelSize}
                  onTaskTypeChange={setTaskType}
                  onPromptChange={setPrompt}
                />
              </div>
            </Card>
            <Card className="p-6">
              <ResultDisplay result={result} error={error} isProcessing={isProcessing} elapsedTime={elapsedTime} runningWorkerNumber={healthStatus?.workers.running || 0} />
            </Card>
          </div>

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

        </div>
      </section>

      {/* Turnstile Verification Dialog (JSX remains the same) */}
      {showTurnstile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold mb-4">Security Verification</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Please complete the security check to proceed.
            </p>
            <div id="turnstile-container" className="flex justify-center mb-4 min-h-[65px]">
              {!turnstileLoaded && (
                <div className="h-full flex items-center justify-center text-sm text-muted-foreground">
                  {typeof window !== 'undefined' ? 'Loading verification...' : 'Initializing...'}
                </div>
              )}
            </div>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => {
                  setShowTurnstile(false);
                  setIsVerifying(false);
                }}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Dialog (no changes) */}
      {showErrorDialog && error && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-background rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-red-500 mb-4">Error</h3>
            <p className="text-sm text-muted-foreground mb-6">{error}</p>
            <div className="flex gap-3 justify-end">
              {/* <button
                onClick={() => setShowErrorDialog(false)}
                className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent"
              >
                Cancel
              </button> */}
              <button
                onClick={() => {
                  setShowErrorDialog(false)
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

// Ensure window types are declared globally if you haven't already
declare global {
  interface Window {
    turnstile: any;
    onTurnstileLoaded?: () => void;
  }
}