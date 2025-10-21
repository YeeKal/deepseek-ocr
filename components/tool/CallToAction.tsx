// src/components/cta-section.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the import path if needed
import { MoveRight } from "lucide-react";
import {CallToActionConfig} from "@/lib/types"


interface CallToActionSectionProps {
  cta: CallToActionConfig; // Optional
}

export function CallToActionSection({cta}: CallToActionSectionProps) {
  return (
    <section className="w-full py-16 lg:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* The Card-like container for the CTA content */}
        <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 p-8 text-center shadow-sm md:p-12">
          
          {/* Main Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {cta.title}
          </h2>
          
          {/* Descriptive Text */}
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {cta.description}
          </p>
          
          {/* The Call to Action Button */}
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-8 text-base font-medium">
              <Link href={cta.button.link}>
                {cta.button.text}
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}