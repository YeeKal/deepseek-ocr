"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { THEME_COLOR } from "@/lib/constants"

type ParameterSettingsProps = {
  modelSize: string
  taskType: string
  prompt: string
  onModelSizeChange: (value: string) => void
  onTaskTypeChange: (value: string) => void
  onPromptChange: (value: string) => void
}

const MODEL_SIZES = [
  { value: "Tiny", label: "Tiny", description: "Fast processing, lower accuracy" },
  { value: "Small", label: "Small", description: "Balanced speed and accuracy" },
  { value: "Base", label: "Base", description: "Good accuracy, moderate speed" },
  { value: "Large", label: "Large", description: "High accuracy, slower processing" },
  { value: "Gundam", label: "Gundam (Recommended)", description: "Best overall performance" },
]

const TASK_TYPES = [
  { value: "doc_to_markdown", label: "Document to Markdown", description: "Convert documents to structured markdown" },
  { value: "general_ocr", label: "General OCR", description: "Extract all text from images" },
  { value: "simple_ocr", label: "Simple OCR", description: "Basic text extraction" },
  { value: "figure_parse", label: "Figure Parse", description: "Extract data from charts and figures" },
  { value: "image_description", label: "Image Description", description: "Generate image descriptions" },
  { value: "text_localization", label: "Text Localization", description: "Locate specific text (requires prompt)" },
  { value: "custom", label: "Custom", description: "Custom task (requires prompt)" },
]

export function ParameterSettings({
  modelSize,
  taskType,
  prompt,
  onModelSizeChange,
  onTaskTypeChange,
  onPromptChange,
}: ParameterSettingsProps) {
  const requiresPrompt = taskType === "custom" || taskType === "text_localization"

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Model Size</Label>
        <div className="grid grid-cols-2 gap-1.5">
          {MODEL_SIZES.map((size) => (
            <button
              key={size.value}
              type="button"
              onClick={() => onModelSizeChange(size.value)}
              className={cn(
                "flex flex-col items-start gap-0.5 rounded-md border p-2.5 text-left transition-all hover:scale-[1.02]",
                modelSize === size.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background hover:bg-accent",
              )}
              style={{
                borderColor: modelSize === size.value ? THEME_COLOR.PRIMARY : undefined,
                backgroundColor: modelSize === size.value ? THEME_COLOR.PRIMARY : undefined,
              }}
            >
              <span className="font-medium text-xs">{size.label}</span>
              <span className={cn(
                "text-xs leading-tight",
                modelSize === size.value ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>
                {size.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Task Type</Label>
        <div className="grid grid-cols-2 gap-1.5">
          {TASK_TYPES.map((task) => (
            <button
              key={task.value}
              type="button"
              onClick={() => onTaskTypeChange(task.value)}
              className={cn(
                "flex flex-col items-start gap-0.5 rounded-md border p-2.5 text-left transition-all hover:scale-[1.02]",
                taskType === task.value
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-border bg-background hover:bg-accent",
              )}
              style={{
                borderColor: taskType === task.value ? THEME_COLOR.PRIMARY : undefined,
                backgroundColor: taskType === task.value ? THEME_COLOR.PRIMARY : undefined,
              }}
            >
              <span className="font-medium text-xs">{task.label}</span>
              <span className={cn(
                "text-xs leading-tight",
                taskType === task.value ? "text-primary-foreground/90" : "text-muted-foreground"
              )}>
                {task.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="prompt" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Prompt {requiresPrompt && <span className="text-destructive">*</span>}
        </Label>
        <Textarea
          id="prompt"
          placeholder={requiresPrompt ? "Enter your custom prompt..." : "Optional custom prompt..."}
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          rows={3}
          className="resize-none text-sm"
        />
      </div>
    </div>
  )
}
