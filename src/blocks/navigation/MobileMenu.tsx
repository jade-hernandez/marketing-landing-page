import { useEffect, useRef } from "react";

import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";

import { CloseIcon } from "./icons/CloseIcon";
import { NavLogo } from "./icons/NavLogo";

import { Portal } from "../../components/ui/Portal";
import { navLinks } from "./navigation";

import { useFocusTrap } from "../../hooks/useFocusTrap";
import { cn } from "../../utils/utils";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const headerId = "mobile-menu-header";
  const pathname = window.location.pathname;

  useFocusTrap(menuRef as React.RefObject<HTMLElement>, isOpen);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      document.getElementById("page-body")?.classList.add("blur-sm", "brightness-90");
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
      document.getElementById("page-body")?.classList.remove("blur-sm", "brightness-90");
    };
  }, [isOpen, onClose]);

  return (
    <Portal>
      <div
        id='mobile-menu'
        role='dialog'
        aria-modal='true'
        aria-labelledby={headerId}
        className={cn(
          "fixed left-0 z-50 lg:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={onClose}
          aria-hidden='true'
          className={cn(
            "fixed inset-0 bg-black/50 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          ref={menuRef}
          className={cn(
            "fixed inset-y-0 left-0 z-50 flex w-fit min-w-89.75 flex-col gap-6 bg-white p-4 pt-8 transition-transform duration-300 ease-in-out",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className='flex items-center justify-between'>
            <h2
              id={headerId}
              className='sr-only'
            >
              Main navigation menu
            </h2>
            <NavLogo aria-hidden='true' />
            <Button
              variant='linkGray'
              size='icon-md'
              onClick={onClose}
              aria-label='Close mobile menu'
              className='w-fit focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)]'
            >
              <CloseIcon />
            </Button>
          </div>

          <nav
            role='navigation'
            aria-label='Mobile navigation'
            className={cn(
              "flex flex-1 flex-col gap-2 transition-all duration-300",
              isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            )}
            style={{ transitionDelay: isOpen ? "150ms" : "0ms" }}
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  variant='linkGray'
                  size='lg-link'
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "justify-start p-3",
                    isActive
                      ? "bg-neutral-50 text-neutral-900"
                      : "hover:bg-neutral-50 hover:text-neutral-900 focus:bg-neutral-50"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className='flex flex-col gap-4'>
            <Button
              variant='secondary'
              size='lg'
              onClick={onClose}
            >
              Learn more
            </Button>
            <Button
              variant='primary'
              size='lg'
              onClick={onClose}
            >
              Try it out
            </Button>
          </div>
        </div>
      </div>
    </Portal>
  );
}

export { MobileMenu };
