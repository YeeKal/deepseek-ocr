import Hero from "@/components/home/hero-section-column";
import TaskAbilities from "@/components/home/task-abilities";
import { Features } from "@/components/home/features";
import { CTA } from "@/components/home/call-to-action";
import FAQ from "@/components/home/faq";
import UseCases from "@/components/home/use-cases"
import  Waitlist  from "@/components/home/waitlist";
import { DemoSection } from "@/components/playground/demo-section"
import { UsageSection } from "@/components/playground/usage-section"
import RoadmapSection from "@/components/home/roadmap";

export default function HomePage() {
  // const jsonLd = {
  //   "@context": "https://schema.org",
  //   "@type": "AggregateRating",
  //   itemReviewed: {
  //     "@type": "Game",
  //     image: "https://cdn.repogame.io/assert/icon.png",
  //     name: PageContent.seo.name,
  //   },
  //   ratingValue: 4.9,
  //   bestRating: 5,
  //   worstRating: 1,
  //   ratingCount: 103458,
  // };

  return (
    <main>
      <Hero />
      <DemoSection />
      <UsageSection />
      <RoadmapSection/>

      <TaskAbilities/>
      <UseCases/>
      <Features  />
      {/* <DiveDeeper /> */}
      <FAQ />
      <CTA />
      <Waitlist/>
    </main>
  );
}
