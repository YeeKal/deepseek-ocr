import { LoraSectionConfig } from "@/lib/types"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface LoraSectionProps {
  loraSectionConfig: LoraSectionConfig
}

export default function LoraSection({ loraSectionConfig }: LoraSectionProps) {
    return (
         <div className="container  mx-auto px-4 py-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-2">{loraSectionConfig.title}</h2>
          <p className="text-muted-foreground">{loraSectionConfig.description}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {loraSectionConfig.loras.map((lora, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex gap-2">
                <Badge variant="secondary" className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  LORA
                </Badge>
                <Badge variant="secondary" className="bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  V1.0
                </Badge>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={lora.coverSrc || "/placeholder.svg"}
                  alt={lora.coverAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-semibold text-sm mb-1 line-clamp-2 drop-shadow-sm">{lora.title}</h3>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs opacity-90">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-[10px] font-bold">U</span>
                    </div>
                    <span>user_{Math.floor(Math.random() * 10000)}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{Math.floor(Math.random() * 50)}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay for interaction */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 cursor-pointer" />
            </div>
          ))}
        </div>
    </div>
    )

}