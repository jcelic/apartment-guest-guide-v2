import { NextResponse, type NextRequest } from 'next/server';
import { findReservation } from '@/lib/guest';
import {
  SESSION_COOKIE,
  SESSION_COOKIE_MAX_AGE,
  createSession,
} from '@/lib/session';

const getNextPath = (request: NextRequest) => {
  const next = request.nextUrl.searchParams.get('next');

  return next?.startsWith('/guide') ? next : '/guide';
};

export const GET = async (
  request: NextRequest,
  ctx: RouteContext<'/guide/[token]'>,
) => {
  const { token } = await ctx.params;
  const reservation = await findReservation(token);

  if (!reservation?.active) {
    const response = NextResponse.redirect(
      new URL(reservation ? '/thank-you' : '/no-access', request.url),
    );
    response.cookies.delete(SESSION_COOKIE);

    return response;
  }

  const session = await createSession({
    token,
    name: reservation.guest_name,
    language: reservation.language,
    checkedAt: Date.now(),
  });

  const response = NextResponse.redirect(
    new URL(getNextPath(request), request.url),
  );
  response.cookies.set(SESSION_COOKIE, session, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_COOKIE_MAX_AGE,
  });

  return response;
};
