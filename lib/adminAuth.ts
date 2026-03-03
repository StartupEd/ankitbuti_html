import { NextRequest } from 'next/server';
import { verifyAdminCookie, getAdminCookieName } from './access';

export function isAdminRequest(request: NextRequest): boolean {
  const cookie = request.cookies.get(getAdminCookieName())?.value;
  return verifyAdminCookie(cookie);
}
