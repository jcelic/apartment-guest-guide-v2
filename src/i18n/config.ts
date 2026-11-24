export const locales = ['en', 'hr', 'de', 'it', 'pl', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const LOCALE_COOKIE = 'locale';

export const LOCALE_COOKIE_OPTIONS = {
  path: '/',
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 365,
} as const;

export const localeNames: Record<Locale, string> = {
  en: 'English',
  hr: 'Hrvatski',
  de: 'Deutsch',
  it: 'Italiano',
  pl: 'Polski',
  fr: 'Français',
};

export const isLocale = (value: string | undefined): value is Locale =>
  locales.includes(value as Locale);
