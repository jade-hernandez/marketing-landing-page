import { ImageWithPlaceholder } from "../../components/image-with-placeholder/imageWithPlaceholder";
import { Button } from "../../components/ui/Button";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import HeroDesktop from "./images/abstract-hero-desktop.webp";
import HeroTablet from "./images/abstract-hero-tablet.webp";
import HeroMobile from "./images/abstract-hero-mobile.webp";

import { HERO_DESKTOP_BLUR, HERO_MOBILE_BLUR, HERO_TABLET_BLUR } from "./images/blur-data";

function HeroSection() {
  const breakpoint = useMediaQuery();
  return (
    <section
      aria-labelledby='hero-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-8 md:py-16 xl:flex-row xl:py-24'
    >
      <div className='flex h-fit w-full flex-col justify-start gap-8 md:gap-16 xl:max-w-122'>
        <div className='flex h-fit w-full flex-col gap-4 md:gap-6'>
          <h1
            id='hero-heading'
            className='h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl xl:text-6xl'
          >
            <span className='xl:hidden'>Well crafted abstract gradient</span>
            <span className='hidden xl:block'>From a tiny desk to the entire world</span>
          </h1>

          <p className='h-fit w-full text-lg text-neutral-600 md:text-xl'>
            As a lean, passionate team, we've made something that most would think is impossible -
            premium abstract images for free and for all.
          </p>
        </div>
        <div className='flex w-full max-w-114.5 gap-4 md:gap-8 xl:max-w-95.75'>
          <Button
            variant='secondary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
          >
            Features
          </Button>
          <Button
            variant='primary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
          >
            See pricing
          </Button>
        </div>
      </div>
      <div className='overflow-hidden rounded-lg md:max-w-180 xl:max-w-174'>
        <ImageWithPlaceholder
          imgClassNames='md:h-131.5 lg:max-w-174'
          altText='An abstract representation of creativity and design'
          images={{
            mobileImagePlaceholder: HERO_MOBILE_BLUR,
            tabletImagePlaceholder: HERO_TABLET_BLUR,
            desktopImagePlaceholder: HERO_DESKTOP_BLUR,
            mobileImage: HeroMobile,
            tabletImage: HeroTablet,
            desktopImage: HeroDesktop
          }}
        />
      </div>
    </section>
  );
}

export { HeroSection };
