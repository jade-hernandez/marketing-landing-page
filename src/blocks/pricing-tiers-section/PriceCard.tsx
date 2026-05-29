import { Button } from "../../components/ui/Button";

import { FeatureList } from "./FeatureList";
import { Pricing } from "./Pricing";
import type { BillingCycle, PricingPlan } from "./pricing-types";

import { cn } from "../../utils/utils";

type PriceCardProps = Omit<PricingPlan, "monthlyPrice" | "annualPrice" | "annualTotal"> & {
  price: string;
  subText: string;
  billingCycle: BillingCycle;
};

function PriceCard({
  title,
  description,
  price,
  subText,
  features,
  isFeatured = false,
  headingText = "",
  variant = "default",
  buttonVariant = "primary",
  billingCycle
}: PriceCardProps) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col justify-between overflow-hidden rounded-md lg:max-w-[384px]",
        isFeatured
          ? "border border-indigo-600/30 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]"
          : "shadow-[0_-1px_5px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]"
      )}
    >
      {isFeatured && headingText && (
        <div className='bg-indigo-50 py-4 text-center text-xl font-semibold text-indigo-700'>
          {headingText}
        </div>
      )}
      <div className='flex h-full flex-col gap-8 p-4 md:p-8 lg:px-0 lg:py-8'>
        <div className='flex flex-col gap-2 lg:pr-4 lg:pl-8'>
          <h3 className='text-2xl font-semibold text-neutral-900'>{title}</h3>
          <p className='text-base text-neutral-600'>{description}</p>
        </div>
        <Pricing
          price={price}
          subText={subText}
          variant={variant}
          billingCycle={billingCycle}
        />
        <FeatureList items={features} />

        <Button
          variant={buttonVariant}
          size='lg'
          className='w-full justify-center lg:mx-auto lg:max-w-[calc(100%-4rem)]'
        >
          Buy now
        </Button>
      </div>
    </div>
  );
}

export { PriceCard };
