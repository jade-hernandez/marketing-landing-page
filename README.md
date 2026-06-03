# Marketing Landing Page

A responsive marketing landing page built as part of the [GreatFrontEnd Projects](https://www.greatfrontend.com/projects/challenges/marketing-landing-page) challenge series.

## Live Site

[Marketing Landing Page](https://marketing-landing-page-lake.vercel.app/)

## Brief

This project is part of a GreatFrontEnd challenge that focuses on assembling previously built sections into a complete, production-ready marketing landing page. The goal is to integrate a Navbar, Hero Section, Logo Marquee, Features Section, Pricing Tiers, FAQ Section, Newsletter Section, Contact Section, and Footer into a cohesive page while respecting layout rules, responsive behavior, and design fidelity.

## Features

- Responsive image loading with blur placeholders
  - Custom `ImageWithPlaceholder` component that handles image loading state and applies a blur effect until the image is fully loaded, enhancing perceived performance and providing a smoother visual experience.
- Newsletter subscription form with client-side validation and API submission
- Contact form with validation, submitted to the GreatFrontEnd API endpoint
- Pricing tiers with monthly/annual billing toggle
- CSS-only logo marquee animation with `prefers-reduced-motion` support
- FAQ accordion with Radix UI
- Sticky navbar with scroll-aware background
- Responsive mobile menu with focus trap and keyboard navigation
- Shared component architecture — `Button`, `Toast`, `CheckIcon` and others reused across sections
- Care for A11y — semantic HTML, ARIA attributes, WAI-ARIA patterns

## Stack

- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Radix UI** — Accordion primitive
- **Vite** — No SSR or complex routing needed here — Vite is the straightforward choice.
- **CVA** — To manage component variants in a structured way.
- **clsx** + **tailwind-merge** — To prevent CSS precedence issues.

## Project Structure

```
src/
├── blocks/
│   ├── contact-section/               # Contact form, success state, form logic
│   ├── convenience-features-section/  # Side image + feature cards
│   ├── faq-section/                   # FAQ accordion + contact CTA
│   ├── footer/                        # Footer with social icons
│   ├── hero-section/                  # Hero with responsive image
│   ├── logo-marquee/                  # CSS-only animated logo strip
│   ├── navigation/                    # Navbar and mobile menu
│   ├── newsletter-section/            # Newsletter form with API submission
│   └── pricing-section/              # Pricing tiers with billing toggle
├── components/
│   ├── feature-card/                  # Shared feature card component
│   ├── icons/                         # Shared icon components (CheckIcon, etc.)
│   ├── image-with-placeholder/        # Blur placeholder image component
│   └── ui/                            # Badge, Button, Link, Toast, Textarea, SegmentedControl, Accordion
├── hooks/                             # useMediaQuery, useFocusTrap
└── utils/                             # cn(), validateEmail(), types
```

## Getting Started

```bash
pnpm install # install dependencies
pnpm dev     # start development server
pnpm lint    # run linters
pnpm format  # run code formatter
pnpm build   # build for production
```

## Code Conventions

- **Named exports** via `export { }` at the bottom of each file.
- **`type`** over `interface` for all type definitions.
- **No `I` or `T` prefixes** on type names.
- **kebab-case** for folders and `.ts` files.
- **camelCase** for hooks.
- **PascalCase** for `.tsx` component files
