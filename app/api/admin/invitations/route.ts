import { NextRequest, NextResponse } from 'next/server';
import { isAdminRequest } from '@/lib/adminAuth';
import { listInvitations, upsertInvitation } from '@/lib/collections';

export async function GET(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const list = await listInvitations();
    return NextResponse.json({ invitations: list });
  } catch (err) {
    console.error('admin invitations list', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!isAdminRequest(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await request.json().catch(() => ({}));
    const key = typeof body.key === 'string' ? body.key.trim() : '';
    const enabled = typeof body.enabled === 'boolean' ? body.enabled : true;
    if (!key) {
      return NextResponse.json({ error: 'key required' }, { status: 400 });
    }
    const inv = await upsertInvitation(key, enabled);
    return NextResponse.json({ invitation: inv });
  } catch (err) {
    console.error('admin invitations create', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
