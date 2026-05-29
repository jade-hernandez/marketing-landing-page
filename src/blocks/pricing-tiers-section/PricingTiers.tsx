import { useState } from "react";

import { SegmentedControl } from "../../components/ui/SegmentedControl";

import { PriceCard } from "./PriceCard";
import { pricingPlans } from "./pricing-data";

function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section
      aria-labelledby='pricing-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-16 md:py-16 xl:py-24'
    >
      <div className='flex flex-col items-center gap-10 text-center'>
        <div className='flex flex-col gap-5 md:px-8 lg:px-40'>
          <div className='flex flex-col gap-3'>
            <span className='text-base font-semibold text-indigo-700'>Pricing Tiers</span>
            <h2
              id='pricing-heading'
              className='text-3xl font-semibold text-neutral-900 md:text-5xl'
            >
              Fit for all your needs
            </h2>
          </div>
          <p className='max-w-4xl text-lg text-neutral-600 md:text-xl'>
            Pick the plan that suits you today and step up as your demands grow - our flexible
            options have your journey mapped out.
          </p>
        </div>
        <SegmentedControl
          options={["Monthly", "Annually"]}
          value={isAnnual ? "Annually" : "Monthly"}
          onChange={value => setIsAnnual(value === "Annually")}
        />
      </div>

      <div className='flex w-full flex-col items-center gap-8 lg:flex-row lg:items-stretch'>
        {pricingPlans.map(plan => (
          <PriceCard
            key={plan.title}
            {...plan}
            price={isAnnual ? plan.annualPrice : plan.monthlyPrice}
            subText={isAnnual ? `Billed annually ($${plan.annualTotal})` : "Billed monthly"}
            billingCycle={isAnnual ? "year" : "month"}
          />
        ))}
      </div>
    </section>
  );
}

export { PricingTiers };
