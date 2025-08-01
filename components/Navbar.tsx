'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  FaHome,
  FaServicestack,
  FaImages,
  FaInfoCircle,
  FaEnvelope,
  FaChevronDown,
  FaSignInAlt,
} from 'react-icons/fa';
import {
  FaTshirt,
  FaCut,
  FaPaintBrush,
} from 'react-icons/fa';
import BlacklightLogo from './BlacklightLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);

  return (
    <>
      {/* Затемнение при открытом мобильном меню */}
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

      {/* Навбар */}
      <nav className="bg-black/80 border-b border-[#e0e0e0]/20 fixed w-full z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Логотип */}
          <Link href="/" className="text-2xl font-medium text-gray-300 tracking-wider">
            <BlacklightLogo />
          </Link>

          {/* Десктоп меню */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium items-center relative">
            {menuItems.map((item) =>
              item.label === 'Послуги' ? (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setIsSubmenuOpen(true)}
                  onMouseLeave={() => setIsSubmenuOpen(false)}
                >
                  <div className="flex items-center gap-1 text-gray-300 hover:text-cyan-400 transition duration-300 cursor-pointer">
                    <item.icon size={14} />
                    <span>{item.label}</span>
                    <FaChevronDown size={12} className="mt-[2px]" />
                  </div>

                  <AnimatePresence>
                    {isSubmenuOpen && (
                      <motion.div
                        key="submenu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4 w-64 bg-black border border-white/10 rounded-lg shadow-lg p-4 space-y-3 z-50"
                      >
                        {servicesSubmenu.map(({ label, href, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            className="group flex items-center gap-3 hover:bg-white/5 p-2 rounded-md transition"
                          >
                            <Icon
                              size={18}
                              className="text-cyan-400 group-hover:text-cyan-300 transition duration-300"
                            />
                            <span className="text-sm text-gray-300 group-hover:text-white transition">
                              {label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition duration-300"
                  >
                    <item.icon size={14} />
                    {item.label}
                  </Link>
                </li>
              )
            )}

            {/* Кнопка логина */}
            <li>
              <Link
                href="/auth/login"
                className="ml-4 border border-[#e0e0e0]/20 text-gray-500 px-4 py-1 rounded-full hover:bg-gray-200 hover:text-black transition flex items-center gap-2"
              >
                <FaSignInAlt size={14} />
                Увійти
              </Link>
            </li>
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
                {menuItems.map((item) =>
                  item.label === 'Послуги' ? (
                    <li key={item.label}>
                      <button
                        onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
                        className="w-full text-left flex items-center gap-2 hover:text-cyan-400 transition"
                      >
                        <item.icon size={16} />
                        {item.label}
                        <FaChevronDown size={12} />
                      </button>
                      {isMobileSubmenuOpen && (
                        <ul className="mt-2 space-y-2 pl-4 text-sm text-gray-400">
                          {servicesSubmenu.map(({ label, href, icon: Icon }) => (
                            <li key={href}>
                              <Link
                                href={href}
                                className="flex items-center gap-2 hover:text-white transition"
                                onClick={() => setIsOpen(false)}
                              >
                                <Icon size={14} />
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon size={16} />
                        {item.label}
                      </Link>
                    </li>
                  )
                )}

                {/* Логин в бургер-меню */}
                <li>
                  <Link
                    href="/auth/login"
                    className="block border border-cyan-500 text-cyan-400 text-center rounded-full py-2 hover:bg-cyan-500 hover:text-black transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Увійти в кабінет
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

const menuItems = [
  { label: 'Головна', href: '/#top', icon: FaHome },
  { label: 'Послуги', href: '/services', icon: FaServicestack },
  { label: 'Наші роботи', href: '/#portfolio', icon: FaImages },
  { label: 'Про нас', href: '/#about', icon: FaInfoCircle },
  { label: 'Контакти', href: '/#contact', icon: FaEnvelope },
];

const servicesSubmenu = [
  {
    label: 'DTF-друк',
    href: '/services/dtf',
    icon: FaTshirt,
  },
  {
    label: 'Вишивка',
    href: '/services/embroidery',
    icon: FaCut,
  },
  {
    label: 'Шовкографія',
    href: '/services/silkscreen',
    icon: FaPaintBrush,
  },
];
