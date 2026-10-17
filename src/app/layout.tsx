import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import Toaster from '@/components/Toaster';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-nunito',
  display: 'swap',
});

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Metadata');

  return {
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate'),
    },
    robots: {
      index: false,
      follow: false,
    },
  };
};

const RootLayout = async ({ children }: LayoutProps<'/'>) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
