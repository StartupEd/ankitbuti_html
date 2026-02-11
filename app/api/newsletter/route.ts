import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';

const SUBSCRIBERS_COLLECTION = 'subscribers';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const domain = typeof body?.domain === 'string' ? body.domain : request.headers.get('referer') ?? '';

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const db = await getDb();
    const collection = db.collection(SUBSCRIBERS_COLLECTION);

    const existing = await collection.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ message: 'You are already on the list. Thank you!' });
    }

    await collection.insertOne({
      email: email.toLowerCase(),
      domain: domain || undefined,
      createdAt: new Date(),
      source: 'newsletter',
    });

    return NextResponse.json({ message: 'Successfully added to waitlist' });
  } catch (err) {
    console.error('Newsletter signup error:', err);
    return NextResponse.json(
      { message: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
