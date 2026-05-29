import { ImageWithPlaceholder } from "../../components/image-with-placeholder/imageWithPlaceholder";

import { BellIcon } from "./icons/BellIcon";
import { CopyrightIcon } from "./icons/CopyrightIcon";
import { PeopleIcon } from "./icons/PeopleIcon";

import ConvenienceFeaturesMobile from "./images/convenience-features-mobile.webp";
import ConvenienceFeaturesTablet from "./images/convenience-features-tablet.webp";
import ConvenienceFeaturesDesktop from "./images/convenience-features-desktop.webp";
import {
  CONVENIENCE_FEATURES_DESKTOP_BLUR,
  CONVENIENCE_FEATURES_MOBILE_BLUR,
  CONVENIENCE_FEATURES_TABLET_BLUR
} from "./images/blur-data";
import { FeatureCard } from "../../components/feature-card/FeatureCard";

const convenienceFeatures = [
  {
    icon: <BellIcon />,
    heading: "Faster downloads",
    description:
      "Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
  },
  {
    icon: <PeopleIcon />,
    heading: "Convenience for teams",
    description:
      "Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
  },
  {
    icon: <CopyrightIcon />,
    heading: "Royalty-free licensing",
    description:
      "Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
  }
];

function ConvenienceFeatures() {
  return (
    <section
      aria-labelledby='convenience-features-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-16 md:py-16 lg:py-24 xl:max-w-304'
    >
      <div className='flex flex-col gap-5 text-center lg:mx-auto lg:max-w-4xl'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-indigo-700'>Best-in-class support</span>
          <h2
            id='convenience-features-heading'
            className='mx-auto max-w-181 text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            Convenience and licensing that empowers
          </h2>
        </div>
        <p className='mx-auto text-lg text-pretty text-neutral-600 md:max-w-167.5 md:text-xl lg:max-w-122'>
          In a world where storytelling constantly evolves, don't let licensing and poor support
          hold you down.
        </p>
      </div>
      <div className='mx-auto flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-8'>
        <ImageWithPlaceholder
          altText='An abstract representation of creativity and design'
          images={{
            mobileImagePlaceholder: CONVENIENCE_FEATURES_MOBILE_BLUR,
            tabletImagePlaceholder: CONVENIENCE_FEATURES_TABLET_BLUR,
            desktopImagePlaceholder: CONVENIENCE_FEATURES_DESKTOP_BLUR,
            mobileImage: ConvenienceFeaturesMobile,
            tabletImage: ConvenienceFeaturesTablet,
            desktopImage: ConvenienceFeaturesDesktop
          }}
        />
        <div className='flex flex-col gap-10'>
          {convenienceFeatures.map((card, index) => (
            <FeatureCard
              key={`convenience-features-card-${index}`}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ConvenienceFeatures };
