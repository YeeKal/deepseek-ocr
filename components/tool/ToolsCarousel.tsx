"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const aiTools = [
    {
    id: 1,
    title: "AI Magic Eraser",
    description: "Effortlessly erase any unwanted objects from your photos",
    image: "https://cdn.kontextflux.io/tool-config/magic-eraser-remove-glasses-compare.webp",
    url: "/image-editor/ai-magic-eraser"
  },
  {
    id: 2,
    title: "Labubu Doll Generator",
    description: "Quickly create unique Labubu dolls with our AI-powered generator",
    image: "https://cdn.kontextflux.io/tool-config/labubu-generator-merge.webp",
    url:"/image-generator/ai-labubu-generator"
  },

  {
    id: 3,
    title: "Ghibli Style",
    description: "Generate Ghibli Studio Style's enchanting essence in your photos",
    image: "https://cdn.kontextflux.io/tool-config/robot-ghibli.webp",
    url:"/style-ai/ghibli-style"
  },
    {
    id: 8,
    title: "AI Outfit Collage Maker",
    description: "Instantly transform your OOTD photos into chic outfit collages",
    image: "https://cdn.kontextflux.io/ai-image/outfit-collage-maker/girl-with-white-weather-group-compare.webp",
    url:"/image-editor/ai-outfit-collage-maker"
  },
  {
    id: 9,
    title:"Ai Girl Generator",
    dewscription:" Create Realistic AI Girls Instantly",
    image:"https://cdn.kontextflux.io/ai-image/ai-girl-generator/hero-icon.webp",
    url: "/image-generator/ai-girl-generator"
  },
  {
    id: 4,
    title: "Low Poly Style",
    description: "Create striking geometric art from any image with FLUX.1 Kontext",
    image: "https://cdn.kontextflux.io/ai-style/low-poly-style-hero-cover-compress.webp",
    url:"/style-ai/low-poly-style"
  },
  
  {
    id: 5,
    title: "Earth Zoom Out AI",
    description: "From one photo into stunning Earth Zoom Out videos",
    image: "https://cdn.kontextflux.io/ai-video/earth-zoom-out/earth-zoom-out-hero-cover.webp",
    url:"/ai-video/earth-zoom-out-ai"
  },
  {
    id: 6,
    title: "Pencil Sketch",
    description: "One-Click to turn your photos into beautiful pencil sketches",
    image: "https://cdn.kontextflux.io/tool-config/street-pencil-sketch.webp",
    url:"/style-ai/pencil-sketch"
  },
  {
    id: 7,
    title: "Flux.1 Krea dev",
    description: "The 'Opinionated' Text-to-Image Model",
    image: "/assert/model-gallery/krea/flux-krea-icon.webp",
    url:"/image-models/flux-krea"
  },

]

export default function ToolsCarousel() {
 const [currentIndex, setCurrentIndex] = useState(1)
  const itemsPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= aiTools.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(0, aiTools.length - itemsPerView) : prevIndex - 1))
  }

  const visibleTools = aiTools.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-10 h-10"
          onClick={prevSlide}
          disabled={currentIndex === 0}
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-10 h-10"
          onClick={nextSlide}
          disabled={currentIndex + itemsPerView >= aiTools.length}
          aria-label="Next Slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Tools Grid */}
        <div className="mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTools.map((tool) => (
                <Link key={tool.id} href={tool.url}>
              <Card
                key={tool.id}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer border-0"
              >
                <CardContent className="p-0">
                  <div className="aspect-[4/3] flex items-center justify-center relative">
                    <Image
                      src={tool.image || "/placeholder.svg"}
                      alt={tool.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{tool.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(aiTools.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerView) === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index * itemsPerView)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
