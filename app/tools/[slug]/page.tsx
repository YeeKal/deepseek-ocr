import ToolHero from "@/components/tool/hero"
import {ToolPlayground} from "@/components/tool-playground/tool-playground"
import ToolHowTo from "@/components/tool/how-to"
import ToolUseCases from "@/components/tool/use-cases"
import ToolFeatures from "@/components/tool/features"
import ToolFAQ from "@/components/tool/faq"
import ToolCTA from "@/components/tool/cta"
import {toolMetaConfigs, getToolConfigBySlug} from "@/lib/config/tool-utils"
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import {SEO_DEFAULT} from "@/lib/constants";



interface Params {
  slug: string;
}

type Props = {
  params:Promise<Params>;
};

export async function generateStaticParams():Promise<Params[]> {
  return toolMetaConfigs
    .filter(t => t.slug !== undefined)
    .map(t => ({ slug: t.slug as string }));
}

// For SEO Metadata using Next.js 13+ App Router
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const { seo } = getToolConfigBySlug(slug) || {};

  if (!seo) {
    return {
      title: SEO_DEFAULT.title,
      description: SEO_DEFAULT.description,
    };
  }

  const ogImageUrl = seo.ogImage
    ? seo.ogImage
    : SEO_DEFAULT.ogImage;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: ogImageUrl }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [ogImageUrl],
    },
  };
}


const generateFaqSchema = (faqItems: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
};


export default async function ToolPage({ params }: Props) {
  const { slug } = await params
  const config = getToolConfigBySlug(slug)
  const faqSchema = config?.faq ? generateFaqSchema(config.faq.items) : null;

  if (!config) {
    return notFound();
  }

  return <>
      {config.seo.structuredData && config.seo.structuredData.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <ToolHero hero={config.hero} />
      <ToolPlayground playground={config.playground} />
      <ToolHowTo howTo={config.how_to} />
      <ToolUseCases useCases={config.useCases} />
      <ToolFeatures features={config.features} />
      <ToolFAQ faq={config.faq} />
      <ToolCTA cta={config.cta} />
  </>
}
