// components/RoadmapSection.tsx
import { Link } from '@/i18n/routing';
import {
  ArrowRight,
} from 'lucide-react';
import * as Icons from "lucide-react"
const getIcon = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName]
  return IconComponent || null
}

interface RoadmapSectionProps {
  title: string;
  description: string;
  roadmapData: {
    inProgress: {
      title: string;
      description: string;
      features: {
        icon: any;
        name: string;
        description: string;
      }[];
    };
    planned: {
      title: string;
      description: string;
      features: {
        icon: any;
        name: string;
        description: string;
      }[];
    };
    exploring: {
      title: string;
      description: string;
      features: {
        icon: any;
        name: string;
        description: string;
      }[];
    };
  };
  cta: {
    text: string;
    button: string;
  }
}


export default function RoadmapSection(prop: RoadmapSectionProps) {
  const roadmapData = prop.roadmapData;
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {prop.title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {prop.description}

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
                const Icon = getIcon(feature.icon);
                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    {Icon && <Icon className="h-6 w-6 text-gray-500 mb-2" />}
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
                const Icon = getIcon(feature.icon);
                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    {Icon && <Icon className="h-6 w-6 text-gray-500 mb-2" />}

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
                const Icon = getIcon(feature.icon);

                return (
                  <div key={feature.name} className="rounded-xl border border-gray-200 bg-gray-50/50 p-4">
                    {Icon && <Icon className="h-6 w-6 text-gray-500 mb-2" />}

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
          <p className="text-lg text-gray-600">{prop.cta.text}</p>
          <Link
            href="/waitlist"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {prop.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}