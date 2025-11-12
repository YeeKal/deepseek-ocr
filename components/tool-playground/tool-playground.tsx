"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ImageUpload } from "@/components/tool-playground/image-upload"
import { ResultDisplay } from "@/components/tool-playground/result-display"
import { THEME_COLOR } from "@/lib/constants"
import type { OCRResult } from "@/lib/types"
import {PLAYGROUND_SECTION_ID} from "@/lib/constants"
import type { ToolConfig } from "@/lib/config/tool-types"

type PlaygroundProps = ToolConfig["playground"]

export interface ToolPlaygroundProps {
  playground: PlaygroundProps
}

export function ToolPlayground({playground}: ToolPlaygroundProps) {
  const [imageSource, setImageSource] = useState<{ type: "url" | "base64"; value: string } | null>(null)
  const [fileType, setFileType] = useState<"image" | "pdf">("image")
  const [isProcessing, setIsProcessing] = useState(false)
  const [result, setResult] = useState<OCRResult | null>(null)
  const [error, setError] = useState<string | null>(null)

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
            callback: (token: string) => {
              handleTurnstileSuccess(token);
            },
            'error-callback': (errorCode: string) => {
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

  // Auto-detect file type when image source changes (for URL)
  useEffect(() => {
    if (imageSource?.type === "url" && imageSource.value) {
      // Detect from URL
      const url = imageSource.value.toLowerCase()
      if (url.includes(".pdf") || url.includes("%2epdf")) {
        setFileType("pdf")
      } else {
        setFileType("image")
      }
    }
  }, [imageSource])

  // Handle file type change from ImageUpload component
  const handleFileTypeChange = (detectedType: "image" | "pdf") => {
    setFileType(detectedType)
  }

  // Logic to handle submission after token is received
  useEffect(() => {
    if (turnstileToken) {
      handleProcessWithToken(turnstileToken);
    }
  }, [turnstileToken]);

  const handleProcess = async () => {
    if (!imageSource) {
      handleError("Please upload a file first")
      return
    }

    if (isVerifying || isProcessing) return

    // PaddleOCRVL needs Turnstile verification
    setIsVerifying(true)
    setShowTurnstile(true)
  }
  
  const handleProcessWithToken = async (token: string) => {
    setTurnstileToken(null);

    setIsProcessing(true)
    setError(null)
    setResult(null)

    try {
      // PaddleOCRVL - Direct API call
      const response = await fetch("/api/ocr/paddleocrvl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileBase64: imageSource?.type === "base64" ? imageSource.value : undefined,
          fileUrl: imageSource?.type === "url" ? imageSource.value : undefined,
          fileType: fileType,
          turnstileToken: token,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to process file")
      }

      const data = await response.json()
      // Convert PaddleOCRVL response to OCRResult format
      const ocrResult: OCRResult = {
        text_content: data.processedMarkdown,
        visualization_b64: data.layoutImageUrl,
        delayTime: data.delayTime,
        executionTime: data.executionTime,
      }
      setResult(ocrResult)
      setIsProcessing(false)
    } catch (err) {
      setIsProcessing(false)
      handleError(err instanceof Error ? err.message : "An unexpected error occurred")
    }
  }

  const [showErrorDialog, setShowErrorDialog] = useState(false)

  const handleError = (errorMessage: string) => {
    setError(errorMessage)
    setShowErrorDialog(true)
  }

  const handleTurnstileSuccess = (token: string) => {
    console.log("Turnstile verification successful:", token.slice(0, 10) + "...");
    setIsVerifying(false);
    setShowTurnstile(false);
    setTurnstileToken(token);
  }

  const handleTurnstileError = () => {
    setIsVerifying(false);
    setShowTurnstile(false);
    handleError("Verification failed. Please check your connection and try again.")
  }

  return (
    <>
      <section id={PLAYGROUND_SECTION_ID} className="min-h-screen px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold"> {playground.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {playground.description}
            </p>

            <div className="flex items-center justify-center gap-2 md:gap-4 mt-4 text-sm">
              <div className="inline-flex items-center px-2 py-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold">Unlimited Free</span>
              </div>
              <div className="inline-flex items-center px-2 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="font-semibold">No Login Required</span>
              </div>
              </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 space-y-4">
              <div className="space-y-4">
                  <ImageUpload
                    onImageChange={setImageSource}
                    onFileTypeChange={handleFileTypeChange}
                    exampleImages={playground.exampleImages}
                  />

                  {/* File Type Selection */}
                  <div className="flex items-center gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold uppercase tracking-wider block">
                        File Type
                      </label>
                    </div>
                    <div className="flex flex-1 flex-row justify-center space-x-6">

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="fileType"
                          value="image"
                          checked={fileType === "image"}
                          onChange={() => setFileType("image")}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-medium">Image</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="fileType"
                          value="pdf"
                          checked={fileType === "pdf"}
                          onChange={() => setFileType("pdf")}
                          className="h-4 w-4 text-primary focus:ring-primary"
                        />
                        <span className="text-sm font-medium">PDF</span>
                      </label>
                    </div>
                  </div>

                <button
                  onClick={handleProcess}
                  disabled={!imageSource || isProcessing || isVerifying}
                  className="w-full py-3 px-4 rounded-lg font-medium text-sm bg-primary text-primary-foreground transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: THEME_COLOR.PRIMARY,
                    color: 'white',
                  }}
                >
                  {isProcessing ? 'Processing...' : (isVerifying ? 'Verifying...' : 'Extract Text')}
                </button>
              </div>
            </Card>
            <Card className="p-6">
              <ResultDisplay result={result} error={error} isProcessing={isProcessing} guide={playground.guide}/>
            </Card>
          </div>

        </div>
      </section>

      {/* Turnstile Verification Dialog */}
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

      {/* Error Dialog */}
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

// Window types for Turnstile
declare global {
  interface Window {
    turnstile: any;
  }
}