import { PricingTier } from "../types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: {
      monthly: 99,
      annual: 79,
    },
    description: "Perfect for small businesses just getting started with customer recognition.",
    features: [
      "Basic customer recognition",
      "Purchase history tracking",
      "Email support",
      "1 retail location",
      "3 user accounts",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: {
      monthly: 199,
      annual: 159,
    },
    description: "Ideal for growing businesses looking to enhance customer relationships.",
    features: [
      "Advanced customer recognition",
      "Purchase history tracking",
      "Customer preferences",
      "Loyalty program integration",
      "Email and chat support",
      "5 retail locations",
      "10 user accounts",
      "Basic analytics",
    ],
    cta: "Get Started",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: {
      monthly: 399,
      annual: 319,
    },
    description: "Comprehensive solution for established retail chains with multiple locations.",
    features: [
      "Premium customer recognition",
      "Purchase history tracking",
      "Customer preferences",
      "Loyalty program integration",
      "Priority email and phone support",
      "Unlimited retail locations",
      "Unlimited user accounts",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
  },
];