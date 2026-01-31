import { getMessages } from "@/i18n/get-messages";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Hero from "@/components/home/hero-section-column";
import TaskAbilities from "@/components/home/task-abilities";
import { Features } from "@/components/home/features";
import { CTA } from "@/components/home/call-to-action";
import FAQ from "@/components/home/faq";
import UseCases from "@/components/home/use-cases";
import Waitlist from "@/components/home/waitlist";
import { DemoSection } from "@/components/playground/demo-section";
import { UsageSection } from "@/components/playground/usage-section";
import RoadmapSection from "@/components/home/roadmap";
import { ToolsSection } from "@/components/tool/tools-section";
import { Locale } from "@/i18n/config";
import { getAllToolConfigs } from "@/lib/config/tool-utils";
import {
  HomepageSkyscrapers,
  HomepageTopBanner,
  HomepageBottomBanner,
  PlaygroundInlineAd,
  ToolsInlineAd,
} from "@/components/adsense";

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages(locale, "home");

  const toolMetaConfigs = await getAllToolConfigs(locale);

  // 直接从 messages 中提取各组件的数据
  const homeData = (messages as any).home;

  return (
    <NextIntlClientProvider messages={messages}>
      <main className="relative">
        {/* 桌面端两侧摩天大楼悬浮广告 */}
        <HomepageSkyscrapers />

        {/* 顶部横幅广告 */}
        <HomepageTopBanner />

        <Hero />
        <DemoSection />
        
        {/* Playground 区域广告 */}
        <PlaygroundInlineAd />
        
        <UsageSection {...homeData.usage} />
        <RoadmapSection {...homeData.roadmap} />
        <TaskAbilities {...homeData.taskAbilities} />
        <UseCases {...homeData.useCases} />
        <Features {...homeData.features} />
        <FAQ {...homeData.faq} />
        
        {/* Tools 区域广告 */}
        <ToolsInlineAd />
        
        <ToolsSection tools={toolMetaConfigs} />
        <CTA />
        <Waitlist {...homeData.waitlist} />

        {/* 底部横幅广告 */}
        <HomepageBottomBanner />
      </main>
    </NextIntlClientProvider>
  );
}

