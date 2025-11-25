
import { ToolsGrid } from "@/components/tool/tools-grid"
import { setRequestLocale } from 'next-intl/server';
import { getAllToolConfigs } from "@/lib/config/tool-utils";
import { getMessages } from "@/i18n/get-messages";
import { Locale } from "@/i18n/config";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const m = await getMessages(locale, "tools");

  return {
    title: m.tools.seo.title,
    description: m.tools.seo.description,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const m = await getMessages(locale, "tools");

    const toolMetaConfigs = await getAllToolConfigs(locale);
  

  return (
    <section className="max-w-7xl mx-auto">
      <section className="px-4 md:px-6 py-20 md:py-32 text-center bg-gradient-to-b from-card to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 text-balance">
            {m.tools.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            {m.tools.description}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto pb-16 px-4 md:px-6">


        {/* Tools Grid */}
        <ToolsGrid tools={toolMetaConfigs}></ToolsGrid>

      </div>

      <section className="px-4 md:px-6 pb-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {m.tools.features.map((feature:any, index:number) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{feature.stat}</div>
                <p className="text-muted-foreground">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  )

}