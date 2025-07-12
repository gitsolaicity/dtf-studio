'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // В будущем тут будет реальная проверка
    if (email === 'admin@example.com' && password === '123456') {
      router.push('/dashboard'); // В будущем - кабинет
    } else {
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      <div className="relative w-full max-w-md bg-black/70 border border-cyan-500 rounded-xl p-8 shadow-xl backdrop-blur-md">

        <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center tracking-widest">
          Вход
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
            className="w-full bg-cyan-500 text-black font-bold py-2 rounded hover:bg-cyan-400 transition"
          >
            Войти
          </button>

          {status === 'error' && (
            <p className="text-red-500 text-sm pt-2 text-center">
              Неверный email или пароль.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
