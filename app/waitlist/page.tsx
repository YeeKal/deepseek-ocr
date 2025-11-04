// app/waitlist/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Code2,
  Boxes,
  Files,
  FileText,
  Sparkles,
  type LucideProps
} from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

// Define a type for the icon component to satisfy TypeScript
type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

// --- Configuration Object (No changes needed here) ---
const config = {
  seo: {
    title: "Join the DeepSeek-OCR Pro Waitlist",
    description: "Get early access and a special discount on our upcoming Pro features: API access, batch processing, priority queue, PDF support, and more.",
  },
  badge: "Limited Early-Bird Offer",
  title: "Unlock the Full Power of Document Understanding",
  description: "We're launching a Pro version of DeepSeek OCR with powerful features for developers and power users. Join the waitlist to get notified first and receive an exclusive early-bird discount.",
  formTitle: "Secure Your Spot",
  iframeUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfyLCIjaTalloXCsEI9jO9OdgzNKy7sjRUBtR1iuVJBBfnjDA/viewform?embedded=true",
  features: [
    { icon: Zap, name: "Higher Priority Queue", description: "Your requests will be processed first. Skip the line and get results in seconds, even during peak hours." },
    { icon: Files, name: "Batch Processing", description: "Upload and process multiple files at once. Perfect for handling large volumes of documents efficiently." },
    { icon: Code2, name: "Full API Access", description: "Integrate our cutting-edge OCR directly into your applications and workflows with a simple, powerful API." },
    { icon: FileText, name: "Advanced Format Support (PDF)", description: "Process entire PDF documents while preserving the original structure and formatting for perfect conversions." },
    { icon: Boxes, name: "Access to More OCR Models", description: "Choose from a selection of specialized OCR engines, including PaddleOCR and others, for optimal results on any task." },
    { icon: Sparkles, name: "And Many More...", description: "We're constantly adding new features like enhanced data extraction, team collaboration, and more." },
  ],
};

// --- SEO Metadata ---
export const metadata: Metadata = config.seo;

// --- The Page Component (Light Theme Version) ---
export default function WaitlistPage() {
  return (
    // Main background set to a soft gray
    <main className="bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 py-16 sm:py-24 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge styled for light theme */}
          <p className="inline-flex items-center justify-center px-4 py-1 mb-4 text-sm font-semibold tracking-wider text-indigo-700 bg-indigo-100 rounded-full">
            {config.badge}
          </p>
          {/* Main heading with dark text for contrast */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {config.title}
          </h1>
          {/* Description text with a softer gray */}
          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-600">
            {config.description}
          </p>
        </div>

        {/* Main two-column layout for features and form */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          
          {/* Left Column: Features */}
          <div className="flex flex-col gap-y-10">
            {config.features.map((feature, index) => {
              const Icon: IconComponent = feature.icon;
              return (
                <div key={index} className="flex gap-x-5">
                  <div className="flex-shrink-0">
                    {/* Icon container with a clean white background */}
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white border border-gray-200 shadow-sm">
                      <Icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    {/* Feature title */}
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                    {/* Feature description */}
                    <p className="mt-1 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Form */}
          <div className="relative">
             {/* Form container with white background and prominent shadow for depth */}
             <div className="sticky top-20 p-8 bg-white border border-gray-200 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">
                {config.formTitle}
              </h2>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  src={config.iframeUrl}
                  width="100%"
                  height="520"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Waitlist Signup Form"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Link */}
        <div className="text-center mt-20">
           <Link href="/" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 font-medium">
            &larr; Back to the Playground
          </Link>
        </div>
      </div>
    </main>
  );
}