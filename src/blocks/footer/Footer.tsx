import { footerIcons, footerLinks } from "./footer-data";

import { Link } from "../../components/ui/Link";

const CURRENT_YEAR = 2026;

function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-8 py-12 md:py-16 xl:p-24'>
      {footerLinks.length > 0 && (
        <nav aria-label='Footer navigation'>
          <div className='flex items-center justify-center gap-5 lg:gap-6'>
            {footerLinks.map(({ path, key, title }) => (
              <Link
                key={key}
                href={path}
                variant='linkGray'
                size='md-link'
                className='focus:rounded focus:border focus:border-indigo-600 focus:shadow-[0_0px_0px_4px_rgba(68,76,231,0.12)]'
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <div className='flex flex-col items-center justify-center gap-4'>
        {footerIcons.length > 0 && (
          <div className='flex items-center justify-center gap-6'>
            {footerIcons.map(({ key, icon: Icon, label, href }) => (
              <Link
                key={key}
                href={href}
                variant='linkGray'
                size='icon-md'
                aria-label={label}
                target='_blank'
                rel='noopener noreferrer'
                className='p-0'
              >
                <Icon aria-hidden='true' />
              </Link>
            ))}
          </div>
        )}

        <p className='text-sm text-neutral-900'>
          &copy; {CURRENT_YEAR} Abstractly, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export { Footer };
