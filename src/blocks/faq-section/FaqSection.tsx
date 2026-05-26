import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";

import { faqContentData } from "./faq-data";
import { FaqItem } from "./FaqItem";

function scrollToContact() {
  const nameInput = document.getElementById("name");
  nameInput?.scrollIntoView({ behavior: "smooth", block: "center" });
  nameInput?.focus();
}

function FaqSection() {
  return (
    <section
      aria-labelledby='faq-heading'
      className='mx-auto flex max-w-[calc(100%-1.5rem)] flex-col items-center justify-center gap-12 py-12 md:max-w-[calc(100%-2rem)] md:gap-16 md:py-16 lg:py-24 xl:max-w-304'
    >
      <div className='flex flex-col items-center gap-5 text-center'>
        <h2
          id='faq-heading'
          className='text-3xl font-semibold text-neutral-900 md:text-5xl'
        >
          Frequently asked questions
        </h2>
        <p className='text-lg text-neutral-600 md:text-xl'>Choose any questions you need</p>
      </div>
      <div className='flex flex-col'>
        {faqContentData.map((faqItem, index) => (
          <FaqItem
            key={faqItem.title}
            position={faqItem.position}
            title={faqItem.title}
            content={faqItem.content}
            isLast={index === faqContentData.length - 1}
          />
        ))}
        <div className='mt-7 flex h-fit w-full flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 p-4 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] md:flex-row md:p-8'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-semibold text-pretty text-neutral-900'>
              Can&apos;t find the answer you&apos;re looking for?
            </h3>
            <p className='text-base text-neutral-600'>
              Reach out to our{" "}
              <Link
                href='#'
                variant='linkColor'
                size='lg-link'
                className='inline'
                onClick={e => {
                  e.preventDefault();
                  scrollToContact();
                }}
              >
                customer support
              </Link>{" "}
              team.
            </p>
          </div>
          <Button
            variant='primary'
            size='lg'
            className='md:max-w-34.5'
            onClick={scrollToContact}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export { FaqSection };
