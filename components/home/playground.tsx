// components/sections/Playground.tsx
import { pageConfig } from "@/lib/pageconfig";


const content = pageConfig.playground;


export default function Playground() {
  return (
    <section id="playground" className="container mx-auto py-10 sm:py-24">
      <div className="px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.title}</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{content.tagline}</p>
        <div className="mt-10 w-full mx-auto h-[960px] border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
          loading="lazy"
            src={content.iframeUrl}
            frameBorder="0"
            width="100%"
            height="100%"
            title="DeepSeek-OCR Playground"
          ></iframe>
        </div>
      </div>
    </section>
  );
}