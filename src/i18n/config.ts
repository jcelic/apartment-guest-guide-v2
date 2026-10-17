export const locales = ['en', 'hr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'locale';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hr: 'Hrvatski',
};

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);
