import Redis from 'ioredis';
import { NextResponse } from 'next/server';

const INITIAL_COUNT = 1583;
const COUNTER_KEY = 'threadshifter:conversions';

// Create Redis client
function getRedisClient() {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    throw new Error('REDIS_URL not configured');
  }
  return new Redis(redisUrl);
}

export async function GET() {
  let redis: Redis | null = null;

  try {
    redis = getRedisClient();

    // Get current count from Redis
    const countStr = await redis.get(COUNTER_KEY);
    let count = countStr ? parseInt(countStr) : null;

    // If not set, initialize with base count
    if (count === null) {
      count = INITIAL_COUNT;
      await redis.set(COUNTER_KEY, count.toString());
    }

    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching counter:', error);
    // Fallback to initial count if Redis fails
    return NextResponse.json({ count: INITIAL_COUNT });
  } finally {
    if (redis) {
      redis.disconnect();
    }
  }
}

export const revalidate = 0; // Don't cache
