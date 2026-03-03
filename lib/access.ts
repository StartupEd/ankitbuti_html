import { createHmac, timingSafeEqual } from 'crypto';

const COOKIE_NAME = 'access_granted';
const ADMIN_COOKIE_NAME = 'admin_session';
const MAX_AGE_ACCESS = 60 * 60 * 24 * 365; // 1 year
const MAX_AGE_ADMIN = 60 * 60 * 24; // 1 day

function getSecret(name: string): string {
  const secret = process.env[name];
  if (!secret || secret.length < 16) {
    throw new Error(`Missing or weak ${name}`);
  }
  return secret;
}

function sign(payload: string, secret: string): string {
  const hmac = createHmac('sha256', secret);
  hmac.update(payload);
  return hmac.digest('base64url');
}

function verify(signed: string, secret: string): { payload: string } | null {
  const i = signed.lastIndexOf('.');
  if (i === -1) return null;
  const payload = signed.slice(0, i);
  const sig = signed.slice(i + 1);
  const expected = sign(payload, secret);
  if (sig.length !== expected.length || !timingSafeEqual(Buffer.from(sig, 'base64url'), Buffer.from(expected, 'base64url'))) {
    return null;
  }
  return { payload };
}

export function createAccessCookie(): { name: string; value: string; maxAge: number } {
  const secret = getSecret('ACCESS_COOKIE_SECRET');
  const payloadJson = JSON.stringify({ allowed: true, exp: Date.now() + MAX_AGE_ACCESS * 1000 });
  const payloadB64 = Buffer.from(payloadJson, 'utf8').toString('base64url');
  const value = payloadB64 + '.' + sign(payloadB64, secret);
  return { name: COOKIE_NAME, value, maxAge: MAX_AGE_ACCESS };
}

export function verifyAccessCookie(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  try {
    const secret = getSecret('ACCESS_COOKIE_SECRET');
    const result = verify(cookieValue, secret);
    if (!result) return false;
    const payloadJson = Buffer.from(result.payload, 'base64url').toString('utf8');
    const data = JSON.parse(payloadJson);
    return data.allowed === true && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function createAdminCookie(): { name: string; value: string; maxAge: number } {
  const secret = getSecret('ACCESS_COOKIE_SECRET');
  const payloadJson = JSON.stringify({ admin: true, exp: Date.now() + MAX_AGE_ADMIN * 1000 });
  const payloadB64 = Buffer.from(payloadJson, 'utf8').toString('base64url');
  const value = payloadB64 + '.' + sign(payloadB64, secret);
  return { name: ADMIN_COOKIE_NAME, value, maxAge: MAX_AGE_ADMIN };
}

export function verifyAdminCookie(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  try {
    const secret = getSecret('ACCESS_COOKIE_SECRET');
    const result = verify(cookieValue, secret);
    if (!result) return false;
    const payloadJson = Buffer.from(result.payload, 'base64url').toString('utf8');
    const data = JSON.parse(payloadJson);
    return data.admin === true && data.exp > Date.now();
  } catch {
    return false;
  }
}

export function getAccessCookieName(): string {
  return COOKIE_NAME;
}

export function getAdminCookieName(): string {
  return ADMIN_COOKIE_NAME;
}
