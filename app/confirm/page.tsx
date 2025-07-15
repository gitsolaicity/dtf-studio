'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function ConfirmPage() {
  const [message, setMessage] = useState('Перевіряємо...');

  useEffect(() => {
    async function checkConfirmation() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (error) {
          setMessage('Сталася помилка: ' + error.message);
          return;
        }

        if (user?.email_confirmed_at) {
          setMessage('Email підтверджено! Можете увійти.');
        } else {
          setMessage('Email не підтверджено або посилання протерміноване.');
        }
      } catch (err) {
        setMessage('Помилка при перевірці підтвердження.');
      }
    }

    checkConfirmation();
  }, []);

  return (
    <div className="p-8 text-center">
      <h1 className="text-xl font-bold mb-4">Підтвердження Email</h1>
      <p>{message}</p>
    </div>
  );
}
