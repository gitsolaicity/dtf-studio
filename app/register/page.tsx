'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerUser } from '@/lib/supabaseRegister'; // подключаем нашу функцию

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage('Пароли не совпадают');
      setStatus('error');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Пароль должен быть не менее 8 символов');
      setStatus('error');
      return;
    }

    setStatus('loading');

    const result = await registerUser(email, password);

    if (result.success) {
      setStatus('success');
    } else {
      setErrorMessage(result.error || 'Ошибка регистрации');
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md bg-black/80 border border-cyan-600 rounded-xl p-10 shadow-xl backdrop-blur-md">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-extrabold text-cyan-400 mb-4">
                Почта отправлена!
              </h2>
              <p className="mb-6">
                Мы отправили письмо с подтверждением на <strong>{email}</strong>.<br />
                Пожалуйста, подтвердите свой email.
              </p>
              <a
                href="/login"
                className="inline-block px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
              >
                Вернуться к входу
              </a>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleRegister}
              className="space-y-6"
            >
              <h1 className="text-4xl font-extrabold text-cyan-400 tracking-wide text-center">
                Создать аккаунт
              </h1>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-black border border-cyan-600 placeholder-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                autoComplete="email"
              />

              <input
                type="password"
                placeholder="Пароль (не менее 8 символов)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-black border border-cyan-600 placeholder-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                autoComplete="new-password"
              />

              <input
                type="password"
                placeholder="Подтвердите пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-black border border-cyan-600 placeholder-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
                autoComplete="new-password"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-cyan-500 rounded-full font-semibold text-black hover:bg-cyan-600 transition disabled:opacity-60"
              >
                {status === 'loading' ? 'Создание...' : 'Создать аккаунт'}
              </button>

              {status === 'error' && errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}

              <p className="text-center text-cyan-400">
                Уже есть аккаунт?{' '}
                <a href="/login" className="underline hover:text-cyan-300">
                  Войти
                </a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
