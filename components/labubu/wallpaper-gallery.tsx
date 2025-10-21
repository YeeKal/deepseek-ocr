"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LabubuWallPaperCard } from "@/lib/labubu/utils"
import { Download, Play, Heart } from "lucide-react"
import Image from "next/image"


export default function Component({wallpapers}: {wallpapers: LabubuWallPaperCard[]}) {

  const handleDownload = async (downloadUrl: string) => {
    try {

      const response = await fetch(downloadUrl)
      const blob = await response.blob()

      // Create download link
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url

      // Generate filename
      const extension = downloadUrl.includes('mp4') ? "mp4" : "jpg"
      const filename = `${'download'}.${extension}`
      link.download = downloadUrl.split('/').pop() || filename

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      // Fallback: open in new tab
      window.open(downloadUrl, "_blank")
    }
  }


  return (
      <div className="max-w-7xl mx-auto">

        {/* Wallpaper Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6">
          {wallpapers.map((wallpaper, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                {/* Image/Video Container */}
                <div className="relative group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                    {/* Download button in top right */}
                    <Button
                      size="sm"
                      variant="secondary"
                      className="absolute top-3 right-3 z-10 bg-black/20 hover:bg-black/40 text-white border-none backdrop-blur-sm transition-all duration-200"
                      onClick={() => handleDownload(wallpaper.url)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>

                    {/* Video Preview on Hover */}
                    {wallpaper.is_dynamic  && (
                      <video 
                      className="absolute inset-0 w-full h-full object-cover" 
                      poster={wallpaper.cover}
                      autoPlay
                      muted 
                      loop 
                      playsInline
                      >
                        <source src={`${wallpaper.url}`} type="video/mp4" />
                      </video>
                    )}

                    {!wallpaper.is_dynamic && <Image
                      src={`${wallpaper.cover}`}
                      alt={wallpaper.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    //   onError={(e) => {
                    //     // Fallback to placeholder if image fails to load
                    //     const target = e.target as HTMLImageElement
                    //     target.src = "/placeholder.svg?height=400&width=300"
                    //   }}
                    />
                    }


                    {/* Dynamic indicator */}
                    {wallpaper.is_dynamic && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          Live
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-2 sm:p-4">
                  <h3 className="font-bold text-md sm:text-lg text-gray-800 mb-3 line-clamp-2">{wallpaper.title}</h3>
                  <p className="text-gray-600  text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">{wallpaper.description}</p>


                  {/* Action buttons */}
                  <div className="flex items-center gap-3">
                    <Button
                      className="flex-1 bg-amber-700 hover:bg-amber-800 text-white transition-colors duration-200"
                      onClick={() => handleDownload(wallpaper.url )}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">Free Download</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`transition-colors duration-200  text-gray-500 hover:text-red-500`}
                    >
                      <Heart className={`w-5 h-5`} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  )
}
