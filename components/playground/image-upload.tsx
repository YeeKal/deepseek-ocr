"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Upload, LinkIcon, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ImageUploadProps = {
  onImageChange: (source: { type: "url" | "base64"; value: string } | null) => void
}

export function ImageUpload({ onImageChange }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const [urlInput, setUrlInput] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  const handleFileUpload = useCallback(
    (file: File) => {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file")
        return
      }

      const reader = new FileReader() 
      reader.onload = (e) => {
        const base64 = e.target?.result as string
        const base64Data = base64.split(",")[1]
        setPreview(base64)
        onImageChange({ type: "base64", value: base64Data})
      }
      reader.readAsDataURL(file)
    },
    [onImageChange],
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

  const clearImage = () => {
    setPreview(null)
    setUrlInput("")
    onImageChange(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2 items-center">
      <Label>Image Upload</Label>
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
            <TabsTrigger value="upload">Upload</TabsTrigger>
            <TabsTrigger value="url">URL</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? "border-primary bg-primary/5" : "border-border"
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
              <p className="text-sm text-muted-foreground mb-2">Drag & drop, paste, or click to upload</p>
              <Input
                type="file"
                accept="image/*"
                className="hidden"
                id="file-upload"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) handleFileUpload(file)
                }}
              />
              <Button asChild variant="secondary">
                <label htmlFor="file-upload" className="cursor-pointer">
                  Choose File
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
              <Button onClick={handleUrlSubmit}>Load</Button>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}
