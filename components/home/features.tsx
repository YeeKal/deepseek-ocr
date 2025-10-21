interface EnhancedGameplayProps {
  content: {
    title: string;
    description: string;
    features: {
      emoji: string;
      description: string;
      title: string;
    }[];
  };
}
import { pageConfig } from "@/lib/pageconfig";


const content = pageConfig.features;

export function Features() {
  return (
    <section className="container px-4 mx-auto bg-secondary  py-20 px-4">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {content.title}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((f, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-center mb-2 text-foreground">
                {f.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
