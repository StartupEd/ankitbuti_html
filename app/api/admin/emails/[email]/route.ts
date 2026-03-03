import { NextRequest, NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';
import { removeApprovedEmail } from '@/lib/collections';

type Params = { params: Promise<{ email: string }> };

export async function DELETE(request: NextRequest, { params }: Params) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { email } = await params;
    const decoded = decodeURIComponent(email);
    const ok = await removeApprovedEmail(decoded);
    return NextResponse.json({ ok });
  } catch (err) {
    console.error('admin email delete', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
