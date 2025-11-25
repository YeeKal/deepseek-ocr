import ToolHero from "@/components/tool/hero"
import { ToolPlayground } from "@/components/tool-playground/tool-playground"
import ToolHowTo from "@/components/tool/how-to"
import ToolUseCases from "@/components/tool/use-cases"
import ToolFeatures from "@/components/tool/features"
import ToolFAQ from "@/components/tool/faq"
import ToolCTA from "@/components/tool/cta"
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';
import { SEO_DEFAULT } from "@/lib/constants";
import { ToolsSection } from "@/components/tool/tools-section"
import { setRequestLocale } from 'next-intl/server';
import { getAllToolConfigs } from "@/lib/config/tool-utils";
import { Locale,locales, defaultLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/get-messages";



interface Params {
  slug: string;
  locale: Locale;
}

type Props = {
  params: Promise<Params>;
};

export async function generateStaticParams(): Promise<Params[]> {
    const toolMetaConfigs = await getAllToolConfigs(defaultLocale);
 
  return locales.flatMap(locale =>
    toolMetaConfigs
      .filter(tool => tool.slug)
      .map(tool => ({
        locale,
        slug: tool.slug!,
      }))
  );
}

// For SEO Metadata using Next.js 13+ App Router
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug, locale } = await params;
    const m = await getMessages(locale, `tool-${slug}`);
    const toolData = (m as any)[`tool-${slug}`];

  const seo = toolData.seo;

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
  const { slug, locale } = await params
  setRequestLocale(locale);

  const m = await getMessages(locale, `tool-${slug}`);
  // const t=  useTranslations(`common.toolcards`);
    if (!m) {
    return notFound();
  }
    const toolData = (m as any)[`tool-${slug}`];
       if (!toolData) {
    return notFound();
  }

    const toolMetaConfigs = await getAllToolConfigs(locale);
    const otherTools = toolMetaConfigs.filter(tool => tool.slug !== slug);




  const faqSchema = toolData.faq ? generateFaqSchema(toolData.faq.items) : null;


  return <>
    {toolData.seo.structuredData && toolData.seo.structuredData.map((schema:any, index:number) => (
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
    <ToolHero hero={toolData.hero} />
    <ToolPlayground playground={toolData.playground} />
    <ToolHowTo howTo={toolData.how_to} />
    <ToolUseCases useCases={toolData.useCases} />
    <ToolFeatures features={toolData.features} />
    <ToolFAQ faq={toolData.faq} />
    <ToolsSection
      tools={otherTools} />
    <ToolCTA cta={toolData.cta} />
  </>
}

