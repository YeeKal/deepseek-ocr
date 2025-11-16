
import {toolMetaConfigs} from "@/lib/config/tool-utils"
import {ToolsGrid} from "@/components/tool/tools-grid"

export default function ToolPage() {



  return (
    <section className="max-w-7xl mx-auto">
       <section className="px-4 md:px-6 py-20 md:py-32 text-center bg-gradient-to-b from-card to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Powerful OCR Tools Suite
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Precise text recognition, data extraction, and content conversion to make information processing effortless and efficient
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto pb-16 px-4 md:px-6">


        {/* Tools Grid */}
      <ToolsGrid tools={toolMetaConfigs}></ToolsGrid>

      </div>

      <section className="px-4 md:px-6 pb-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Recognition Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10M+</div>
              <p className="text-muted-foreground">Pages Processed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Languages Supported</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )

}