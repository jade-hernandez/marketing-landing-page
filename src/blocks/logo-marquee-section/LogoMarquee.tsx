import { logos } from "./logo-marquee-data";

type LogoStripeProps = {
  "aria-hidden"?: boolean;
};

function LogoStripe({ "aria-hidden": ariaHidden = false }: LogoStripeProps) {
  return (
    <div
      aria-hidden={ariaHidden}
      className='animate-marquee group-hover:animate-pause flex shrink-0 flex-row gap-2 first:pl-12 lg:gap-8'
    >
      {logos.map(logo => (
        <div
          key={logo.alt}
          className='p-6'
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className='h-12 w-auto text-neutral-900'
          />
        </div>
      ))}
    </div>
  );
}

function LogoMarquee() {
  return (
    <section
      aria-labelledby='marquee-heading'
      className='mx-auto flex w-full flex-col items-center py-12 md:py-16 lg:py-24'
    >
      <div className='flex w-full flex-1 flex-col items-center justify-center gap-8 rounded-md bg-white px-15.5 md:px-8.25 lg:px-0'>
        <h2
          id='marquee-heading'
          className='text-base text-neutral-600'
        >
          Used by teams that you love
        </h2>
        <div className='group flex w-full overflow-hidden select-none'>
          <LogoStripe />
          <LogoStripe aria-hidden />
          <LogoStripe aria-hidden />
        </div>
      </div>
    </section>
  );
}

export { LogoMarquee };
