"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Sparkles } from "lucide-react"
import type { OCRResult } from "@/lib/types"
import OcrMDResult from "./ocr-markdown"

type ResultDisplayProps = {
  result: OCRResult | null
  error: string | null
  isProcessing: boolean
  elapsedTime?: number
  runningWorkerNumber: number
}

export function ResultDisplay({ result, error, isProcessing, elapsedTime = 0,runningWorkerNumber = 0 }: ResultDisplayProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    if (result?.text_content) {
      await navigator.clipboard.writeText(result.text_content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (isProcessing) {
    return (
      <div className="h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="text-muted-foreground">Processing your image...</p>
           {/* Conditional message for long waits (cold starts) */}
        {runningWorkerNumber ===0 && elapsedTime > 15  && (
           <div className="text-xs text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200">
             <p><strong>Server is warming up!</strong> This can take a moment on the first run. Thanks for your patience.</p>
           </div>
        )}
          <p className="text-sm text-muted-foreground">
            Elapsed time: {formatTime(elapsedTime)}
          </p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-2 max-w-md">
          <div className="text-destructive text-4xl mb-4">⚠️</div>
          <h3 className="font-semibold text-lg">Error</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-3 text-muted-foreground p-4">
        <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary opacity-60" />
        <h3 className="text-lg font-semibold text-foreground">
          Ready to See the Magic?
        </h3>
        <p>
          Upload your own image, or select one of our examples to get started.
        </p>
        <p className="text-sm pt-2">
          <strong>Tip:</strong> Try different models and task types to see how the results change!
        </p>
      </div>
      </div>
    )
  }


  return (
    <div className="space-y-6">
      {/* Performance Metrics - Always visible */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg p-5 border border-blue-200/50 dark:border-blue-800/50">
        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
          ⚡ Performance Metrics
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 dark:bg-background/70 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-xs font-medium text-muted-foreground mb-1">Queue Time</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {result?.delayTime !== undefined ? (result.delayTime / 1000).toFixed(2) : '--'}
              <span className="text-sm font-normal text-muted-foreground ml-1">sec</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Time waiting in queue</div>
          </div>
          <div className="bg-white/70 dark:bg-background/70 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-xs font-medium text-muted-foreground mb-1">Execution Time</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {result?.executionTime !== undefined ? (result.executionTime / 1000).toFixed(2) : '--'}
              <span className="text-sm font-normal text-muted-foreground ml-1">sec</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">Processing duration</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Results</h3>
        <Button variant="outline" size="sm" onClick={handleCopy} disabled={!result.text_content}>
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>
      </div>

      <Tabs defaultValue="rendered" className="w-full">
        <TabsList className={`grid w-full grid-cols-${result.visualization_b64 ? '3' : '2'}`}>
          <TabsTrigger value="rendered">Rendered</TabsTrigger>
          <TabsTrigger value="raw">Raw Text</TabsTrigger>
          {result.visualization_b64 && <TabsTrigger value="visualization">Visualization</TabsTrigger>}
        </TabsList>

        <TabsContent value="rendered" className="mt-4">
          <OcrMDResult content = {result.text_content} />
          {/* <div className="prose prose-sm max-w-none dark:prose-invert bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-y-auto">
            <ReactMarkdown>{result.text_content.replace(/<\|[^|]+\|>/g, "").trim()}</ReactMarkdown>
          </div> */}
        </TabsContent>

        <TabsContent value="raw" className="mt-4">
          <pre className="bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-auto text-sm">
            <code>{result.text_content}</code>
          </pre>
        </TabsContent>

        {result.visualization_b64 && (
          <TabsContent value="visualization" className="mt-4">
            <div className="bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-auto">
              {Array.isArray(result.visualization_b64) ? (
                <div className={`grid gap-4 ${
                  result.visualization_b64.length === 1 ? 'grid-cols-1' :
                  result.visualization_b64.length === 2 ? 'grid-cols-2' :
                  result.visualization_b64.length === 3 ? 'grid-cols-3' :
                  result.visualization_b64.length >= 4 ? 'grid-cols-2' : 'grid-cols-1'
                }`}>
                  {result.visualization_b64.map((viz, index) => (
                    <div key={index} className="space-y-2">
                      <img
                        src={viz.startsWith('data:') ? viz : `data:image/png;base64,${viz}`}
                        alt={`Visualization ${index + 1}`}
                        className="w-full h-auto rounded"
                      />
                      <p className="text-xs text-muted-foreground text-center">Visualization {index + 1}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <img
                  src={result.visualization_b64.startsWith('data:') || result.visualization_b64.startsWith('http') ? result.visualization_b64 : `data:image/png;base64,${result.visualization_b64}`}
                  alt="Visualization with bounding boxes"
                  className="w-full h-auto"
                />
              )}
            </div>
          </TabsContent>
        )}
      </Tabs>

    </div>
  )
}
