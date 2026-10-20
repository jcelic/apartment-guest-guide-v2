import { NextResponse, type NextRequest } from 'next/server';
import { checkGuestAccess } from '@/lib/guest';
import {
  SESSION_COOKIE,
  TOKEN_PATTERN,
  isSessionFresh,
  readSession,
  setSessionCookie,
} from '@/lib/session';

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const [, , segment, ...rest] = pathname.split('/');

  if (segment && rest.length === 0 && TOKEN_PATTERN.test(segment)) {
    return NextResponse.next();
  }

  const session = await readSession(request.cookies.get(SESSION_COOKIE)?.value);

  if (!session) {
    return NextResponse.redirect(new URL('/no-access', request.url));
  }

  const access = isSessionFresh(session)
    ? null
    : await checkGuestAccess(session.token);

  if (access && !access.allowed) {
    const response = NextResponse.redirect(
      new URL(access.redirectTo, request.url),
    );
    response.cookies.delete(SESSION_COOKIE);

    return response;
  }

  const response =
    pathname === '/'
      ? NextResponse.redirect(new URL('/guide', request.url))
      : NextResponse.next();

  if (access) {
    setSessionCookie(response, access.session);
  }

  return response;
};

export const config = {
  matcher: ['/', '/guide/:path*'],
};
