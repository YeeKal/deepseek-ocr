import Link from "next/link";
import { Palette } from "lucide-react";

export default function LabubuNavLinks() {
    const navLinks = [

        {
            label: "Labubu Live Wallpaper",
            href: "/labubu/labubu-live-wallpaper"
        },
        {
            label: "Labubu Iphone Wallpaper",
            href: "/labubu/labubu-iphone-wallpaper"
        },
        {
            label: "🎨 Labubu Ai Generator",
            href: "/image-generator/ai-labubu-generator"
        },
        {
            label: "⬅ Back to Labubu",
            href: "/labubu"
        }
    ]
    return (
        <div className="flex flex-wrap gap-4 justify-center mb-10">
            {
                navLinks.map((link, index) => (
                    <Link href={link.href} key={index} className="bg-gradient-to-r from-[#5182ED] to-[#D56575] hover:from-[#3A6AD0] hover:to-[#C04A5A] text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-md" >
                        {link.label}
                    </Link>
                ))
            }

        </div>
    )
}