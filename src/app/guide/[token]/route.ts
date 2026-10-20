import { NextResponse, type NextRequest } from 'next/server';
import { checkGuestAccess } from '@/lib/guest';
import { SESSION_COOKIE, setSessionCookie } from '@/lib/session';

const getNextPath = (request: NextRequest) => {
  const next = request.nextUrl.searchParams.get('next');

  return next?.startsWith('/guide') ? next : '/guide';
};

export const GET = async (
  request: NextRequest,
  ctx: RouteContext<'/guide/[token]'>,
) => {
  const { token } = await ctx.params;
  const access = await checkGuestAccess(token);

  if (!access.allowed) {
    const response = NextResponse.redirect(
      new URL(access.redirectTo, request.url),
    );
    response.cookies.delete(SESSION_COOKIE);

    return response;
  }

  const response = NextResponse.redirect(
    new URL(getNextPath(request), request.url),
  );
  setSessionCookie(response, access.session);

  return response;
};
