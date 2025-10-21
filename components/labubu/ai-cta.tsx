import Link from "next/link"
import { Button } from "../ui/button"

export default function AICta() {
    const videoSrc = "https://cdn.kontextflux.io/labubu-generator/video/labubu-generator-hero-video.webm"
    const videoPoster = "https://cdn.kontextflux.io/labubu-generator/79127e5615845dda8a1599d1141b252d37f8eab3498d495c3fef90946f4fd5fd.png"
    return (
        
        <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 rounded-3xl p-8 lg:p-12 min-h-[360px] flex gap-20 items-center justify-center overflow-hidden mt-10">
            <div className="space-y-4">
            <Button>
                <Link href="/image-generator/ai-labubu-generator" className="text-white font-bold py-2 px-4 rounded cursor-pointer" >
                      <h2>  Make Your Own</h2>
                </Link>
            </Button>
            <p>Generate Labubu Wallpaper with AI </p>
            </div>
            <video
              className="w-full max-w-xs rounded-lg shadow-lg"
              controls
              autoPlay
              loop muted
              src={videoSrc}
              poster={videoPoster}
            >
              {`Sorry, your browser doesn't support embedded videos.`}
            </video>
          </div>

        
    )
}