import { Card } from "@/components/ui/card"
import * as Icons from "lucide-react"

interface UsageSectionProps {
  title: string
  description: string
  steps: Array<{
    icon: string
    title: string
    description: string
  }>
  modelGuide: {
    title: string
    items: {
      Tiny: string
      Small: string
      Base: string
      Large: string
      Gundam: string
    }
  }
  taskGuide: {
    title: string
    items: {
      doc_to_markdown: { name: string; use: string }
      ocr: { name: string; use: string }
      simple_ocr: { name: string; use: string }
      figure_parse: { name: string; use: string }
      image_description: { name: string; use: string }
      text_localization: { name: string; use: string }
      custom: { name: string; use: string }
    }
  }
}

const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || null
}

export function UsageSection({
  title,
  description,
  steps,
  modelGuide,
  taskGuide
}: UsageSectionProps) {
  const modelRecommendations = [
    { size: "Tiny", use: modelGuide.items.Tiny },
    { size: "Small", use: modelGuide.items.Small },
    { size: "Base", use: modelGuide.items.Base },
    { size: "Large", use: modelGuide.items.Large },
    { size: "Gundam", use: modelGuide.items.Gundam },
  ]

  const taskRecommendations = [
    { task: taskGuide.items.doc_to_markdown.name, use: taskGuide.items.doc_to_markdown.use },
    { task: taskGuide.items.ocr.name, use: taskGuide.items.ocr.use },
    { task: taskGuide.items.simple_ocr.name, use: taskGuide.items.simple_ocr.use },
    { task: taskGuide.items.figure_parse.name, use: taskGuide.items.figure_parse.use },
    { task: taskGuide.items.image_description.name, use: taskGuide.items.image_description.use },
    { task: taskGuide.items.text_localization.name, use: taskGuide.items.text_localization.use },
    { task: taskGuide.items.custom.name, use: taskGuide.items.custom.use },
  ]

  return (
    <section id="how-to-use" className="min-h-screen px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = getIcon(step.icon)
            return (
              <Card key={index} className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                </div>
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{modelGuide.title}</h3>
            <div className="space-y-3">
              {modelRecommendations.map((model, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="font-medium text-primary min-w-[80px]">{model.size}</span>
                  <span className="text-muted-foreground">{model.use}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{taskGuide.title}</h3>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {taskRecommendations.map((task, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="font-medium text-primary min-w-[140px] flex-shrink-0">{task.task}</span>
                  <span className="text-muted-foreground">{task.use}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
