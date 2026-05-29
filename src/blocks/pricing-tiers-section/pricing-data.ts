import { featuresData } from "./features-data";
import type { PricingPlan } from "./pricing-types";

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    description: "Access to a curated selection of abstract images",
    monthlyPrice: "9.99",
    annualPrice: "6.99",
    annualTotal: "84",
    features: featuresData.basic,
    buttonVariant: "secondary"
  },
  {
    title: "Standard Plan",
    description: "Next-level Integrations, priced economically",
    monthlyPrice: "19.99",
    annualPrice: "15.99",
    annualTotal: "192",
    features: featuresData.standard,
    isFeatured: true,
    headingText: "Most Popular",
    variant: "highlighted"
  },
  {
    title: "Premium Plan",
    description: "Experience limitless living for power users",
    monthlyPrice: "29.99",
    annualPrice: "25.99",
    annualTotal: "312",
    features: featuresData.premium,
    buttonVariant: "secondary"
  }
];

export { pricingPlans };
