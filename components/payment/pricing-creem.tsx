"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { Check, X } from "lucide-react";
import { CTA } from "@/components/home/call-to-action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RechargePlan, RECHARGES } from "@/lib/ai-tools/products";
import { toast } from "sonner";
import Link from "next/link";
import { ThirdPartyProviders } from "@/components/auth/third-party-providers"


type PricingPlan = RechargePlan & {
  features: { query: string; support?: boolean; value?: string }[];
};

export default function PricingCreem({ content }: { content: string }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedPlanForRedirect, setSelectedPlanForRedirect] =
    useState<PricingPlan | null>(null);

  const features = {
    FREE: [
        { query: "Monthly Credits: 20",  support: true },
        { query: "Access to FLUX.1 Schnell Model", support: true },
        { query: "Access to Dev & Pro & Max Models", support: true },
        { query: "About 5 images with FLUX.1 Kontext Dev Model",  support: true },
        { query: "About 20 images Background Remover",  support: true },
        { query: "Basic Image Editing Tools", support: true },
        { query: "Artistic Style Transfers", support: true },
        { query: "Community Support", support: true },
    ],
    BASIC: [
        { query: "Monthly Credits: 1000",  support: true },
        { query: "About 200 images with FLUX.1 Kontext Dev Model",  support: true },
        { query: "About 100 images with FLUX.1 Kontext Pro Model",  support: true },
        { query: "About 1000 images with FLUX.1 Schnell Model",  support: true },
        { query: "Access to FLUX.1 Schnell Model", support: true },
        { query: "Access to FLUX.1 Kontext Pro Model", support: true },
        { query: "Access to FLUX.1 Kontext Max Model", support: true },
        { query: "Advanced Editing (Inpainting & Local Edits)", support: true },
        { query: "Artistic Style Transfers", support: true },
        { query: "High-Resolution Images", support: true },
        { query: "Character Consistency Tool", support: true },
        { query: "Commercial Use License", support: true },
        { query: "Email Support", support: true },
    ],
    PRO: [
        { query: "Monthly Credits: 4000", support: true },
        { query: "About 800 images with FLUX.1 Kontext Dev Model",  support: true },
        { query: "About 400 images with FLUX.1 Kontext Pro Model",  support: true },
        { query: "About 4000 images with FLUX.1 Schnell Model",  support: true },
        { query: "Access to FLUX.1 Schnell Model", support: true },
        { query: "Access to FLUX.1 Kontext Pro Model", support: true },
        { query: "Access to FLUX.1 Kontext Max Model", support: true },
        { query: "All Advanced Editing Tools", support: true },
        { query: "All Artistic & Custom Style Transfers", support: true },
        { query: "Maximum Resolution Images", support: true },
        { query: "Character Consistency Tool", support: true },
        { query: "Full Commercial Use License", support: true },
        { query: "Priority Email & Chat Support", support: true },
    ],
  };

  const translateRechargePlans = (plans: RechargePlan[]): PricingPlan[] => {
    return plans.map((plan) => ({
      ...plan,
      features: features[plan.code.toUpperCase() as keyof typeof features],
    }));
  };

  const TRANS_RECHARGES = translateRechargePlans(RECHARGES);

  const handleCheckout = async (selectedPlan: PricingPlan) => {
    if (status !== "authenticated") {
      setSelectedPlanForRedirect(selectedPlan);
      setShowLoginModal(true);
      return;
    }

    setLoading(selectedPlan.code);
    try {
      const response = await fetch(
        `/api/creem/checkout?product_id=${selectedPlan.productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }
      const responseData = await response.json();
      window.location.href = responseData.checkoutUrl;
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error(
        "An unexpected error occurred. Please try again or contact support."
      );
    } finally {
      setLoading(null);
    }
  };

  return (
    <>
      <section className="px-2 py-4 md:px-8 md:py-12  overflow-y-auto">
        <div className="w-full mx-auto items-center gap-4 md:gap-6">
          <div
            id="pricing"
            className="relative mx-auto text-center mb-4 md:mb-8"
          >
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#5182ED]  to-[#D56575] bg-clip-text text-transparent  md:text-3xl lg:text-5xl">
              Find the Perfect Plan to Visualize Your AI Ideas
            </h1>
            <div className="mt-1 md:mt-3">
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                Unlock the full potential of visual AI with flexible credit-based
                plans. Start for free, then scale as you grow
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {TRANS_RECHARGES.map((item: PricingPlan) => (
              <div
                key={item.code}
                className={`bg-white relative flex flex-col rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                  item.isMostPop
                    ? "border-slate-600 md:scale-105"
                    : "md:hover:scale-105"
                }`}
              >
                {item.isMostPop && (
                  <p className="absolute right-2 top-0 -translate-y-1/2 font-heading px-2 py-0.5 text-xs max-w-max text-white tracking-[1px] rounded-full bg-primary md:text-sm md:px-3 md:py-1">
                    Recommended
                  </p>
                )}

                <div className="p-3 md:p-5 space-y-1 border-b text-center">
                  <span className="text-slate-600 font-medium text-xs md:text-sm">
                    {item.name}
                  </span>
                  <div className="text-gray-800 text-xl font-semibold md:text-2xl lg:text-3xl">
                    ${item.price}{" "}
                    <span className="text-xs text-gray-600 font-normal md:text-sm">
                      / month
                    </span>
                  </div>
                  <p className="text-xs md:text-sm">
                    {item.credit} Credits / month
                  </p>
                </div>
                <div className="p-3 md:p-5">
                  <ul className="space-y-1 text-xs hidden sm:block md:text-sm md:space-y-2">
                    {item.features.map((featureItem, idx) => (
                      <li key={idx} className="flex items-center gap-1 md:gap-2">
                        {featureItem.support ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <X className="h-4 w-4 text-destructive/80" />
                        )}
                        {featureItem.query}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 md:pt-5">
                    {item.code === "FREE" ? (
                      <Link href="/login" className="w-full">
                        <Button variant="default" className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant={item.isMostPop ? "default" : "secondary"}
                        className={`w-full text-xs md:text-sm ${
                          item.isMostPop
                            ? "bg-slate-600 hover:bg-slate-500"
                            : "bg-foreground text-background hover:bg-muted hover:text-muted-foreground"
                        }`}
                        onClick={() => handleCheckout(item)}
                        disabled={loading === item.code}
                      >
                        {loading === item.code ? (
                          <div className="flex items-center justify-center">
                            <div className="h-4 w-4 rounded-full border-2 border-current border-t-transparent animate-spin mr-2"></div>
                            <span>Processing...</span>
                          </div>
                        ) : (
                          item.buyName
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Understanding Your Credits
          </h2>

          <div
            className="pb-6 prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">What if I run out of credits?</h4>
            <p>
              {`Need more power mid-month? You can easily upgrade your plan at any
              time. We're also working on options for one-time credit top-ups!`}
            </p>
          </div>
        </div>

        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            {`More Than Just an Image Generator – It's a Creative Suite.`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">🎨</span>
                <h3 className="font-medium">Unmatched Creative Control</h3>
              </div>
              <p>
                Go beyond simple generation. Edit images with text, maintain
                character consistency, and transfer styles for a cohesive look.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">⚡</span>
                <h3 className="font-medium">Create at the Speed of Thought</h3>
              </div>
              <p>
                Experience minimal latency with our FLUX models, allowing for
                rapid, iterative editing and real-time visual feedback.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">🎭</span>
                <h3 className="font-medium">Diverse & Powerful AI Models</h3>
              </div>
              <p>
                Access a range of specialized FLUX models, from the ultra-fast
                Schnell to the state-of-the-art Pro Ultra for professional work.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">🛠️</span>
                <h3 className="font-medium">Practical, One-Click Tools</h3>
              </div>
              <p>
                Effortlessly apply artistic styles, restore old photos, remove
                watermarks, or even create virtual try-ons for e-commerce.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">↗️</span>
                <h3 className="font-medium">Seamless Sharing</h3>
              </div>
              <p>
                Easily share your stunning creations with a single link, perfect
                for collaboration or showcasing your portfolio.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">💼</span>
                <h3 className="font-medium">Commercial-Ready</h3>
              </div>
              <p>
                With our paid plans, you get a full commercial license to use
                your generated images for any project, big or small.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8">
          <h2 className="text-3xl font-semibold mb-4">
            Still Have Questions?
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                How are credits used for images?
              </h3>
              <p className="mt-2">
                Each AI model has a different credit cost per image generation or
                editing task. A simple generation with FLUX.1 Schnell might cost
                1 credit, while a complex edit with Flux1.1 Pro Ultra could cost
                40 credits. The cost is always displayed before you generate.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                Do unused credits roll over to the next month?
              </h3>
              <p className="mt-2">
                No, unused credits do not roll over. Your credit allowance
                resets at the beginning of each monthly billing cycle, so you
                always start fresh.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="mt-2">
                Yes, you can upgrade your plan at any time to get more credits
                and access to more powerful models. Downgrades are not yet
                supported, but you can cancel your current subscription at any
                time, and the cancellation will take effect at the end of your
                current billing cycle.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                Can I use the images I create for commercial purposes?
              </h3>
              <p className="mt-2">
                Yes! All images created under our Basic and Pro plans come with a
                full commercial license, meaning you can use them in marketing,
                advertising, products, and more. Images created on the Free plan
                are for personal use only.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                Is there a free trial for paid plans?
              </h3>
              <p className="mt-2">
                {`Our "Free" plan is the best way to try out Flux Kontext and our
                standard model. We do not currently offer a separate trial
                period for paid plans, but you can get started for free and
                upgrade whenever you're ready.`}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                What happens if I run out of credits?
              </h3>
              <p className="mt-2">
                {`If you use all your credits for the month, you will need to wait
                for them to refresh on your next billing date. Alternatively, you
                can upgrade to a higher plan to immediately receive a larger
                credit allowance.`}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium">
                What payment methods do you accept?
              </h3>
              <p className="mt-2">
                We accept all major credit cards, including Visa, Mastercard, and
                American Express, processed securely.
              </p>
            </div>
          </div>
        </div>

        <CTA />
      </section>

      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create an Account or Sign In</DialogTitle>
            <DialogDescription>
              Please sign in or create an account to continue with your
              purchase.
            </DialogDescription>
          </DialogHeader>
          <ThirdPartyProviders></ThirdPartyProviders>
        </DialogContent>
      </Dialog>
    </>
  );
}