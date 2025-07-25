'use client';

import FooterBackground from './FooterBackground';
import { SocialMedia } from './SocialMedia';
import BlacklightLogo from './BlacklightLogo';

export default function Footer() {

  return (
      <footer className="relative bg-black text-gray-300 px-6 py-20 overflow-hidden">
      {/* Анимированный фон */}
      <FooterBackground />

      {/* Контент футера */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BlacklightLogo />
          </div>
          <p className="text-gray-500 text-lg">
            Магія світла та друку. DTF-студія нового рівня.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Про нас</h4>
          <ul className="space-y-2">
            {['Наша місія', 'Історія студії', 'Партнерство'].map((item, i) => (
              <li key={i} className="hover:text-purple-400 transition-colors cursor-pointer text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Послуги</h4>
          <ul className="space-y-2">
            {['DTF-друк', 'Дизайн на замовлення', 'Опт та дрібний тираж'].map((item, i) => (
              <li key={i} className="hover:text-cyan-400 transition-colors cursor-pointer text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Навігація</h4>
          <ul className="space-y-2">
            {['Головна', 'Приклади', 'Контакти'].map((item, i) => (
              <li key={i} className="hover:text-pink-400 transition-colors cursor-pointer text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Соцсети */}
      <SocialMedia />

      {/* Подпись */}
      <div className="mt-10 text-center text-xs text-gray-600 select-none z-10 relative">
        © {new Date().getFullYear()} Blacklight. Усі права захищені.
      </div>
    </footer>
  );
}
