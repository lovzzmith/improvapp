import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import WaitlistEmail from '@/models/WaitlistEmail';

const MONGODB_URI = process.env.MONGODB_URI!;

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  await mongoose.connect(MONGODB_URI);

  try {
    await WaitlistEmail.create({ email });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Email already registered or server error' }, { status: 400 });
  }
} 