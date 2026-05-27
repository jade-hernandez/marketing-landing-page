import { useState } from "react";

type ImageWithPlaceholderProps = {
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
            className='size-fit md:h-98.5 lg:max-w-148'
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
          className='size-fit'
        />
      </picture>
    </div>
  );
}

export { ImageWithPlaceholder };
