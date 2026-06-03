import { Button } from "../../components/ui/Button";
import { CheckIcon } from "../../components/icons/CheckIcon";
import { ImageWithPlaceholder } from "../../components/image-with-placeholder/imageWithPlaceholder";
import { Toast } from "../../components/ui/Toast";

import NewsletterDesktop from "./images/newsletter-image-desktop.webp";
import NewsletterTablet from "./images/newsletter-image-tablet.webp";
import NewsletterMobile from "./images/newsletter-image-mobile.webp";
import {
  NEWSLETTER_IMAGE_DESKTOP_BLUR,
  NEWSLETTER_IMAGE_MOBILE_BLUR,
  NEWSLETTER_IMAGE_TABLET_BLUR
} from "./images/blur-data";

import { useNewsletterForm } from "./useNewsletterForm";
import { cn } from "../../utils/utils";

const bulletPoints = [
  "Exclusive access to new abstract images and collections",
  "Unlock special promotions only for subscribers",
  "Regular doses of artistic inspiration"
];

function NewsletterSection() {
  const { email, isLoading, error, toast, setEmail, setToast, submitNewsletterForm } =
    useNewsletterForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitNewsletterForm();
  };

  return (
    <>
      {toast && (
        <div className='fixed top-6 left-1/2 z-50 -translate-x-1/2'>
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        </div>
      )}
      <section
        aria-labelledby='newsletter-heading'
        className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-4 py-12 md:max-w-[calc(100%-2rem)] md:gap-8 md:py-16 xl:flex-row xl:py-24'
      >
        <div className='flex flex-col gap-12 xl:max-w-148'>
          <div className='flex flex-col gap-8 md:gap-16'>
            <h2
              id='newsletter-heading'
              className='text-3xl font-semibold text-neutral-900 md:text-5xl'
            >
              Get the finest curated abstracts delivered weekly to your inbox
            </h2>
            <ul className='flex flex-col gap-5'>
              {bulletPoints.map(bullet => (
                <li
                  key={bullet}
                  className='flex items-center gap-3 text-lg text-neutral-600'
                >
                  <CheckIcon />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className='flex w-full flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4'
          >
            <div className='flex w-full flex-col gap-2 md:max-w-83.5'>
              <label
                htmlFor='newsletter-email'
                className='sr-only'
              >
                Email address
              </label>
              <input
                id='newsletter-email'
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
                disabled={isLoading}
                aria-invalid={!!error}
                aria-describedby={error ? "newsletter-email-error" : undefined}
                className={cn(
                  "w-full rounded-lg border bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-500 outline-none placeholder:text-neutral-500 focus:text-neutral-900 focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)] disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
                  error ? "border-red-500" : "border-neutral-200"
                )}
              />
              {error && (
                <span
                  id='newsletter-email-error'
                  className='text-sm text-red-500'
                >
                  {error}
                </span>
              )}
            </div>
            <Button
              type='submit'
              variant='primary'
              size='md'
              disabled={isLoading}
              className='order-4 text-sm md:order-3 md:w-auto'
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
            <span className='order-3 text-base text-neutral-600 md:order-4'>
              We only send you the best! No spam.
            </span>
          </form>
        </div>
        <div className='overflow-hidden rounded-lg md:max-w-176'>
          <ImageWithPlaceholder
            imgClassNames='h-72 md:h-152 xl:size-full'
            altText='Abstract art newsletter preview'
            images={{
              mobileImagePlaceholder: NEWSLETTER_IMAGE_MOBILE_BLUR,
              tabletImagePlaceholder: NEWSLETTER_IMAGE_TABLET_BLUR,
              desktopImagePlaceholder: NEWSLETTER_IMAGE_DESKTOP_BLUR,
              mobileImage: NewsletterMobile,
              tabletImage: NewsletterTablet,
              desktopImage: NewsletterDesktop
            }}
          />
        </div>
      </section>
    </>
  );
}

export { NewsletterSection };
