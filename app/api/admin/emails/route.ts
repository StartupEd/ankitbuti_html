import { NextRequest, NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';
import { listApprovedEmails, addApprovedEmail } from '@/lib/collections';

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const list = await listApprovedEmails();
    return NextResponse.json({ emails: list });
  } catch (err) {
    console.error('admin emails list', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }
    const added = await addApprovedEmail(email);
    return NextResponse.json({ email: added });
  } catch (err) {
    console.error('admin emails add', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
