import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { allThemeMiniConfig } from '@/lib/ai-tools/config-utils';
import { ThemeMiniConfig, ToolMiniConfig } from "@/lib/types";


// Predefined gradient combinations for visual variety
const gradients = [
  "from-blue-500 to-purple-600",
  "from-green-500 to-teal-600",
  "from-orange-500 to-red-600",
  "from-pink-500 to-rose-600",
  "from-indigo-500 to-blue-600",
  "from-purple-500 to-pink-600",
  "from-teal-500 to-green-600",
  "from-yellow-500 to-orange-600",
  "from-cyan-500 to-blue-600",
  "from-emerald-500 to-teal-600",
]

function getGradientForTool(toolId: string): string {
  // Use tool ID to consistently assign the same gradient
  const hash = toolId.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)
  return gradients[Math.abs(hash) % gradients.length]
}

function ToolAvatar({ tool }: { tool: ToolMiniConfig }) {
  const gradient = getGradientForTool(tool.id)
  const initials = tool.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
    >
      {initials}
    </div>
  )
}

function ToolCard({ tool }: { tool: ToolMiniConfig }) {
  return (
    <Link href={`${tool.slug}`} prefetch={false} className="block group">
      <Card className="h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] border-0 bg-gray-50/50 hover:bg-white">
        <CardContent className=" flex items-center gap-3">
          <ToolAvatar tool={tool} />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate group-hover:text-[#5182ED] transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-500 truncate">{tool.defaultModel}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

function ThemeSection({ theme }: { theme: ThemeMiniConfig }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-gray-900">{theme.name}</h2>
        <Badge variant="secondary" className="text-xs">
          {theme.tools.length} {theme.tools.length === 1 ? "tool" : "tools"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {theme.tools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  )
}

export default function MoreTools({title, description}: {title?: string, description?: string}) {
  const totalTools = allThemeMiniConfig.reduce((sum, theme) => sum + (theme.tools?.length ?? 0), 0)

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900">{title ?? "More Flux Kontext Tools"}</h2>
        <p className="text-gray-600">
          {description ?? `Discover ${totalTools} powerful tools across ${allThemeMiniConfig.length} categories for image generator`}
        </p>
      </div>

      <div className="space-y-12">
        {allThemeMiniConfig.map((theme) => (
          <ThemeSection key={theme.slug} theme={theme} />
        ))}
      </div>
    </div>
  )
}
