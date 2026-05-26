import { useEffect, useState } from "react";

import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";

import { HamburgerIcon } from "./icons/HamburgerIcon";
import { NavLogo } from "./icons/NavLogo";

import { MobileMenu } from "./MobileMenu";
import { navLinks } from "./navigation";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { cn } from "../../utils/utils";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const breakpoint = useMediaQuery();

  const pathname = window.location.pathname;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-[background-color,backdrop-filter,box-shadow] duration-300",
        isScrolled ? "bg-white/80 shadow-sm backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav
        role='navigation'
        aria-label='Main navigation'
        className='mx-auto flex w-full max-w-[calc(100%-2rem)] items-center justify-between py-4.5 lg:gap-12 lg:py-3 xl:max-w-304 xl:gap-24'
      >
        <div className='h-8 w-28'>
          <NavLogo />
        </div>
        <div className='flex items-center justify-center gap-24 xl:w-full xl:justify-between'>
          {breakpoint === "desktop" && (
            <>
              <div className='flex items-center gap-8'>
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    variant='linkGray'
                    size='lg-link'
                    aria-current={pathname === href ? "page" : undefined}
                    className={pathname === href ? "text-neutral-900" : ""}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <div className='flex items-center gap-4'>
                <Button
                  variant='secondary'
                  size='md'
                >
                  Learn more
                </Button>
                <Button
                  variant='primary'
                  size='md'
                >
                  See pricing
                </Button>
              </div>
            </>
          )}
          {breakpoint !== "desktop" && (
            <Button
              variant='linkGray'
              size='icon-md'
              onClick={() => setIsOpen(!isOpen)}
              aria-controls='mobile-menu'
              aria-label='Toggle mobile menu'
              aria-expanded={isOpen}
              className='size-5 p-0'
            >
              <HamburgerIcon />
            </Button>
          )}
        </div>
        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </nav>
    </header>
  );
}

export { Navbar };
