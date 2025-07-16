'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Info } from 'lucide-react';

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
    if (!email) return alert('Введіть email для повторної відправки листа.');

    try {
      const res = await fetch('/api/auth/resend-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      setResendStatus(res.ok ? 'sent' : 'error');
    } catch {
      setResendStatus('error');
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="login-form"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative w-full bg-[#111111]/80 border border-[#e0e0e0]/20 rounded-xl p-8 shadow-xl backdrop-blur-md"
      >
        <h2 className="text-2xl font-bold text-[#e0e0e0] text-center mb-4 uppercase tracking-widest">
          Blacklight 365
        </h2>

        <h1 className="text-3xl font-semibold text-[#e0e0e0] mb-6 text-center">
          Вхід
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
            required
            className="w-full px-4 py-3 rounded-md bg-black border border-[#e0e0e0]/30 placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
          />

          <div className="relative">
            <input
              type={showLoginPassword ? 'text' : 'password'}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-black border border-[#e0e0e0]/30 placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition pr-12"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e0e0e0] hover:text-white"
              tabIndex={-1}
            >
              {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#e0e0e0] text-black font-bold py-3 rounded hover:bg-white transition disabled:opacity-50"
          >
            {status === 'loading' ? 'Вхід...' : 'Увійти'}
          </button>

          {/* Errors */}
          {errorCode === 'INVALID_CREDENTIALS' && (
            <p className="text-red-500 flex items-center text-base text-center justify-center mt-2">
              <Info className="w-4 h-4 mr-2" />
              Невірний email або пароль.
            </p>
          )}

          {errorCode === 'EMAIL_NOT_CONFIRMED' && (
            <div className="text-orange-400 text-base text-center space-y-2">
              <div className="flex items-center justify-center">
                <Info className="w-4 h-4 mr-2" />
                <p>Пошта не підтверджена.</p>
              </div>

              <button
                onClick={handleResendVerification}
                className="hover:underline text-blue-400 cursor-pointer"
                type="button"
              >
                Надіслати листа повторно
              </button>

              {resendStatus === 'sent' && (
                <p className="flex items-center justify-center text-green-400 text-base">
                  <Info className="w-4 h-4 mr-2" />
                  Лист надіслано успішно.
                </p>
              )}

              {resendStatus === 'error' && (
                <p className="flex items-center justify-center text-red-400 text-xs">
                  <Info className="w-4 h-4 mr-2" />
                  Помилка при надсиланні.
                </p>
              )}
            </div>
          )}
        </form>

        <p className="text-base text-center mt-6 text-[#ccc]">
          Ще не маєте акаунта?{' '}
          <a href="/auth/register" className="underline hover:text-white">
            Зареєструватися
          </a>
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
