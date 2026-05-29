import { useState } from "react";
import { cn } from "../../utils/utils";

type ImageWithPlaceholderProps = {
  imgClassNames?: string;
  altText: string;
  images: {
    mobileImagePlaceholder: string;
    tabletImagePlaceholder: string;
    desktopImagePlaceholder: string;
    mobileImage: string;
    tabletImage: string;
    desktopImage: string;
  };
};

function ImageWithPlaceholder({
  imgClassNames,
  altText,
  images: {
    mobileImagePlaceholder,
    tabletImagePlaceholder,
    desktopImagePlaceholder,
    mobileImage,
    tabletImage,
    desktopImage
  }
}: ImageWithPlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className='shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]'>
      {!isLoaded && (
        <picture>
          <source
            media='(max-width: 767px)'
            srcSet={mobileImagePlaceholder}
          />
          <source
            media='(max-width: 1024px)'
            srcSet={tabletImagePlaceholder}
          />
          <img
            src={desktopImagePlaceholder}
            alt=''
            className={cn("size-fit md:h-98.5 lg:max-w-148", imgClassNames || "")}
          />
        </picture>
      )}
      <picture style={{ display: isLoaded ? "block" : "none" }}>
        <source
          media='(max-width: 767px)'
          srcSet={mobileImage}
        />
        <source
          media='(max-width: 1024px)'
          srcSet={tabletImage}
        />
        <img
          src={desktopImage}
          alt={altText}
          onLoad={() => setIsLoaded(true)}
          onError={() => setIsLoaded(true)}
          className={cn("size-fit md:h-98.5 lg:max-w-148", imgClassNames || "")}
        />
      </picture>
    </div>
  );
}

export { ImageWithPlaceholder };
