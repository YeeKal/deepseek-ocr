"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { THEME_COLOR } from "@/lib/constants"
import { useTranslations } from "next-intl"

type ParameterSettingsProps = {
  modelSize: string
  taskType: string
  prompt: string
  onModelSizeChange: (value: string) => void
  onTaskTypeChange: (value: string) => void
  onPromptChange: (value: string) => void
}

export function ParameterSettings({
  modelSize,
  taskType,
  prompt,
  onModelSizeChange,
  onTaskTypeChange,
  onPromptChange,
}: ParameterSettingsProps) {
  const t = useTranslations('home.demo.parameterSettings')
  const requiresPrompt = taskType === "custom" || taskType === "text_localization"

  const MODEL_SIZES = [
    { value: "Tiny", label: t('modelSizes.tiny.label'), description: t('modelSizes.tiny.description') },
    { value: "Small", label: t('modelSizes.small.label'), description: t('modelSizes.small.description') },
    { value: "Base", label: t('modelSizes.base.label'), description: t('modelSizes.base.description') },
    { value: "Large", label: t('modelSizes.large.label'), description: t('modelSizes.large.description') },
    { value: "Gundam", label: t('modelSizes.gundam.label'), description: t('modelSizes.gundam.description') },
  ]

  const TASK_TYPES = [
    { value: "doc_to_markdown", label: t('taskTypes.docToMarkdown.label'), description: t('taskTypes.docToMarkdown.description') },
    { value: "general_ocr", label: t('taskTypes.generalOcr.label'), description: t('taskTypes.generalOcr.description') },
    { value: "simple_ocr", label: t('taskTypes.simpleOcr.label'), description: t('taskTypes.simpleOcr.description') },
    { value: "figure_parse", label: t('taskTypes.figureParse.label'), description: t('taskTypes.figureParse.description') },
    { value: "image_description", label: t('taskTypes.imageDescription.label'), description: t('taskTypes.imageDescription.description') },
    { value: "text_localization", label: t('taskTypes.textLocalization.label'), description: t('taskTypes.textLocalization.description') },
    { value: "custom", label: t('taskTypes.custom.label'), description: t('taskTypes.custom.description') },
  ]

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('labels.modelSize')}</Label>
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
        <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{t('labels.taskType')}</Label>
        <div className="grid grid-cols-2 gap-1.5">
          {TASK_TYPES.map((task) => (
            <button
              key={task.value}
              type="button"
              onClick={() => onTaskTypeChange(task.value)}
              className={cn(
                "flex flex-col items-start gap-0.5 rounded-md border p-2.5 text-left transition-all hover:scale-[1.02]",
                taskType === task.value
                  ? "border-primary bg-indigo-100 text-indigo-700 shadow-sm"
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
          {t('labels.prompt')} {requiresPrompt && <span className="text-destructive">*</span>}
        </Label>
        <Textarea
          id="prompt"
          placeholder={requiresPrompt ? t('placeholders.required') : t('placeholders.optional')}
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          rows={3}
          className="resize-none text-sm"
        />
      </div>
    </div>
  )
}
