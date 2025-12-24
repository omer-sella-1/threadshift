import { NextResponse } from 'next/server';

export async function GET() {
  // Check if KV environment variables are set
  const envVars = {
    KV_REST_API_URL: !!process.env.KV_REST_API_URL,
    KV_REST_API_TOKEN: !!process.env.KV_REST_API_TOKEN,
    KV_REST_API_READ_ONLY_TOKEN: !!process.env.KV_REST_API_READ_ONLY_TOKEN,
    KV_URL: !!process.env.KV_URL,
  };

  return NextResponse.json({
    message: 'KV Environment Variables Check',
    variables: envVars,
    allSet: Object.values(envVars).every(v => v === true),
  });
}

export const runtime = 'edge';
