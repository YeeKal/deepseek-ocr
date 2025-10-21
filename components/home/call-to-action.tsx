// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// import { PenTool } from "lucide-react";

// export function CallToAction() {
//   return (
//     <section className="container mx-auto max-w-4xl py-12 px-4">
//       <Link
//         href="/image-generator"
//         prefetch={false}
//         className="flex items-center justify-center"
//       >
//         <Button className="bg-primary hover:bg-primary/90 text-primary-foreground p-4">
//           <span className="w-4 h-4 text-red-400">
//             <PenTool />
//           </span>
//           <span className="text-2xl">{`Try Flux Kontext`}</span>
//         </Button>
//       </Link>
//     </section>
//   );
// }

'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button"; // Adjust the import path if needed
import { MoveRight } from "lucide-react";
import { pageConfig } from "@/lib/pageconfig";
const content = pageConfig.cta;


  const scrollToForm = () => {
    const el = document.getElementById(`${content.button.link}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
             

export function CTA() {
   return (
    <section className="w-full py-16 lg:py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* The Card-like container for the CTA content */}
        <div className="flex flex-col items-center rounded-2xl bg-gradient-to-br from-pink-200 via-purple-200 to-teal-200 p-8 text-center shadow-sm md:p-12">
          
          {/* Main Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {content.title}
          </h2>
          
          {/* Descriptive Text */}
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {content.description}
          </p>
          
          {/* The Call to Action Button */}
          <div className="mt-8">
             <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-md transition-colors shadow-lg"
              >
                {content.button.text}
              </button>
            {/* <Button asChild size="lg" className="h-12 px-8 text-base font-medium">
              <Link href={content.button.link}>
                {content.button.text}
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button> */}
          </div>

        </div>
      </div>
    </section>
  );
}
