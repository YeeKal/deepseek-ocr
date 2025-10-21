import Link from 'next/link'
import { headers } from 'next/headers'
import MoreTools from "@/components/tool/MoreTools"
import ToolsCarousel from "@/components/tool/ToolsCarousel"
import { Button } from '@/components/ui/button'
import {ArrowLeft} from "lucide-react"
import Image from 'next/image'

 
export default async function NotFound() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-8">
       <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        <div className="relative aspect-4/3 w-3xl rounded-lg overflow-hidden">
            <Image
            src="https://cdn.kontextflux.io/general-source/robot-404.webp"
            alt={`robot standing upright and holding a sign that says '404'`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">Oops!</h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
           {`We couldn't find the page you were looking for`}
          </p>
          <Link href={"/"} prefetch={false}>
          <Button
            size="lg"
            className=" px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go home
          </Button>
          </Link>
        </div>
      </div>

      <ToolsCarousel/>
      <MoreTools />
    </div>
  )
}