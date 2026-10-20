import 'server-only';
import getSql from './db';
import { TOKEN_PATTERN, createSession } from './session';

type Reservation = {
  guest_name: string | null;
  language: string;
  active: boolean;
};

type GuestAccess =
  | { allowed: true; session: string }
  | { allowed: false; redirectTo: '/no-access' | '/thank-you' };

const findReservation = async (
  token: string,
): Promise<Reservation | null> => {
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
  if (!reservation.active) return { allowed: false, redirectTo: '/thank-you' };

  const session = await createSession({
    token,
    name: reservation.guest_name,
    language: reservation.language,
    checkedAt: Date.now(),
  });

  return { allowed: true, session };
};
