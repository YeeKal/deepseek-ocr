"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Sparkles, Download } from "lucide-react"
import type { OCRResult } from "@/lib/types"
import OcrMDResult from "./ocr-markdown"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"

type ResultDisplayProps = {
  result: OCRResult | null
  error: string | null
  isProcessing: boolean
  runningWorkerNumber: number
}

export function ResultDisplay({ result, error, isProcessing, runningWorkerNumber = 0 }: ResultDisplayProps) {
  const t = useTranslations('home.demo.resultDisplay')
  const [copied, setCopied] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)

  // Internal timer for elapsed time
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

  const handleCopy = async () => {
    if (result?.text_content) {
      await navigator.clipboard.writeText(result.text_content)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleDownload = () => {
    if (!result?.text_content) return

    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const timestamp = `${year}${month}${day}-${hours}${minutes}${seconds}`
    const filename = `ocr-result-${timestamp}.md`
    const content = result.text_content

    const blob = new Blob([content], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
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
          <p className="text-muted-foreground">{t('processing')}</p>
          {runningWorkerNumber === 0 && elapsedTime > 15 && (
            <div className="text-xs text-amber-800 bg-amber-50 p-3 rounded-lg border border-amber-200">
              <p><strong>{t('warmingUp')}</strong></p>
            </div>
          )}
          <p className="text-sm text-muted-foreground">
            {t('elapsedTime', { time: formatTime(elapsedTime) })}
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
          <h3 className="font-semibold text-lg">{t('error')}</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="h-full flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-3 text-muted-foreground p-4 max-w-sm"> {/* 限制最大宽度，让文本更易读 */}
          <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary opacity-60" />

          <h3 className="text-xl font-bold text-foreground"> {/* 强化标题 */}
            {t('emptyState.title')}
          </h3>

          <p className="text-base"> {/* 强化主行动 */}
            {t('emptyState.description')}
          </p>

          {/* 第一组：核心价值和模型引导 */}
          <div className="pt-4 space-y-2 text-sm text-left mx-auto">
            <p className="text-foreground font-semibold">
              💡 <strong>{t('emptyState.quickTip')}</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600">
              <li>{t('emptyState.tips.paddle')}</li>
              <li>{t('emptyState.tips.deepseek')}</li>
            </ul>
          </div>

          {/* 第二组：性能和文件优化建议 */}
          <div className="pt-4 space-y-2 text-sm text-left mx-auto">
            <p className="text-foreground font-semibold">
              ⚡️ {t('emptyState.performanceTitle')}
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4 text-gray-600">
              <li>{t('emptyState.performanceTips.size')}</li>
              <li>{t('emptyState.performanceTips.tasks')}</li>
              <li>
                {t('emptyState.performanceTips.pdf')}
                {/* 假设你的链接样式是主色+下划线 */}
                <Link href="/waitlist" prefetch={false} className="text-primary font-medium underline ml-1">
                  {t('emptyState.joinWaitlist')}
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    )
  }


  return (
    <div className="space-y-6">
      {/* Performance Metrics - Always visible */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg p-5 border border-blue-200/50 dark:border-blue-800/50">
        <h4 className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3 flex items-center gap-2">
          ⚡ {t('metrics.title')}
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/70 dark:bg-background/70 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-xs font-medium text-muted-foreground mb-1">{t('metrics.queueTime')}</div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {result?.delayTime !== undefined ? (result.delayTime / 1000).toFixed(2) : '--'}
              <span className="text-sm font-normal text-muted-foreground ml-1">{t('metrics.sec')}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{t('metrics.queueTimeDesc')}</div>
          </div>
          <div className="bg-white/70 dark:bg-background/70 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-xs font-medium text-muted-foreground mb-1">{t('metrics.executionTime')}</div>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {result?.executionTime !== undefined ? (result.executionTime / 1000).toFixed(2) : '--'}
              <span className="text-sm font-normal text-muted-foreground ml-1">{t('metrics.sec')}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-1">{t('metrics.executionTimeDesc')}</div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">{t('results')}</h3>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy} disabled={!result.text_content}>
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                {t('copied')}
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                {t('copy')}
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload} disabled={!result.text_content}>
            <Download className="mr-2 h-4 w-4" />
            {t('download')}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="rendered" className="w-full">
        <TabsList className={`grid w-full grid-cols-${result.visualization_b64 ? '3' : '2'}`}>
          <TabsTrigger value="rendered">{t('tabs.rendered')}</TabsTrigger>
          <TabsTrigger value="raw">{t('tabs.raw')}</TabsTrigger>
          {result.visualization_b64 && <TabsTrigger value="visualization">{t('tabs.visualization')}</TabsTrigger>}
        </TabsList>

        <TabsContent value="rendered" className="mt-4">
          <OcrMDResult content={result.text_content} />
        </TabsContent>

        <TabsContent value="raw" className="mt-4">
          <div className="bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-auto text-sm font-mono whitespace-pre-line break-words">
            {result.text_content}
          </div>
        </TabsContent>

        {result.visualization_b64 && (
          <TabsContent value="visualization" className="mt-4">
            <div className="bg-muted/30 rounded-lg p-6 max-h-[600px] overflow-auto">
              {Array.isArray(result.visualization_b64) ? (
                <div className={`grid gap-4 ${result.visualization_b64.length === 1 ? 'grid-cols-1' :
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
