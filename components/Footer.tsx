'use client';

import Link from 'next/link';
import FooterBackground from './FooterBackground';
import { SocialMedia } from './SocialMedia';
import BlacklightLogo from './BlacklightLogo';

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 px-6 py-20 overflow-hidden">
      <FooterBackground />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm relative z-10">
        {/* Лого и слоган */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BlacklightLogo />
          </div>
          <p className="text-gray-500 text-lg leading-relaxed">
            Магія світла та друку. <br />
            DTF-студія нового рівня.
          </p>
        </div>

        {/* Навігація */}
<div>
  <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Навігація</h4>
  <ul className="space-y-2">
    <li>
      <Link href="/" className="hover:text-indigo-400 transition-colors text-sm">
        Головна
      </Link>
    </li>
    <li>
      <Link href="/portfolio" className="hover:text-indigo-400 transition-colors text-sm">
        Наші роботи
      </Link>
    </li>
    <li>
      <Link href="/services" className="hover:text-indigo-400 transition-colors text-sm">
        Послуги
      </Link>
    </li>
    <li>
      <Link href="/contact" className="hover:text-indigo-400 transition-colors text-sm">
        Контакти
      </Link>
    </li>
    <li>
      <Link href="/privacy-policy" className="hover:text-indigo-400 transition-colors text-sm">
        Політика конфіденційності
      </Link>
    </li>
    <li>
      <Link href="/public-offer" className="hover:text-indigo-400 transition-colors text-sm">
        Публічна оферта
      </Link>
    </li>
    <li>
      <Link href="/terms-of-use" className="hover:text-indigo-400 transition-colors text-sm">
        Умови використання
      </Link>
    </li>
  </ul>
</div>


                        {/* Послуги */}
                 <div>
                   <h4 className="text-base font-semibold tracking-wide text-gray-500 mb-3">Послуги</h4>
                   <ul className="space-y-2">
                     <li>
                       <Link href="/services/dtf" className="hover:text-cyan-400 transition-colors text-sm">
                         DTF-друк
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/embroidery" className="hover:text-cyan-400 transition-colors text-sm">
                         Вишивка
                       </Link>
                     </li>
                     <li>
                       <Link href="/services/silkscreen" className="hover:text-cyan-400 transition-colors text-sm">
                         Шовкографія
                       </Link>
                     </li>
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
