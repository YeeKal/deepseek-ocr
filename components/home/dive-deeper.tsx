// components/sections/DiveDeeper.tsx
import { pageConfig } from "@/lib/pageconfig";


const content = pageConfig.diveDeeper;

export default function DiveDeeper() {
  return (
    <section className="w-full bg-primary text-primary-foreground py-20 sm:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">{content.title}</h2>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{content.description}</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content.items.map((item) => (
            <a 
              key={item.title} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-8 bg-primary-foreground rounded-lg hover:bg-muted hover:shadow-lg transition-colors block"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-foreground">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}