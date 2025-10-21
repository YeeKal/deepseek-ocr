import { getPostContent } from "@/lib/posts";
import { formatDate } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { BRAND_NAME } from "@/lib/constants";


export const metadata = {
    title: `Privacy Policy | ${BRAND_NAME}`,
    description: `Our Privacy Policy details how deepseekocr.io collects, uses, and protects your personal data and uploaded documents. Learn about our data security practices and your rights.`,
}

export default async function TermsPage() {
    const { meta, content } = await getPostContent("resources/pages/privacy");
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
