// components/tool-page/FeaturesSection.tsx
import { FeaturesSectionConfig } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeaturesSectionProps {
  featuresSection?: FeaturesSectionConfig; // Optional as per ToolConfig
}

export function FeaturesSection({ featuresSection }: FeaturesSectionProps) {
  if (!featuresSection || featuresSection.items.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-4">
          {featuresSection.title}
        </h2>
        {featuresSection.description && (
          <div className="text-md sm:text-lg text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            {featuresSection.description} 
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuresSection.items.map((feature, index) => (
            <Card key={index} className="bg-card text-card-foreground shadow-lg flex flex-col text-center md:text-left">
              <CardHeader className="items-center md:items-start">
                <div className="flex items-center mb-3 md:mb-0">
                    <span className="text-3xl mr-3">{feature.icon}</span>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground" />{feature.description}<p/>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}