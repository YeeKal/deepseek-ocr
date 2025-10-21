// components/tool-page/GallerySection.tsx
import { GallerySectionConfig, GalleryImageConfig } from '@/lib/types'
import Image from 'next/image';
import { Card, CardContent, CardFooter} from '@/components/ui/card'; // Assuming CardDescription exists or can be simple p
import { Badge } from '@/components/ui/badge';
import {fakeGalleryImageConfig} from "@/lib/ai-tools/config-utils"
interface GallerySectionProps {
  gallerySection?: GallerySectionConfig; // Make it optional as per ToolConfig
}

function ImageDisplay({ imageItem }: { imageItem: GalleryImageConfig }) {
  const hasMultipleImages = imageItem.srcs.length > 1;

  return (
    <Card className="overflow-hidden bg-card text-card-foreground shadow-lg flex flex-col h-full">
      <CardContent className="p-0 flex-grow">
        <div className={`grid ${hasMultipleImages ? 'grid-cols-2 gap-1' : 'grid-cols-1'} h-full`}>
          {imageItem.srcs.slice(0, 2).map((src, index) => ( // Show max 2 images for simplicity in this grid
            <div key={index} className="relative aspect-[4/3] w-full h-full">
              <Image
                src={src}
                alt={imageItem.alts[index] || 'Gallery image'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              {hasMultipleImages && (
                <Badge variant="secondary" className="absolute top-2 left-2">
                  {index === 0 ? 'Before' : 'After'} 
                  {/* Or handle more than 2 images differently */}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </CardContent>
      {imageItem.prompt && (
        <CardFooter className="p-3 bg-muted/50">
          <p className="text-xs text-muted-foreground truncate" title={imageItem.prompt}>
            <span className="font-semibold text-foreground">Prompt:</span> {imageItem.prompt}
          </p>
        </CardFooter>
      )}
    </Card>
  );
}


export function GallerySection({ gallerySection }: GallerySectionProps) {
  if (!gallerySection || gallerySection.images.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-16 bg-muted/30 dark:bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-foreground mb-4">
          {gallerySection.title}
        </h2>
        {gallerySection.description && (
          <p className="text-md sm:text-lg text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            {gallerySection.description}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {(gallerySection.images.length > 17 ? gallerySection.images : fakeGalleryImageConfig).map((imageItem, index) => (
            <ImageDisplay key={index} imageItem={imageItem} />
          ))}
        </div>
      </div>
    </section>
  );
}