import { FeatureCard } from "../../components/feature-card/FeatureCard";
import { ImageWithPlaceholder } from "../../components/image-with-placeholder/imageWithPlaceholder";

import { HDIcon } from "./icons/HDIcon";
import { WaterDropIcon } from "./icons/WaterDropIcon";
import { RainbowIcon } from "./icons/RainbowIcon";

import DesignerFeaturesMobile from "./images/designer-features-mobile.webp";
import DesignerFeaturesTablet from "./images/designer-features-tablet.webp";
import DesignerFeaturesDesktop from "./images/designer-features-desktop.webp";
import {
  DESIGNER_FEATURES_DESKTOP_BLUR,
  DESIGNER_FEATURES_MOBILE_BLUR,
  DESIGNER_FEATURES_TABLET_BLUR
} from "./images/blur-data";

const designerFeatures = [
  {
    icon: <HDIcon />,
    heading: "5K resolution support",
    description:
      "All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
  },
  {
    icon: <WaterDropIcon />,
    heading: "From water to glass",
    description:
      "We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
  },
  {
    icon: <RainbowIcon />,
    heading: "Portrait or landscape",
    description:
      "Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
  }
];

function DesignerFeatures() {
  return (
    <section
      aria-labelledby='designer-features-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-16 md:py-16 lg:py-24 xl:max-w-304'
    >
      <div className='flex flex-col gap-5 text-center lg:mx-auto lg:max-w-4xl'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-indigo-700'>High quality images</span>
          <h2
            id='designer-features-heading'
            className='text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            For designers, by designers
          </h2>
        </div>
        <p className='mx-auto text-lg text-pretty text-neutral-600 md:max-w-167.5 md:text-xl lg:max-w-4xl'>
          Unleash boundless creativity with a large repository of images optimized for designers
        </p>
      </div>
      <div className='mx-auto flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-8'>
        <div className='flex flex-col gap-10'>
          {designerFeatures.map((card, index) => (
            <FeatureCard
              key={`designer-features-card-${index}`}
              icon={card.icon}
              heading={card.heading}
              description={card.description}
            />
          ))}
        </div>
        <ImageWithPlaceholder
          altText='An abstract representation of creativity and design'
          images={{
            mobileImagePlaceholder: DESIGNER_FEATURES_MOBILE_BLUR,
            tabletImagePlaceholder: DESIGNER_FEATURES_TABLET_BLUR,
            desktopImagePlaceholder: DESIGNER_FEATURES_DESKTOP_BLUR,
            mobileImage: DesignerFeaturesMobile,
            tabletImage: DesignerFeaturesTablet,
            desktopImage: DesignerFeaturesDesktop
          }}
        />
      </div>
    </section>
  );
}

export { DesignerFeatures };
