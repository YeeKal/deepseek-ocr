// components/tool-page/FaqSection.tsx
import { FAQSectionConfig } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqSectionProps {
  faqSection?: FAQSectionConfig; // Optional
}

export function FaqSection({ faqSection }: FaqSectionProps) {
  if (!faqSection || faqSection.items.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-muted/30 dark:bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-8 md:mb-12">
          {faqSection.title}
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqSection.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-md sm:text-lg font-medium text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p> {faq.answer} </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}