'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      setStatus('error');
    }

    setStatus('idle');
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <AnimatePresence>
        <motion.div
          key="login-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="relative w-full max-w-md bg-black/70 border border-cyan-500 rounded-xl p-8 shadow-xl backdrop-blur-md"
        >
          <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center tracking-widest">
            Вхід
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-black border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded bg-black border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-cyan-500 text-black font-bold py-2 rounded hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Вхід...' : 'Увійти'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm pt-2 text-center">
                Невірний email або пароль.
              </p>
            )}
          </form>

          <p className="text-sm text-center mt-4 text-cyan-400">
            Ще не маєте акаунта?{' '}
            <a href="/register" className="underline hover:text-cyan-300">
              Зареєструватися
            </a>
          </p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
