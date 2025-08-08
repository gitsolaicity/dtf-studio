'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronDown, FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';
import { menuItems, servicesSubmenu } from './menuData';

export default function DesktopMenu() {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  return (
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
              <span>{item.label}</span>
              <FaChevronDown size={12} className="mt-[2px]" />
            </div>

            <AnimatePresence>
              {isSubmenuOpen && (
                <motion.div
  key="submenu"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 10 }}
  transition={{ duration: 0.2 }}
  className="absolute left-0 top-full pt-4 w-96 bg-black border border-white/10 rounded-lg shadow-lg p-4 space-y-3 z-50"
>
  {servicesSubmenu.map(({ label, href, icon: Icon, description }) => (
    <Link
      key={href}
      href={href}
      className="group flex items-center gap-4 hover:bg-white/5 p-3 rounded-md transition h-20"
    >
      <Icon
        size={24}
        className="text-gray-300 group-hover:text-cyan-300 transition duration-300 shrink-0"
      />
      <div className="flex flex-col justify-center overflow-hidden">
        <div className="text-sm text-gray-300 group-hover:text-white font-medium truncate">
          {label}
        </div>
        <div className="text-xs text-gray-400 mt-1 leading-snug truncate">
          {description}
        </div>
      </div>
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
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item.label}
            </Link>
          </li>
        )
      )}

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
  );
}
