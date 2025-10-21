import { getPostContent } from "@/lib/posts";
import type { Metadata } from 'next'
import { formatDate } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { BRAND_NAME } from "@/lib/constants";


export const metadata = {
    title: `Terms and Conditions | ${BRAND_NAME}`,
    description: "Review the official Terms of Service for deepseekocr.io. This agreement covers your rights, user content policies, subscription tiers, and acceptable use of our services.",
}
export default async function TermsPage() {
    const { meta, content } = await getPostContent("resources/pages/terms");
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
