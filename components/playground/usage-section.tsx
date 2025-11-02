import { Card } from "@/components/ui/card"
import { Upload, Settings, FileType, Zap } from "lucide-react"

const STEPS = [
  {
    icon: Upload,
    title: "Upload Image",
    description: "Drag & drop, paste, or provide a URL to your image. Supports all common image formats.",
  },
  {
    icon: Settings,
    title: "Select Model Size",
    description:
      "Choose from Tiny to Gundam. We recommend Gundam for best overall performance, or select based on your speed/accuracy needs.",
  },
  {
    icon: FileType,
    title: "Choose Task Type",
    description:
      "Select the appropriate task: document conversion, general OCR, figure parsing, or custom tasks with your own prompt.",
  },
  {
    icon: Zap,
    title: "Process & Export",
    description:
      "Click Process and wait for results. View rendered markdown, raw text, or visualization with bounding boxes. Copy with one click.",
  },
]

const MODEL_RECOMMENDATIONS = [
  { size: "Tiny", use: "Quick previews, simple text extraction" },
  { size: "Small", use: "Balanced performance for general use" },
  { size: "Base", use: "Standard documents and forms" },
  { size: "Large", use: "Complex layouts, high accuracy needs" },
  { size: "Gundam", use: "Best overall quality (recommended)" },
]

const TASK_RECOMMENDATIONS = [
  { task: "Document to Markdown", use: "Academic papers, reports, structured documents" },
  { task: "General OCR", use: "Any text extraction needs" },
  { task: "Simple OCR", use: "Clean, straightforward text" },
  { task: "Figure Parse", use: "Charts, graphs, diagrams" },
  { task: "Image Description", use: "Understanding image content" },
  { task: "Text Localization", use: "Finding specific text (requires prompt)" },
  { task: "Custom", use: "Specialized tasks (requires prompt)" },
]

export function UsageSection() {
  return (
    <section id="how-to-use" className="min-h-screen px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">How to Use</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with DeepSeek-OCR in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <Card key={index} className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                  {index + 1}
                </div>
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8">
          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Model Size Guide</h3>
            <div className="space-y-3">
              {MODEL_RECOMMENDATIONS.map((model, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="font-medium text-primary min-w-[80px]">{model.size}</span>
                  <span className="text-muted-foreground">{model.use}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Task Type Guide</h3>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {TASK_RECOMMENDATIONS.map((task, index) => (
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
