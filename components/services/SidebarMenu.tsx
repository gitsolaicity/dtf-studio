'use client';

import Link from 'next/link';
import { Anchor } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Section = {
  id: string;
  label: string;
};

interface SidebarMenuProps {
  sections: Section[];
  activeId?: string;
}

export default function SidebarMenu({ sections, activeId }: SidebarMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop menu */}
      <aside className="hidden lg:flex flex-col gap-4 sticky top-28 h-fit w-56 pr-4">
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            className={`text-sm transition hover:text-white ${
              activeId === id ? 'text-white font-semibold' : 'text-gray-400'
            }`}
          >
            {label}
          </Link>
        ))}
      </aside>

      {/* Mobile toggle button */}
      <button
        aria-label="Навігація по розділах"
        title="Навігація по розділах"
        className={`lg:hidden fixed top-22 right-4 z-20 p-2 rounded-md border transition ${
          mobileMenuOpen
            ? 'bg-black/80 border-white/40 shadow-[0_0_0_2px_rgba(255,255,255,0.3)]'
            : 'bg-black/60 border-white/20'
        }`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Anchor size={20} className={mobileMenuOpen ? 'text-white' : 'text-gray-300'} />
      </button>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden fixed top-38 right-4 z-10 bg-black/90 border-2 border-white/40 rounded-xl shadow-lg p-6 space-y-4 w-86"
          >
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm transition ${
                  activeId === id ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
