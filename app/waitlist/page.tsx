// app/waitlist/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

interface WaitlistPageConfig {
  seo: Metadata;
  title: string;
  description: string;
  iframeUrl: string;
}

const waitlistPageConfig: WaitlistPageConfig = {
  seo: {
    title: "Join the Waitlist | deepseekocr.io",
    description: "Be the first to get access to our enhanced suite of tools, including API access and advanced features built on DeepSeek-OCR. Join the waitlist today.",
  },
  title: "Join Our Waitlist",
  description: "We're building an enhanced suite of tools powered by DeepSeek-OCR, including a developer API, batch processing, and more. Sign up below to be the first to know when we launch.",
  iframeUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfyLCIjaTalloXCsEI9jO9OdgzNKy7sjRUBtR1iuVJBBfnjDA/viewform?embedded=true"
};

// SEO Metadata for the page
export const metadata = waitlistPageConfig.seo;

export default function WaitlistPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
          {waitlistPageConfig.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          {waitlistPageConfig.description}
        </p>

        {/* Iframe Container */}
        <div className="mt-10 w-full mx-auto border border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src={waitlistPageConfig.iframeUrl}
            width="100%"
            height="520"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Waitlist Signup Form"
          >
            Loading…
          </iframe>
        </div>

        <Link href="/" className="mt-12 inline-block text-blue-600 hover:underline">
          &larr; Back to Home
        </Link>
      </div>
    </main>
  );
}