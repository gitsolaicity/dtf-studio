'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { registerUser } from '@/lib/supabaseRegister';
import { Eye, EyeOff, Info } from 'lucide-react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success' | 'exists'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage('Паролі не співпадають');
      setStatus('error');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Пароль має містити щонайменше 8 символів');
      setStatus('error');
      return;
    }

    setStatus('loading');
    const result = await registerUser(email, password);

    if (result.success) {
      setStatus('success');
    } else if (result.alreadyExists) {
      setStatus('exists');
    } else {
      setErrorMessage(result.error || 'Помилка реєстрації');
      setStatus('error');
    }
  };

  return (
    <div className="relative w-full max-w-md bg-[#111111]/80 border border-[#e0e0e0]/20 rounded-xl p-10 shadow-xl backdrop-blur-md z-10">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center text-[#e0e0e0]"
          >
            <h2 className="text-3xl font-bold mb-4">Пошта надіслана!</h2>
            <p className="mb-6">
              Ми надіслали лист підтвердження на <strong>{email}</strong>.<br />
              Перевірте вашу пошту.
            </p>
            <a
              href="/auth/login"
              className="inline-block px-6 py-3 rounded-full bg-[#e0e0e0] text-black font-semibold hover:bg-white transition"
            >
              Повернутись до входу
            </a>
          </motion.div>
        ) : status === 'exists' ? (
          <motion.div
            key="exists"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center text-[#e0e0e0]"
          >
            <h2 className="text-xl font-bold text-red-500 mb-4">
              Email вже зареєстровано
            </h2>
            <p className="mb-4 text-[#ccc]">
              Користувач з email <strong>{email}</strong> вже існує.
            </p>
            <a
              href="/auth/login"
              className="inline-block px-6 py-3 rounded-full bg-[#e0e0e0] text-black font-semibold hover:bg-white transition"
            >
              Увійти або відновити пароль
            </a>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleRegister}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-[#e0e0e0] text-center uppercase tracking-widest">
              Blacklight 365
            </h2>

            <h1 className="text-3xl font-semibold text-[#e0e0e0] text-center">
              Реєстрація
            </h1>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md bg-black border border-[#e0e0e0]/30 placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition"
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Пароль (мін. 8 символів)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-black border border-[#e0e0e0]/30 placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e0e0e0] hover:text-white"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Підтвердіть пароль"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-md bg-black border border-[#e0e0e0]/30 placeholder-[#bbb] focus:outline-none focus:ring-2 focus:ring-[#e0e0e0]/40 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#e0e0e0] hover:text-white"
                tabIndex={-1}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-[#e0e0e0] text-black font-bold py-3 rounded hover:bg-white transition disabled:opacity-50"
            >
              {status === 'loading' ? 'Реєстрація...' : 'Зареєструватись'}
            </button>

            {status === 'error' && errorMessage && (
              <p className="text-red-500 flex items-center justify-center text-base mt-2">
                <Info className="w-4 h-4 mr-2" />
                {errorMessage}
              </p>
            )}

            <p className="text-center text-[#ccc]">
              Вже маєте акаунт?{' '}
              <a href="/auth/login" className="underline hover:text-white">
                Увійти
              </a>
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
