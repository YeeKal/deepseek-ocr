import { pageConfig } from "@/lib/pageconfig";

const content = pageConfig.faq;

export default function FAQ() {
  const generateFaqSchema = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": content.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
    return JSON.stringify(schema);
  };
  return (
    <section className="w-full py-20 sm:py-24">
      {/* FAQ Schema for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateFaqSchema() }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">{content.title}</h2>
        <div className="mt-12 space-y-4">
          {content.items.map((item) => (
            <details key={item.question} className="p-6 border border-gray-200 rounded-lg group">
              <summary className="font-semibold cursor-pointer text-lg text-gray-800 list-none flex justify-between items-center">
                {item.question}
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
