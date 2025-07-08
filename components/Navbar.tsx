"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Логотип */}
        <div className="text-2xl font-bold text-black">DTF Studio</div>

        {/* Десктоп меню */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-black transition">
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
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Анимированное меню через Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden shadow-md"
          >
            <ul className="flex flex-col space-y-4 p-6 text-gray-700 font-medium">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block hover:text-black transition"
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
  );
}

const menuItems = [
  { label: "Главная", href: "#top" },
  { label: "Услуги", href: "#services" },
  { label: "Наши работы", href: "#portfolio" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];
