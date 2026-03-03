import { NextRequest, NextResponse } from 'next/server';
import { findInvitationByKey } from '@/lib/collections';
import { isEmailApproved } from '@/lib/collections';
import { createAccessCookie } from '@/lib/access';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const key = typeof body.key === 'string' ? body.key : undefined;
    const email = typeof body.email === 'string' ? body.email : undefined;

    if (key) {
      const inv = await findInvitationByKey(key);
      if (inv) {
        const cookie = createAccessCookie();
        const res = NextResponse.json({ ok: true, redirect: '/profile' });
        res.cookies.set(cookie.name, cookie.value, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: cookie.maxAge, path: '/' });
        return res;
      }
    }

    if (email) {
      const approved = await isEmailApproved(email);
      if (approved) {
        const cookie = createAccessCookie();
        const res = NextResponse.json({ ok: true, redirect: '/profile' });
        res.cookies.set(cookie.name, cookie.value, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: cookie.maxAge, path: '/' });
        return res;
      }
    }

    return NextResponse.json({ ok: false, error: 'Invalid invitation key or email not approved.' }, { status: 401 });
  } catch (err) {
    console.error('access/verify', err);
    return NextResponse.json({ ok: false, error: 'Server error.' }, { status: 500 });
  }
}
