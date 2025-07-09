'use client';

import { useRouter } from 'next/navigation';

export default function Footer() {
  const open = (url: string) => window.open(url, '_blank');

  return (
    <footer className="relative bg-black text-gray-300 px-6 py-20 overflow-hidden">

       {/* Анимационный фон с линиями */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
  <div className="flex w-[200%] h-full animate-neonLines">
    {/* Повторяющаяся линия 1 */}
    <svg
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
        strokeWidth="2"
        d="M0,160 C240,320, 480,0, 720,160 S1200,320, 1440,160"
      />
    </svg>

    {/* Повторяющаяся линия 2 */}
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        stroke="url(#gradientLines)"
        strokeWidth="6"
        d="M0,160 C240,320, 480,0, 720,160 S1200,320, 1440,160"
      />
    </svg>
  </div>
</div>

      {/* Контент футера */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Blacklight365</h3>
          <p className="text-gray-500">
            Магия света и печати. DTF-студия нового уровня.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wide text-gray-500 mb-3">О нас</h4>
          <ul className="space-y-2">
            {['Наша миссия', 'История студии', 'Партнёрство'].map((item, i) => (
              <li
                key={i}
                className="hover:text-purple-400 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wide text-gray-500 mb-3">Услуги</h4>
          <ul className="space-y-2">
            {['DTF-печать', 'Дизайн под заказ', 'Опт и мелкий тираж'].map((item, i) => (
              <li
                key={i}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase font-semibold tracking-wide text-gray-500 mb-3">Навигация</h4>
          <ul className="space-y-2">
            {['Главная', 'Примеры', 'Контакты'].map((item, i) => (
              <li
                key={i}
                className="hover:text-pink-400 transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Кнопки соцсетей и связи */}
      <div className="mt-12 flex flex-wrap justify-center gap-3 relative z-10">
        <button
          onClick={() => open('https://t.me/blacklight365')}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Telegram
        </button>
        <button
          onClick={() => open('https://www.instagram.com/_blacklight365')}
          className="bg-pink-600 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Instagram
        </button>
        <button
          onClick={() => open('https://www.tiktok.com/@blacklight365')}
          className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition"
        >
          TikTok
        </button>
        <button
          onClick={() => open('tel:+380689991414')}
          className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Позвонить
        </button>
        <button
          onClick={() => open('viber://chat?number=%2B380689991414')}
          className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm transition"
        >
          Viber
        </button>
      </div>

      {/* Подпись */}
      <div className="mt-10 text-center text-xs text-gray-600 select-none z-10 relative">
        © {new Date().getFullYear()} Blacklight365. Все права защищены.
      </div>
    </footer>
  );
}
