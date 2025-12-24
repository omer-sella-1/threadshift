import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

const INITIAL_COUNT = 1583;
const COUNTER_KEY = 'threadshifter:conversions';

export async function GET() {
  try {
    // Get current count from KV
    let count = await kv.get<number>(COUNTER_KEY);

    // If not set, initialize with base count
    if (count === null) {
      count = INITIAL_COUNT;
      await kv.set(COUNTER_KEY, count);
    }

    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching counter:', error);
    // Fallback to initial count if KV fails
    return NextResponse.json({ count: INITIAL_COUNT });
  }
}

export const runtime = 'edge';
export const revalidate = 0; // Don't cache
