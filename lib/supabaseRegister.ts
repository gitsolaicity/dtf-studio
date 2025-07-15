// lib/supabaseRegister.ts
'use server';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function registerUser(email: string, password: string) {
  // Проверяем, есть ли уже пользователь с таким email
  const { data: existingUser, error: checkError } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single();

  if (existingUser) {
    return {
      success: false,
      error: 'Пользователь с таким email уже существует.',
      alreadyExists: true,
    };
  }

  // Формируем ссылку для редиректа после подтверждения
  const redirectTo = `${process.env.NEXT_PUBLIC_SITE_URL}/confirm?ts=${Date.now()}`;

  // Пытаемся зарегистрировать пользователя через Supabase Auth с параметром emailRedirectTo
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) {
    return {
      success: false,
      error: error.message,
    };
  }

  return {
    success: true,
    message: 'Письмо для подтверждения отправлено.',
  };
}
