'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Затемнение страницы при открытом меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Навбар поверх затемнения */}
      <nav className="bg-black/80 border-b border-cyan-800 fixed w-full z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Логотип */}
          <div className="text-2xl font-bold text-gray-400 tracking-wider">
            Blacklight365
          </div>

          {/* Десктоп меню */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-400 hover:text-cyan-400 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Бургер-кнопка */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
                isOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-cyan-400 transition-transform duration-300 ${
                isOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            />
          </button>
        </div>

        {/* Мобильное меню */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black border-t border-cyan-800 overflow-hidden z-50 relative"
            >
              <ul className="flex flex-col space-y-4 p-6 text-gray-300 font-medium text-lg">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block hover:text-cyan-400 transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

const menuItems = [
  { label: 'Головна', href: '#top' },
  { label: 'Послуги', href: '#services' },
  { label: 'Наші роботи', href: '#portfolio' },
  { label: 'Про нас', href: '#about' },
  { label: 'Контакти', href: '#contact' },
];
