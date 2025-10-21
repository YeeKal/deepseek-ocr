import { isDev } from "@/lib/utils";
export type RechargePlan = {
  code: string;
  name: string;
  buyName: string;
  price: number;
  credit: number;
  desc: string;
  productId: string;
  isMostPop?: boolean;
};

export const SubscriptionTrialCredits = 1000;

export const RECHARGES: RechargePlan[] = isDev()
  ? [
      {
        code: "FREE",
        name: "Free",
        buyName: "Free Trial",
        price: 0,
        credit: 20,
        desc: "Access to Basic & Efficient Models",
        productId: "free",
      },
      {
        code: "BASIC",
        name: "Basic",
        buyName: "Basic Plan",
        price: 9.99,
        credit: 1000,
        desc: "Access to Basic, Efficient & Advanced Models",
        productId: "prod_3YGb7dhCf1fRCCj85Xl9gy",
      },
      {
        code: "PRO",
        name: "Pro",
        buyName: "Pro Plan",
        price: 29.99,
        credit: 4000,
        desc: "Full access to all Models",
        productId: "prod_2vqrFu4a5LWSLu6w7VMpUb",
        isMostPop: true,
      },
    ]
  : [
       {
        code: "FREE",
        name: "Free",
        buyName: "Free Trial",
        price: 0,
        credit: 20,
        desc: "Access to Basic & Efficient Models",
        productId: "free",
      },
      {
        code: "BASIC",
        name: "Basic",
        buyName: "Basic Plan",
        price: 9.99,
        credit: 1000,
        desc: "Access to Basic, Efficient & Advanced Models",
        productId: "prod_18mZkCMw723aJCWX1lEkNu",
      },
      {
        code: "PRO",
        name: "Pro",
        buyName: "Pro Plan",
        price: 29.99,
        credit: 4000,
        desc: "Full access to all Models",
        productId: "prod_JYSaDy1Uf08cbtwb4Gc7P",
        isMostPop: true,
      },
    ];
