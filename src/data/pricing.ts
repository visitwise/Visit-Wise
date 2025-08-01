import { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter Plan",
    price: {
      monthly: 99,
      annual: 79,
    },
    description: "Best for single outlets",
    features: [
      "Basic customer recognition",
      "Real-time notifications",
      "Email support",
      "1 retail location",
      "Up to 3 staff accounts",
    ],
    cta: "Contact Sales",
  },
  {
    name: "Business Plan",
    price: {
      monthly: 199,
      annual: 159,
    },
    description: "Best for growing chains",
    features: [
      "Advanced customer recognition",
      "Real-time notifications",
      "Customer analytics",
      "Staff mobile app",
      "Email and chat support",
      "Up to 5 retail locations",
      "Up to 15 staff accounts",
      "Monthly reports",
    ],
    cta: "Contact Sales",
    isPopular: true,
  },
  {
    name: "Enterprise Plan",
    price: {
      monthly: 399,
      annual: 319,
    },
    description: "Best for large brands",
    features: [
      "Premium customer recognition",
      "Real-time notifications",
      "Advanced analytics",
      "Staff mobile app",
      "API integrations",
      "Priority email and phone support",
      "Unlimited retail locations",
      "Unlimited staff accounts",
      "Custom reports",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
  },
];