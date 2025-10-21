import { getPostContent } from "@/lib/posts";
import type { Metadata } from 'next'
import { formatDate } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"


export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "About Our Mission & DeepSeek-OCR Technology | deepseekocr.io",
        description: "Discover the technology behind deepseekocr.io. Learn what DeepSeek-OCR is, how contexts optical compression works, and its future role in powering next-gen AI.",
    }
}
export default async function TermsPage() {
    const { meta, content } = await getPostContent("resources/pages/about");
    const formattedDate = meta.date instanceof Date ? formatDate(meta.date) : meta.date


    return (
        <div className="container max-w-5xl mx-auto px-4 py-8">
            {/* Blog header */}
            <section className="mb-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight mb-4">{meta.title}</h1>
                </div>

                <div className="flex items-center text-muted-foreground gap-2">
                    <CalendarIcon className="h-4 w-4" />
                    <time dateTime={formattedDate}>{formattedDate}</time>
                    <span className="text-xs">(Last modified)</span>
                </div>
            </section >

            <article className="flex-1 prose prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: content }}></article>
        </div>
    )

}
