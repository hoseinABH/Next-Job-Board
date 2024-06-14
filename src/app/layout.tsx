import localFont from 'next/font/local';
// Providers
import DirectionProvider from '@/providers/direction-provider';
// Common components
import { Toaster } from '@/components/ui/toaster';
// Configs
import * as appConfig from '@/config/app';
// Types
import type { Metadata, Viewport } from 'next';
// Styles
import '@/app/globals.css';

const appFont = localFont({ src: 'IranSans.woff' });

export const metadata: Metadata = {
  title: {
    template: `%s | ${appConfig.appData.appName}`,
    default: `${appConfig.appData.appName}`,
  },
  description: `${appConfig.appData.appDescription}`,
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body className={appFont.className}>
        <DirectionProvider>
          {children}
          <Toaster />
        </DirectionProvider>
      </body>
    </html>
  );
}
