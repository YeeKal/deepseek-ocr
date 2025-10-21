// components/ModelTiers.tsx
import { Button } from "@/components/ui/button"; // Adjust path as per your project
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Adjust path
import Link from "next/link";

const modelTiers = [
  {
    name: "FLUX.1 Kontext [pro]",
    description:
      "Perfect for high-quality edits, strong prompt following, and consistent results. Ideal for most creative tasks.",
    ctaText: "Explore Pro",
    link: "/image-models/flux-kontext-pro", // Example link, adjust as needed
  },
  {
    name: "FLUX.1 Kontext [max]",
    description:
      "For maximum performance, improved prompt adherence, and high-quality typography generation without compromise on speed.",
    ctaText: "Explore Max",
    link: "/image-models/flux-kontext-max", // Example link, adjust as needed
  },
  {
    name: "FLUX.1 Kontext [dev]",
    description:
      "An open-weight, guidance-distilled version for developers and researchers. Ideal for building custom solutions and fine-tuning for specific tasks.",
    ctaText: "Explore Dev",
    link: "/image-models/flux-kontext-dev", // Or a link to a newsletter signup
    comingSoon: false,
  },
];

export default function ModelTiers() {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Choose Your Creative Power
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-10 md:mb-16 max-w-2xl mx-auto">
          Select the FLUX.1 Kontext model that best fits your image generation
          and editing needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {modelTiers.map((tier) => (
            <Card
              key={tier.name}
              className="flex flex-col bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
                  {tier.name}
                </CardTitle>
                {tier.comingSoon && (
                  <span className="text-xs bg-yellow-400 text-yellow-900 font-semibold px-2 py-0.5 rounded-full inline-block ml-2">
                    Coming Soon
                  </span>
                )}
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-slate-700 dark:text-slate-200">
                  {tier.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={tier.link}>
                  <Button
                    variant={tier.comingSoon ? "outline" : "default"}
                    className="w-full"
                    disabled={tier.comingSoon}
                  >
                    {tier.ctaText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/pricing">
            <Button size="lg">
              View All Pricing & Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
