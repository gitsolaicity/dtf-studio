'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FooterContacts } from './FooterContacts';

export default function Footer() {
  const open = (url: string) => window.open(url, '_blank');

  return (
    <footer className="relative bg-black text-gray-300 px-6 py-20 overflow-hidden border-t border-[#e0e0e0]/20">

       {/* Анимационный фон с линиями */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
  <motion.div
    className="flex w-[200%] h-full"
    animate={{ x: ['0%', '-50%'] }}
    transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
  >
    {[1, 2].map((_, i) => (
      <svg
      key={i}
       viewBox="0 0 1440 320"
       preserveAspectRatio="none"
       className="w-full h-full"
       xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="gradientLines" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stopColor="#9333ea" />
      <stop offset="50%" stopColor="#06b6d4" />
      <stop offset="100%" stopColor="#f43f5e" />
    </linearGradient>
  </defs>

  <path
    fill="none"
    stroke="url(#gradientLines)"
    strokeWidth="4"
    strokeLinecap="round"
    d="
      M0,160
      C180,80, 360,240, 540,160
      S900,80, 1080,160
      S1320,240, 1440,160
    "
  />
</svg>
    ))}
  </motion.div>
</div>


      {/* Контент футера */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Blacklight365</h3>
          <p className="text-gray-500 text-lg">
            Магія світла та друку. DTF-студія нового рівня.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Про нас</h4>
          <ul className="space-y-2">
            {['Наша місія', 'Історія студії', 'Партнерство'].map((item, i) => (
              <li
                key={i}
                className="hover:text-purple-400 transition-colors cursor-pointer text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Послуги</h4>
          <ul className="space-y-2">
            {['DTF-друк', 'Дизайн на замовлення', 'Опт та дрібний тираж'].map((item, i) => (
              <li
                key={i}
                className="hover:text-cyan-400 transition-colors cursor-pointer text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Навігація</h4>
          <ul className="space-y-2">
            {['Головна', 'Приклади', 'Контакти'].map((item, i) => (
              <li
                key={i}
                className="hover:text-pink-400 transition-colors cursor-pointer text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Кнопки соцсетей и связи */}
      <FooterContacts />

      {/* Подпись */}
      <div className="mt-10 text-center text-xs text-gray-600 select-none z-10 relative">
        © {new Date().getFullYear()} Blacklight. Усі права захищені.
      </div>
      <motion.div
  className="absolute -top-2/3 left-0 w-[200%] whitespace-nowrap text-[38vw] font-bold tracking-widest text-white opacity-5 pointer-events-none select-none"
  animate={{ x: ['0%', '-100%'] }}
  transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
>
  {Array.from({ length: 30 }).map((_, i) => (
    <span key={i} className="mr-32">BLACKLIGHT365</span>
  ))}
</motion.div>

    </footer>
  );
}
