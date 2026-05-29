type BillingCycle = "month" | "year";

type Variant = "default" | "highlighted";
type ButtonVariant = "primary" | "secondary";

type PricingPlan = {
  title: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  annualTotal: string;
  features: string[];
  isFeatured?: boolean;
  headingText?: string;
  variant?: Variant;
  buttonVariant?: ButtonVariant;
};

export type { BillingCycle, Variant, ButtonVariant, PricingPlan };
