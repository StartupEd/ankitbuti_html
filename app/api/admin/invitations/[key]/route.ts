import { NextRequest, NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';
import { setInvitationEnabled, deleteInvitation } from '@/lib/collections';

type Params = { params: Promise<{ key: string }> };

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { key } = await params;
    const decoded = decodeURIComponent(key);
    const body = await request.json().catch(() => ({}));
    const enabled = typeof body.enabled === 'boolean' ? body.enabled : true;
    await setInvitationEnabled(decoded, enabled);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('admin invitation update', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const { key } = await params;
    const decoded = decodeURIComponent(key);
    const ok = await deleteInvitation(decoded);
    return NextResponse.json({ ok });
  } catch (err) {
    console.error('admin invitation delete', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
