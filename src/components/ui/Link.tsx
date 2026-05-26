import type { AnchorHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "../../utils/utils";

import { buttonVariants } from "./button-variants";

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants>;

function Link({ variant, size, className, children, ...rest }: LinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...rest}
    >
      {children}
    </a>
  );
}

export { Link };
