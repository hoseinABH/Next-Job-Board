import type { Metadata } from 'next';
import localFont from 'next/font/local';
// Providers
import StoreProvider from '@/providers/store-provider';
import ThemeProvider from '@/providers/theme-provider';
import DirectionProvider from '@/providers/direction-provider';
// Configs
import appConfig from '@/config/app';
// Styles
import './globals.css';

const appFont = localFont({ src: 'MorabbaVF.ttf' });

export const metadata: Metadata = {
  title: {
    template: `%s | ${appConfig.appName}`,
    default: `${appConfig.appName}`,
  },
  description: `${appConfig.appDescription}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={appFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <DirectionProvider>
            <StoreProvider>{children}</StoreProvider>
          </DirectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
