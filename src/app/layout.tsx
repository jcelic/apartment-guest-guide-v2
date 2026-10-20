import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';
import Toaster from '@/components/Toaster';
import { nunito } from './fonts';
import './globals.css';

const CLIENT_NAMESPACES = [
  'Checklist',
  'Common',
  'DoorCodes',
  'Error',
  'ExploreList',
  'LanguageMenu',
  'Lightbox',
  'Photos',
  'QuickActions',
  'Share',
  'StepCarousel',
] as const;

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('Metadata');

  return {
    title: {
      default: t('defaultTitle'),
      template: t('titleTemplate'),
    },
    description: t('description'),
    openGraph: {
      title: t('shareTitle'),
      description: t('description'),
      siteName: 'Apartment Matea',
      type: 'website',
    },
    robots: {
      index: false,
      follow: false,
    },
  };
};

const RootLayout = async ({ children }: LayoutProps<'/'>) => {
  const locale = await getLocale();
  const messages = await getMessages();
  const clientMessages = Object.fromEntries(
    CLIENT_NAMESPACES.map((namespace) => [namespace, messages[namespace]]),
  );

  return (
    <html
      lang={locale}
      className={`${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={clientMessages}>
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
