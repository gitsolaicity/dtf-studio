// /app/api/auth/resend-confirmation/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email обовʼязковий' }, { status: 400 });
    }

    const { error } = await supabaseServer.auth.resend({
      type: 'signup',
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/confirm?ts=${Date.now()}`
      }
    });

    if (error) {
      console.error('[Resend Error]', error.message);
      return NextResponse.json({
        message: 'Якщо така пошта існує — лист надіслано.',
      });
    }

    return NextResponse.json({
      message: 'Лист надіслано. Перевірте пошту.',
    });
  } catch (e) {
    console.error('[Server Error]', e);
    return NextResponse.json({ error: 'Серверна помилка' }, { status: 500 });
  }
}
