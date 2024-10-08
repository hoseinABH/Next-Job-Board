'use client';
import Link from 'next/link';
// Common components
import Logo from './logo';
import SocialLinks from './social-links';
// Config
import * as appConfig from '@/config/app';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary py-4 text-secondary-foreground sm:py-12">
      <div className="container py-6">
        {/* Top Section */}
        <div className="flex flex-col items-center lg:flex-row">
          {/* Footer Links */}
          <div className="flex flex-1 flex-wrap items-center gap-x-14 gap-y-6">
            {appConfig.footerLinks.map((footerCol) => (
              <ul key={footerCol.id} className="flex flex-col space-y-4">
                <span className="font-semibold">{footerCol.title}</span>
                {footerCol.items.map((navItem) => (
                  <Link
                    key={navItem.id}
                    href={navItem.href}
                    className="text-sm text-secondary-foreground/80 transition-colors"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </ul>
            ))}
          </div>
          {/* Footer Description */}
          <div className="mt-8 max-w-sm lg:mt-auto">
            <Logo />
            <p className="text-md mt-4 text-right leading-7 text-secondary-foreground/80">
              {appConfig.footerDescription}
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between sm:flex-row">
          <div className="mt-6 md:mt-0">
            <span className="text-sm text-secondary-foreground/80">
              © ۱۴۰۲ - تمامی حقوق برای {appConfig.appData.appName} محفوظ است.
            </span>
            <SocialLinks className="mt-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
