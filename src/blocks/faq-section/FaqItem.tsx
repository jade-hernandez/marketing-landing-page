import * as Accordion from "@radix-ui/react-accordion";

import { AccordionTrigger, AccordionContent } from "../../components/ui/Accordion";

import { IconFaqClose } from "./icons/FaqCloseIcon";
import { IconFaqOpen } from "./icons/FaqOpenIcon";

type FaqItemProps = {
  position: number;
  title: string;
  content: string;
  isLast?: boolean;
};

function FaqItem({ position, title, content, isLast = false }: FaqItemProps) {
  return (
    <>
      <Accordion.Root
        className='h-fit w-full'
        type='single'
        defaultValue={`item-${position}`}
        collapsible
      >
        <Accordion.Item value={`item-${position}`}>
          <AccordionTrigger
            iconOpen={<IconFaqOpen />}
            iconClose={<IconFaqClose />}
          >
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </Accordion.Item>
      </Accordion.Root>

      {!isLast && <hr className='my-7 h-px border-neutral-300' />}
    </>
  );
}

export { FaqItem };
