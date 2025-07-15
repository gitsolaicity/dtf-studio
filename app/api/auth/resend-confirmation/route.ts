// /app/api/auth/resend-confirmation/route.ts
import { NextResponse } from 'next/server';
import { supabaseServer } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email обязателен' }, { status: 400 });
    }

    const { error } = await supabaseServer.auth.resend({
      type: 'signup',
      email,
    });

    if (error) {
      console.error('[Resend Error]', error.message);
      // Чтобы не выдавать детали, сообщаем об успешной отправке даже при ошибке
      return NextResponse.json({
        message: 'Если такая почта существует — письмо отправлено.',
      });
    }

    return NextResponse.json({
      message: 'Письмо отправлено. Проверьте почту.',
    });
  } catch (e) {
    console.error('[Server Error]', e);
    return NextResponse.json({ error: 'Серверная ошибка' }, { status: 500 });
  }
}
