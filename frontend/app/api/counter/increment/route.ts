import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'threadshifter:conversions';

export async function POST() {
  try {
    // Increment counter atomically
    const newCount = await kv.incr(COUNTER_KEY);

    return NextResponse.json({ count: newCount, success: true });
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to increment counter' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
export const revalidate = 0; // Don't cache
