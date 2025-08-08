'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { menuItems, servicesSubmenu } from './menuData';
import PrimaryButton from '../PrimaryButton';
import { SocialMedia } from '../SocialMedia';

export default function MobileMenu({ isOpen, close }: { isOpen: boolean; close: () => void }) {
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="fixed top-[64px] left-0 right-0 h-[calc(100vh-64px)] z-40 bg-black/95 backdrop-blur-sm md:hidden"
        >
          {/* 🔽 Градиент снизу */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

          {/* 📜 Прокручиваемый контент */}
          <div className="h-full overflow-y-auto">
            <ul className="flex flex-col space-y-2 p-2 pb-32 text-gray-300 font-medium text-lg">
              {menuItems.map((item) =>
                item.label === 'Послуги' ? (
                  <li key={item.label}>
                    <button
                      onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                      className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-md transition ${
                        isMobileSubmenuOpen ? 'bg-white/10 text-cyan-400' : 'hover:text-cyan-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      <motion.span
                        animate={{ rotate: isMobileSubmenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FaChevronRight size={14} />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {isMobileSubmenuOpen && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pt-2 space-y-2 text-base text-gray-400"
                        >
                          {servicesSubmenu.map(({ label, href, icon: Icon, description }) => (
                             <li key={href}>
                               <Link
                                 href={href}
                                 onClick={close}
                                 className="flex items-center gap-4 px-4 py-3 rounded-md hover:text-white hover:bg-white/5 transition h-16"
                               >
                                 <Icon
                                   size={16}
                                   className="text-gray-400 shrink-0"
                                 />
                                 <div className="flex flex-col justify-center overflow-hidden">
                                   <span className="text-base font-medium text-gray-400 truncate">
                                     {label}
                                   </span>
                                   <span className="text-sm text-gray-500 truncate">
                                     {description}
                                   </span>
                                 </div>
                               </Link>
                             </li>
                           ))}
                           
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-md hover:text-cyan-400 transition duration-300"
                      onClick={close}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                )
              )}

              {/* 🌙 Разделитель */}
              <div className="mt-4 py-4 border-t border-white/10 dark:border-white/10" />

              {/* 🔐 Кнопки входа и регистрации */}
              <li>
                <PrimaryButton
                  href="/auth/login"
                  variant="subtle"
                  color="cyan"
                  className="w-full max-w-[calc(100%-2rem)] mx-3 justify-center"
                >
                  Увійти в кабінет
                </PrimaryButton>
              </li>
              <li>
                <PrimaryButton
                  href="/auth/register"
                  variant="subtle"
                  color="cyan"
                  className="w-full max-w-[calc(100%-2rem)] mx-3 justify-center"

                >
                  Реєстрація
                </PrimaryButton>
              </li>

              {/* 📱 Соцмережі с заголовком */}
                <SocialMedia />
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
