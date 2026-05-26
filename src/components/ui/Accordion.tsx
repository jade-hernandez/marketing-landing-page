import * as React from "react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "../../utils/utils";

interface AccordionTriggerProps extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
  className?: string;
  children: React.ReactNode;
  iconOpen: React.ReactNode;
  iconClose: React.ReactNode;
}

function Accordion({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn("flex w-full flex-col", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn("not-last:border-b", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  iconOpen,
  iconClose,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          "group flex h-fit flex-1 cursor-pointer items-start justify-between gap-4 bg-white text-start text-lg font-medium text-neutral-900 outline-none",
          className
        )}
        {...props}
      >
        {children}
        <div className='relative flex h-6 w-12 items-start justify-center pt-1'>
          <span
            aria-hidden
            className='hidden size-6 group-data-[state=open]:block'
          >
            {iconClose}
          </span>
          <span
            aria-hidden
            className='block size-6 group-data-[state=open]:hidden'
          >
            {iconOpen}
          </span>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className={cn(
        "data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden bg-white text-base text-neutral-600",
        className
      )}
      {...props}
    >
      <div className='pt-2 pr-10'>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
