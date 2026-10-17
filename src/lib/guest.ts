import 'server-only';
import getSql from './db';
import { TOKEN_PATTERN } from './session';

type Reservation = {
  guest_name: string | null;
  language: string;
  active: boolean;
};

export const findReservation = async (
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
