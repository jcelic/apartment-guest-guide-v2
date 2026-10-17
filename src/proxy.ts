import { NextResponse, type NextRequest } from 'next/server';
import {
  SESSION_COOKIE,
  TOKEN_PATTERN,
  isSessionFresh,
  readSession,
} from '@/lib/session';

export const proxy = async (request: NextRequest) => {
  const { pathname, search } = request.nextUrl;
  const [, , segment, ...rest] = pathname.split('/');

  if (segment && rest.length === 0 && TOKEN_PATTERN.test(segment)) {
    return NextResponse.next();
  }

  const session = await readSession(request.cookies.get(SESSION_COOKIE)?.value);

  if (!session) {
    return NextResponse.redirect(new URL('/no-access', request.url));
  }

  if (!isSessionFresh(session)) {
    const recheckUrl = new URL(`/guide/${session.token}`, request.url);
    recheckUrl.searchParams.set(
      'next',
      pathname === '/' ? '/guide' : pathname + search,
    );

    return NextResponse.redirect(recheckUrl);
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/guide', request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/', '/guide/:path*'],
};
