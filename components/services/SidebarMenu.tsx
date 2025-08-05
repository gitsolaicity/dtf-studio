'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
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
        className="lg:hidden fixed top-22 right-4 z-20 p-2 bg-black/60 border border-white/20 rounded-md"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <Menu size={20} />
      </button>

      {/* Animated mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
            className="lg:hidden fixed top-30 right-4 z-10 bg-black/90 border border-white/20 rounded-lg shadow-md p-4 space-y-2"
          >
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-gray-300 hover:text-white"
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
