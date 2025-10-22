import Hero from "@/components/home/hero-section-column";
import Playground from "@/components/home/playground";
import TaskAbilities from "@/components/home/task-abilities";
import { Features } from "@/components/home/features";
import { CTA } from "@/components/home/call-to-action";
import FAQ from "@/components/home/faq";
import UseCases from "@/components/home/use-cases"
import DiveDeeper from "@/components/home/dive-deeper";
import  Waitlist  from "@/components/home/waitlist";

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
      <Playground/>
      <TaskAbilities/>
      <UseCases/>
      {/* <ImageGallery /> */}
      <Features  />
      <DiveDeeper />
      <FAQ />
      <CTA />
      <Waitlist/>
    </main>
  );
}
