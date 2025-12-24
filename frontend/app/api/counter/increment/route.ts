import Redis from 'ioredis';
import { NextResponse } from 'next/server';

const COUNTER_KEY = 'threadshifter:conversions';

// Create Redis client
function getRedisClient() {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    throw new Error('REDIS_URL not configured');
  }
  return new Redis(redisUrl);
}

export async function POST() {
  let redis: Redis | null = null;

  try {
    redis = getRedisClient();

    // Increment counter atomically
    const newCount = await redis.incr(COUNTER_KEY);

    return NextResponse.json({ count: newCount, success: true });
  } catch (error) {
    console.error('Error incrementing counter:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to increment counter' },
      { status: 500 }
    );
  } finally {
    if (redis) {
      redis.disconnect();
    }
  }
}

export const revalidate = 0; // Don't cache
