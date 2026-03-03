import { NextRequest, NextResponse } from 'next/server';
import { createAdminCookie, getAdminCookieName } from '@/lib/access';

export async function POST(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return NextResponse.json({ ok: false, error: 'Admin not configured.' }, { status: 503 });
  }
  const body = await request.json().catch(() => ({}));
  const given = typeof body.password === 'string' ? body.password : '';
  if (given !== password) {
    return NextResponse.json({ ok: false, error: 'Invalid password.' }, { status: 401 });
  }
  const cookie = createAdminCookie();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(cookie.name, cookie.value, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: cookie.maxAge, path: '/' });
  return res;
}
