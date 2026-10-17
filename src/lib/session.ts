export const SESSION_COOKIE = 'guest_session';

export const SESSION_COOKIE_MAX_AGE = 30 * 24 * 60 * 60;

export const TOKEN_PATTERN = /^[a-f0-9]{32}$/;

const RECHECK_AFTER_MS = 6 * 60 * 60 * 1000;

export type Session = {
  token: string;
  name: string | null;
  language: string;
  checkedAt: number;
};

const encoder = new TextEncoder();

const getKey = () => {
  const secret = process.env.GUEST_SESSION_SECRET;

  if (!secret) {
    throw new Error('GUEST_SESSION_SECRET is not set');
  }

  return crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
};

export const createSession = async (session: Session) => {
  const payload = Buffer.from(JSON.stringify(session)).toString('base64url');
  const signature = await crypto.subtle.sign(
    'HMAC',
    await getKey(),
    encoder.encode(payload),
  );

  return `${payload}.${Buffer.from(signature).toString('base64url')}`;
};

export const readSession = async (
  value: string | undefined,
): Promise<Session | null> => {
  if (!value) return null;

  const [payload, signature] = value.split('.');
  if (!payload || !signature) return null;

  const isValid = await crypto.subtle.verify(
    'HMAC',
    await getKey(),
    Buffer.from(signature, 'base64url'),
    encoder.encode(payload),
  );
  if (!isValid) return null;

  try {
    return JSON.parse(Buffer.from(payload, 'base64url').toString());
  } catch {
    return null;
  }
};

export const isSessionFresh = (session: Session) =>
  Date.now() - session.checkedAt < RECHECK_AFTER_MS;
