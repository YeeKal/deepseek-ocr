"use client"

import { useState, useCallback, useRef } from "react"
import { Upload, LinkIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { MaxUploadImageSize } from "@/lib/constants"
import { useTranslations } from "next-intl"

type ImageUploadProps = {
  onImageChange: (source: { type: "url" | "base64"; value: string } | null) => void
  onFileTypeChange?: (fileType: "image" | "pdf") => void
  ocrEngine?: "paddleocrvl" | "deepseekocr"
}

export function ImageUpload({ onImageChange, onFileTypeChange, ocrEngine = "deepseekocr" }: ImageUploadProps) {
  const t = useTranslations('home.demo.imageUpload')
  const [preview, setPreview] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState("")
  const [isDragging, setIsDragging] = useState(false)
  const [showFileSizeDialog, setShowFileSizeDialog] = useState(false)
  const [fileSizeError, setFileSizeError] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  const sampleImages = [
    {
      id: 1,
      url: "https://cdn.deepseekocr.io/home/sample-grocery-receipt.webp",
      title: t('samples.grocery.title'),
      description: t('samples.grocery.description')
    },
    {
      id: 2,
      url: "https://cdn.deepseekocr.io/tools/formula-ocr/lag-formula.webp",
      title: t('samples.math.title'),
      description: t('samples.math.description')
    },
    {
      id: 3,
      url: "https://cdn.deepseekocr.io/home/general_formula_recognition_001.webp",
      title: t('samples.complex.title'),
      description: t('samples.complex.description')
    }
  ]

  const handleFileUpload = useCallback(
    (file: File) => {
      // Check file size (in MB)
      const fileSizeInMB = file.size / (1024 * 1024)
      if (fileSizeInMB > MaxUploadImageSize) {
        setFileSizeError(t('dialog.description', { currentSize: fileSizeInMB.toFixed(2), limit: MaxUploadImageSize }))
        setShowFileSizeDialog(true)
        if (fileInputRef.current) {
          fileInputRef.current.value = ""
        }
        return
      }

      // For DeepSeekOCR, only accept images
      if (ocrEngine === "deepseekocr" && !file.type.startsWith("image/")) {
        alert(t('alerts.imageOnly'))
        return
      }
      // For PaddleOCRVL, accept both images and PDFs
      if (ocrEngine === "paddleocrvl" && !file.type.startsWith("image/") && file.type !== "application/pdf") {
        alert(t('alerts.imageOrPdf'))
        return
      }

      // Auto-detect file type
      const detectedType: "image" | "pdf" = file.type === "application/pdf" ? "pdf" : "image"
      if (onFileTypeChange) {
        onFileTypeChange(detectedType)
      }

      const reader = new FileReader()
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        const base64Data = base64.split(",")[1]
        setPreview(base64)
        onImageChange({ type: "base64", value: base64Data })
      }
      reader.readAsDataURL(file)
    },
    [onImageChange, onFileTypeChange, ocrEngine, t],
  )

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      const file = e.dataTransfer.files[0]
      if (file) {
        handleFileUpload(file)
      }
    },
    [handleFileUpload],
  )

  const handlePaste = useCallback(
    (e: React.ClipboardEvent) => {
      const items = e.clipboardData.items
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith("image/")) {
          const file = items[i].getAsFile()
          if (file) {
            handleFileUpload(file)
          }
          break
        }
      }
    },
    [handleFileUpload],
  )

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) return

    setPreview(urlInput)
    onImageChange({ type: "url", value: urlInput })
  }

  const handleSampleImageClick = (sample: typeof sampleImages[0]) => {
    setPreview(sample.url)
    onImageChange({ type: "url", value: sample.url })
  }

  const clearImage = () => {
    setPreview(null)
    setUrlInput("")
    onImageChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
        <Label>{ocrEngine === "paddleocrvl" ? t('labelPaddle') : t('labelDeepSeek')}</Label>
        <a
          href="#how-to-use"
          className="inline-flex items-center  shadow-sm transition-all hover:shadow-md"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>

      {preview ? (
        <div className="relative">
          <img
            src={preview || "/placeholder.svg"}
            alt="Preview"
            className="w-full h-64 object-contain rounded-lg border bg-muted"
          />
          <Button size="icon" variant="destructive" className="absolute top-2 right-2" onClick={clearImage}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload">{t('tabs.upload')}</TabsTrigger>
            <TabsTrigger value="url">{t('tabs.url')}</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? "border-primary bg-primary/5" : "border-border"
                }`}
              onDrop={handleDrop}
              onDragOver={(e) => {
                e.preventDefault()
                setIsDragging(true)
              }}
              onDragLeave={() => setIsDragging(false)}
              onPaste={handlePaste}
            >
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-1">
                {ocrEngine === "paddleocrvl" ? t('dragDrop.paddle') : t('dragDrop.deepseek')}
              </p>
              <p className="text-xs text-muted-foreground">
                {t('maxFileSize', { size: MaxUploadImageSize })}
              </p>
              <Input
                ref={fileInputRef}
                type="file"
                accept={ocrEngine === "deepseekocr" ? "image/*" : "image/*,.pdf"}
                className="hidden"
                id="file-upload"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileUpload(file)
                }}
              />
              <Button asChild variant="secondary">
                <label htmlFor="file-upload" className="cursor-pointer">
                  {t('chooseFile')}
                </label>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="https://example.com/image.png"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="pl-10"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleUrlSubmit()
                  }}
                />
              </div>
              <Button onClick={handleUrlSubmit}>{t('load')}</Button>
            </div>
          </TabsContent>
        </Tabs>
      )}

      <div className="">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-4">
          {t('tryExample')}
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {sampleImages.map((sample) => (
            <TooltipProvider key={sample.id} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className="cursor-pointer group block text-center"
                    onClick={() => handleSampleImageClick(sample)}
                  >
                    <div className="aspect-video rounded-lg overflow-hidden border bg-muted relative transition-all group-hover:shadow-lg group-hover:border-primary">
                      <img
                        src={sample.url}
                        alt={sample.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{sample.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* File Size Error Dialog */}
      <Dialog open={showFileSizeDialog} onOpenChange={setShowFileSizeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-rose-500">{t('dialog.title')}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-2">
              {fileSizeError}
            </DialogDescription>
            <DialogDescription className="text-sm text-muted-foreground mt-4 pt-2">
              <strong>{t('dialog.proFeatures')}</strong>
            </DialogDescription>
            <DialogDescription className="text-sm text-muted-foreground mt-4 pb-2">
              {t('dialog.notify')}
            </DialogDescription>

          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => {
                setShowFileSizeDialog(false)
              }}
              className="sm:mr-auto"
            >
              {t('dialog.tryAgain')}
            </Button>
            <Button
              onClick={() => {
                clearImage()
                setShowFileSizeDialog(false)
                // Open waitlist in new tab
                window.open("/waitlist", "_blank")
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
            >
              {t('dialog.joinWaitlist')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
