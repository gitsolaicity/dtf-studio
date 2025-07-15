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

  // Пытаемся зарегистрировать пользователя через Supabase Auth
  const { error } = await supabase.auth.signUp({
    email,
    password,
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
