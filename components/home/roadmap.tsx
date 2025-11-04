// components/RoadmapSection.tsx
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  BoxSelect,
  Code2,
  Files,
  Zap,
  Users,
  Share2,
  FileText
} from 'lucide-react';

const roadmapData = {
  inProgress: {
    title: "In Progress",
    description: "Actively being built and tested now.",
    features: [

      {
        icon: Zap,
        name: "Pro-Tier Priority Queue",
        description: "Paid users get priority processing for near-instant results, every time."
      },
         {
        icon: Bot,
        name: "Expanded Model Library",
        description: "Access other specialized OCR models for different languages and use-cases."
      },
      {
        icon: Files,
        name: "Batch Processing",
        description: "Upload and process hundreds of documents in a single go, right from the web interface."
      }
    ]
  },
  planned: {
    title: "Planned",
    description: "Next on our list to design and build.",
    features: [
    {
        icon: Code2,
        name: "Developer API",
        description: "Integrate the full power of DeepSeek-OCR directly into your applications and workflows."
      },
      {
        icon: FileText,
        name: "Advanced PDF Support",
        description: "Process multi-page PDFs while preserving layouts, tables, and document structure."
      },
     
    ]
  },
  exploring: {
    title: "Exploring",
    description: "Big ideas we're researching for the future.",
    features: [
      {
        icon: Users,
        name: "Team Collaboration",
        description: "Share projects, manage documents, and collaborate with your entire team."
      },
      {
        icon: Share2,
        name: "Cloud Integrations",
        description: "Connect directly to Google Drive, Dropbox, and more to process files automatically."
      },
      {
        icon: BoxSelect,
        name: "Advanced Data Parsing",
        description: "Use AI to automatically extract specific structured data, like invoice totals or contact info."
      }
    ]
  }
};


export default function RoadmapSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Future of DeepSeek OCR
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We're just getting started. Here’s a look at what we’re building next to make document understanding even more powerful.
          </p>
        </div>

        {/* Roadmap Columns */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* In Progress Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">{roadmapData.inProgress.title}</h3>
            </div>
            <p className="text-gray-600">{roadmapData.inProgress.description}</p>
            <div className="space-y-4">
              {roadmapData.inProgress.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <Icon className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Planned Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-3">
               <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                <span className="h-2 w-2 rounded-full bg-purple-500"></span>
              </span>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">{roadmapData.planned.title}</h3>
            </div>
            <p className="text-gray-600">{roadmapData.planned.description}</p>
            <div className="space-y-4">
              {roadmapData.planned.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <Icon className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Exploring Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-3">
               <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                <span className="h-2 w-2 rounded-full bg-gray-500"></span>
              </span>
              <h3 className="text-xl font-semibold leading-7 text-gray-900">{roadmapData.exploring.title}</h3>
            </div>
            <p className="text-gray-600">{roadmapData.exploring.description}</p>
            <div className="space-y-4">
              {roadmapData.exploring.features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    <Icon className="h-6 w-6 text-gray-500 mb-2" />
                    <h4 className="font-semibold text-gray-800">{feature.name}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
            <p className="text-lg text-gray-600">Want access to these features first?</p>
            <Link
                href="/waitlist"
                className="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
                Join the Pro Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </div>
      </div>
    </section>
  );
}