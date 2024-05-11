'use client';
import Link from 'next/link';
// Common components
import ThemeToggle from './theme-toggle';
import SocialLinks from './social-links';
import Logo from './logo';
// Config
import * as appConfig from '@/config/app';



export default function Footer() {
  return (
    <footer className="w-full border-t bg-card">
      <div className="container py-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Footer Links */}
          <div className="flex flex-wrap items-center gap-y-6 gap-x-14 flex-1">
            {appConfig.footerLinks.map((footerCol) => (
              <ul key={footerCol.id} className="flex flex-col space-y-4">
                <span className="font-semibold">{footerCol.title}</span>
                {footerCol.items.map((navItem) => (
                  <Link
                    key={navItem.id}
                    href={navItem.href}
                    className="text-md transition-colors hover:text-foreground/80 text-foreground/60"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </ul>
            ))}
          </div>
          {/* Footer Description */}
          <div className="max-w-sm mt-8 lg:mt-auto">
            <Logo />
            <p className="text-base text-muted-foreground text-justify mt-4">
              {appConfig.footerDescription}
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-10 flex-col-reverse sm:flex-row">
          <div className="mt-6 md:mt-0">
            <span className="text-sm text-muted-foreground">
              © ۱۴۰۲ - تمامی حقوق برای {appConfig.appData.appName} محفوظ است.
            </span>
            <SocialLinks className="mt-2" />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
