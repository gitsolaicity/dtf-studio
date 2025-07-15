'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react'; // иконки, можно заменить на свои

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCode, setErrorCode] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [status, setStatus] = useState<'idle' | 'loading'>('idle');
  const router = useRouter();

  const [showLoginPassword, setShowLoginPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorCode(null);
    setResendStatus('idle');

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push('/dashboard');
    } else {
      if (res?.error === 'EMAIL_NOT_CONFIRMED') {
        setErrorCode('EMAIL_NOT_CONFIRMED');
      } else {
        setErrorCode('INVALID_CREDENTIALS');
      }
    }

    setStatus('idle');
  };

  const handleResendVerification = async () => {
    if (!email) {
      alert('Введіть email для повторної відправки листа.');
      return;
    }

    setResendStatus('idle');

    try {
      const res = await fetch('/api/auth/resend-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setResendStatus('sent');
      } else {
        console.error('Resend error:', data);
        setResendStatus('error');
      }
    } catch (err) {
      console.error('Unexpected resend error:', err);
      setResendStatus('error');
    }
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
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              className="w-full px-4 py-2 rounded bg-black border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />

            <div className="relative">
  <input
    type={showLoginPassword ? 'text' : 'password'}
    placeholder="Пароль"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full px-4 py-2 rounded bg-black border border-cyan-700 placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition pr-12"
    autoComplete="current-password"
  />
  <button
    type="button"
    onClick={() => setShowLoginPassword(!showLoginPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-300"
    tabIndex={-1}
  >
    {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>


            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-cyan-500 text-black font-bold py-2 rounded hover:bg-cyan-400 transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Вхід...' : 'Увійти'}
            </button>

            {errorCode === 'INVALID_CREDENTIALS' && (
              <p className="text-red-500 text-sm pt-2 text-center">
                Невірний email або пароль.
              </p>
            )}

            {errorCode === 'EMAIL_NOT_CONFIRMED' && (
              <div className="text-orange-500 text-sm pt-2 text-center space-y-2">
                <p>Пошта не підтверджена.</p>
                <button
                  onClick={handleResendVerification}
                  className="underline text-cyan-400 hover:text-cyan-300"
                  type="button"
                >
                  Надіслати листа повторно
                </button>
                {resendStatus === 'sent' && (
                  <p className="text-green-500 text-xs">Лист відправлено успішно.</p>
                )}
                {resendStatus === 'error' && (
                  <p className="text-red-400 text-xs">Не вдалося надіслати листа.</p>
                )}
              </div>
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
