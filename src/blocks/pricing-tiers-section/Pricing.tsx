import { cva } from "class-variance-authority";

import type { BillingCycle, Variant } from "./pricing-types";

import { cn } from "../../utils/utils";

type Currency = "$" | "€";

type PricingProps = React.HTMLAttributes<HTMLDivElement> & {
  price: string;
  currency?: Currency;
  billingCycle?: BillingCycle;
  subText?: string;
  variant?: Variant;
};

const pricingVariants = cva("", {
  variants: {
    variant: {
      default: "text-neutral-900",
      highlighted: "text-indigo-700"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

function Pricing({
  price,
  currency = "$",
  billingCycle = "month",
  subText,
  variant = "default",
  ...props
}: PricingProps) {
  const priceAsNumber = Number(price);

  const currencyMap = {
    $: "en-US",
    "€": "fr-FR"
  };

  const formattedPrice = new Intl.NumberFormat(currencyMap[currency], {
    style: "currency",
    currency: currency === "$" ? "USD" : "EUR"
  }).format(priceAsNumber);

  return (
    <div
      className='flex flex-col gap-2 lg:px-8'
      {...props}
    >
      <div className='flex items-baseline'>
        <span className={cn("text-5xl font-semibold", pricingVariants({ variant }))}>
          {formattedPrice}
        </span>

        <span className={cn("text-base", pricingVariants({ variant }), "ml-1")}>
          / {billingCycle}
        </span>
      </div>
      {subText && <span className='text-base text-neutral-600'>{subText}</span>}
    </div>
  );
}

export { Pricing };
export type { PricingProps };
