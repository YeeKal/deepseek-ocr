
    import type { ToolConfig } from "@/lib/config/tool-types"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import {toolMetaConfigs} from "@/lib/config/tool-utils"

export default function ToolPage() {



  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Ocr tools`}</h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolMetaConfigs.map((tool) => (
            <Card key={tool.slug} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full">
              {tool.cover && (
                <div className="relative h-40 overflow-hidden bg-muted">
                  <img
                    src={tool.cover.url || "/placeholder.svg"}
                    alt={tool.cover.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">{tool.description}</p>
                <Link href={`/tools/${tool.slug}`}>
                  <Button variant="outline" className="w-full gap-2 bg-transparent">
                    Explore <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )

}