'use client';
import Link from 'next/link';
// Common components
import SocialLinks from './social-links';
import ThemeToggle from './theme-toggle';
import Logo from './logo';
// Config
import * as appConfig from '@/config/app';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container py-6">
        {/* Top Section */}
        <div className="flex items-start">
          {/* Footer Links */}
          <div className="flex items-center gap-x-14 flex-1">
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
          <div className="max-w-sm">
            <Logo />
            <p className="text-base text-muted-foreground text-justify mt-4">
              {appConfig.footerDescription}
            </p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-10">
          <div>
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
