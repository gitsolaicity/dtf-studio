'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ConfirmPage() {
  const [message, setMessage] = useState('Перевіряємо підтвердження...');

  useEffect(() => {
    async function verifyEmail() {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const error = params.get('error');
      const errorCode = params.get('error_code');
      const errorDescription = params.get('error_description');

      // ✅ Если ссылка протермінована или уже использована
      if (
        error === 'access_denied' ||
        errorCode === 'otp_expired' ||
        errorDescription?.includes('expired')
      ) {
        setMessage('Це посилання вже не дійсне або протерміноване. Спробуйте повторно надіслати лист.');
        // Убираем хэш из URL
        history.replaceState(null, '', window.location.pathname);
        return;
      }

      const access_token = params.get('access_token');
      const refresh_token = params.get('refresh_token');

      if (!access_token || !refresh_token) {
        setMessage('Невірне або застаріле посилання.');
        return;
      }

      const { error: sessionError } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (sessionError) {
        setMessage('Не вдалося встановити сесію: ' + sessionError.message);
        return;
      }

      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError || !user) {
        setMessage('Не вдалося отримати дані користувача.');
        return;
      }

      if (user.email_confirmed_at) {
        setMessage('Дякуємо! Ваш Email підтверджено. Переходимо до входу...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 4000);
      } else {
        setMessage('Email ще не підтверджено.');
      }
    }

    verifyEmail();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="max-w-md text-center bg-black/60 border border-cyan-500 rounded-xl p-8 shadow-xl backdrop-blur-md">
        <h1 className="text-2xl font-bold mb-4 text-cyan-400">Підтвердження Email</h1>
        <p className="text-md mb-6">{message}</p>
        <a
          href="/login"
          className="inline-block px-6 py-2 bg-cyan-500 text-black font-semibold rounded hover:bg-cyan-400 transition"
        >
          Перейти до входу
        </a>
      </div>
    </div>
  );
}
