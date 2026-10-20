'use client';

import { useSyncExternalStore } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import ErrorCard from '@/components/ErrorCard';
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  type Locale,
} from '@/i18n/config';
import { nunito } from './fonts';
import './globals.css';

type GlobalErrorProps = {
  error: unknown;
  retry: () => void;
};

const errorMessages: Record<
  Locale,
  { pageTitle: string; title: string; text: string; retry: string }
> = {
  en: {
    pageTitle: 'Something went wrong',
    title: 'Something went wrong',
    text: "It's usually temporary. Please try again in a moment.",
    retry: 'Try again',
  },
  hr: {
    pageTitle: 'Nešto je pošlo po zlu',
    title: 'Nešto je pošlo po zlu',
    text: 'To je obično privremeno. Pokušajte ponovno za trenutak.',
    retry: 'Pokušajte ponovno',
  },
  de: {
    pageTitle: 'Etwas ist schiefgelaufen',
    title: 'Etwas ist schiefgelaufen',
    text: 'Das ist meist nur vorübergehend. Bitte versuchen Sie es gleich noch einmal.',
    retry: 'Erneut versuchen',
  },
  it: {
    pageTitle: 'Qualcosa è andato storto',
    title: 'Qualcosa è andato storto',
    text: 'Di solito è un problema temporaneo. Riprovate tra poco.',
    retry: 'Riprova',
  },
  pl: {
    pageTitle: 'Coś poszło nie tak',
    title: 'Coś poszło nie tak',
    text: 'To zwykle chwilowy problem. Prosimy spróbować ponownie za moment.',
    retry: 'Spróbuj ponownie',
  },
};

const subscribe = () => () => {};

const getBrowserLocale = (): Locale => {
  const cookie = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${LOCALE_COOKIE}=`))
    ?.split('=')[1];

  if (isLocale(cookie)) {
    return cookie;
  }

  const language = navigator.language.slice(0, 2);

  return isLocale(language) ? language : defaultLocale;
};

const getServerLocale = () => defaultLocale;

const GlobalError = ({ retry }: GlobalErrorProps) => {
  const locale = useSyncExternalStore(
    subscribe,
    getBrowserLocale,
    getServerLocale,
  );
  const messages = errorMessages[locale];

  return (
    <html
      lang={locale}
      className={`${nunito.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <title>{messages.pageTitle}</title>
        <NextIntlClientProvider locale={locale} messages={{ Error: messages }}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorCard retry={retry} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default GlobalError;
