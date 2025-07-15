// app/api/verify/resend/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const supabaseUrl = process.env.SUPABASE_URL!;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    // Получаем пользователя
    const userRes = await fetch(`${supabaseUrl}/auth/v1/admin/users?email=${encodeURIComponent(email)}`, {
      headers: {
        apiKey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });

    if (!userRes.ok) {
      const errorText = await userRes.text();
      console.error('❌ Ошибка получения пользователя:', errorText);
      return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }

    const users = await userRes.json();
    const user = users?.users?.[0] || users?.[0];

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.email_confirmed_at) {
      return NextResponse.json({ message: 'Email уже підтверджено' });
    }

    const resendRes = await fetch(`${supabaseUrl}/auth/v1/admin/trigger-email`, {
      method: 'POST',
      headers: {
        apiKey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'signup',
        user_id: user.id,
      }),
    });

    if (!resendRes.ok) {
      const errorText = await resendRes.text();
      console.error('❌ Ошибка при отправке письма:', errorText);
      return NextResponse.json({ error: 'Failed to resend email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Лист підтвердження надіслано повторно.' });
  } catch (err) {
    console.error('❌ Unexpected error:', err);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}
