import 'server-only';
import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, LOCALE_COOKIE_OPTIONS, isLocale } from '@/i18n/config';
import getSql from './db';
import { SESSION_COOKIE, TOKEN_PATTERN, createSession } from './session';

type Reservation = {
  guest_name: string | null;
  language: string;
  active: boolean;
};

type DeniedAccess = {
  allowed: false;
  redirectTo: '/no-access' | '/thank-you';
  language?: string;
};

type GuestAccess = { allowed: true; session: string } | DeniedAccess;

const findReservation = async (token: string): Promise<Reservation | null> => {
  if (!TOKEN_PATTERN.test(token)) return null;

  const sql = getSql();
  const rows = (await sql`
    select guest_name, language, active
    from reservations
    where token = ${token}
    limit 1
  `) as Reservation[];

  return rows[0] ?? null;
};

export const checkGuestAccess = async (token: string): Promise<GuestAccess> => {
  const reservation = await findReservation(token);

  if (!reservation) return { allowed: false, redirectTo: '/no-access' };
  if (!reservation.active) {
    return {
      allowed: false,
      redirectTo: '/thank-you',
      language: reservation.language,
    };
  }

  const session = await createSession({
    token,
    name: reservation.guest_name,
    language: reservation.language,
    checkedAt: Date.now(),
  });

  return { allowed: true, session };
};

export const denyAccess = (request: NextRequest, access: DeniedAccess) => {
  const response = NextResponse.redirect(
    new URL(access.redirectTo, request.url),
  );
  response.cookies.delete(SESSION_COOKIE);

  if (isLocale(access.language) && !request.cookies.has(LOCALE_COOKIE)) {
    response.cookies.set(LOCALE_COOKIE, access.language, LOCALE_COOKIE_OPTIONS);
  }

  return response;
};
