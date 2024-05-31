'use client';
import Link from 'next/link';
// Common components
import Logo from './logo';
import SocialLinks from './social-links';
// Config
import * as appConfig from '@/config/app';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
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
                    className="text-md text-foreground/60 transition-colors hover:text-foreground/80"
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
            <p className="mt-4 text-justify text-base text-muted-foreground">
              {appConfig.footerDescription}
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between sm:flex-row">
          <div className="mt-6 md:mt-0">
            <span className="text-sm text-muted-foreground">
              © ۱۴۰۲ - تمامی حقوق برای {appConfig.appData.appName} محفوظ است.
            </span>
            <SocialLinks className="mt-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
