import 'server-only';

export const WIFI_NETWORK = 'Example-WiFi';
export const WIFI_PASSWORD = 'example-password';

export const DOOR_CODES = {
  building: { prefix: '00', code: '0000' },
  lockbox: '0000',
};

export type DoorCodes = typeof DOOR_CODES;
