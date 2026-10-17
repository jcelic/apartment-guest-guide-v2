import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { SESSION_COOKIE, readSession } from '@/lib/session';
import { LOCALE_COOKIE, defaultLocale, isLocale } from './config';

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const session = await readSession(cookieStore.get(SESSION_COOKIE)?.value);
  const locale =
    [cookieStore.get(LOCALE_COOKIE)?.value, session?.language].find(isLocale) ??
    defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
