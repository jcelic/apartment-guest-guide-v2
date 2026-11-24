import { NextResponse, type NextRequest } from 'next/server';
import { checkGuestAccess, denyAccess } from '@/lib/guest';
import {
  SESSION_COOKIE,
  TOKEN_PATTERN,
  isSessionFresh,
  readSession,
  setSessionCookie,
} from '@/lib/session';

const openGuestLink = async (request: NextRequest, token: string) => {
  const access = await checkGuestAccess(token);

  if (!access.allowed) {
    return denyAccess(request, access);
  }

  const response = NextResponse.redirect(new URL('/guide', request.url));
  setSessionCookie(response, access.session);

  return response;
};

export const proxy = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const [, , segment, ...rest] = pathname.split('/');

  if (segment && rest.length === 0 && TOKEN_PATTERN.test(segment)) {
    return openGuestLink(request, segment);
  }

  const session = await readSession(request.cookies.get(SESSION_COOKIE)?.value);

  if (!session) {
    return NextResponse.redirect(new URL('/no-access', request.url));
  }

  const access = isSessionFresh(session)
    ? null
    : await checkGuestAccess(session.token);

  if (access && !access.allowed) {
    return denyAccess(request, access);
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
