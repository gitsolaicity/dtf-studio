'use server';

import { supabaseAdmin } from './supabaseAdmin';

export async function registerUser(email: string, password: string) {
  try {
    // Проверяем, существует ли пользователь с таким email
    const { data: usersData, error: fetchError } = await supabaseAdmin.auth.admin.listUsers();

    if (fetchError) {
      console.error('Ошибка получения пользователей:', fetchError.message);
      return {
        success: false,
        error: 'Ошибка при проверке email.',
        alreadyExists: false,
      };
    }

    const userExists = usersData?.users?.some(
      (u) => u.email?.toLowerCase() === email.toLowerCase()
    );

    if (userExists) {
      return {
        success: false,
        error: 'Пользователь с таким email уже существует.',
        alreadyExists: true,
      };
    }

    // Email свободен — пробуем зарегистрировать
    const { error: signUpError } = await supabaseAdmin.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/login`,
      },
    });

    if (signUpError) {
      console.error('Ошибка при регистрации:', signUpError.message);
      return {
        success: false,
        error: signUpError.message,
        alreadyExists: false,
      };
    }

    return {
      success: true,
      message: 'Письмо с подтверждением отправлено.',
      alreadyExists: false,
    };
  } catch (e: any) {
    console.error('Непредвиденная ошибка:', e.message);
    return {
      success: false,
      error: 'Непредвиденная ошибка. Попробуйте позже.',
      alreadyExists: false,
    };
  }
}
