'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  color?: 'cyan' | 'rose' | 'lime';
  variant?: 'solid' | 'subtle' | 'ghost';
}

const styleMap = {
  cyan: {
    solid: {
      bg: 'bg-cyan-500',
      hover: 'hover:bg-cyan-300',
      ring: 'ring-2 ring-cyan-200',
      text: 'text-black font-semibold',
    },
    subtle: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/5',
      ring: 'ring-0 border border-white/20 hover:border-white/40',
      text: 'text-white/80 hover:text-white font-medium',
    },
    ghost: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/10',
      ring: 'border border-white/30 hover:border-white/50',
      text: 'text-cyan-300 hover:text-white font-medium',
    },

  },
  rose: {
    solid: {
      bg: 'bg-rose-500',
      hover: 'hover:bg-rose-300',
      ring: 'ring-2 ring-rose-200',
      text: 'text-black font-semibold',
    },
    subtle: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/5',
      ring: 'ring-0 border border-white/20 hover:border-white/40',
      text: 'text-white/80 hover:text-white font-medium',
    },
    ghost: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/10',
      ring: 'border border-white/30 hover:border-white/50',
      text: 'text-cyan-300 hover:text-white font-medium',
    },

  },
  lime: {
    solid: {
      bg: 'bg-lime-500',
      hover: 'hover:bg-lime-300',
      ring: 'ring-2 ring-lime-200',
      text: 'text-black font-semibold',
    },
    subtle: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/5',
      ring: 'ring-0 border border-white/20 hover:border-white/40',
      text: 'text-white/80 hover:text-white font-medium',
    },
    ghost: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/10',
      ring: 'border border-white/30 hover:border-white/50',
      text: 'text-cyan-300 hover:text-white font-medium',
    },
  },
};

export default function PrimaryButton({
  href,
  children,
  icon,
  color = 'cyan',
  variant = 'solid',
}: PrimaryButtonProps) {
  const styles = styleMap[color][variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-base px-6 py-3 rounded-full shadow-xl transition duration-300
        ${styles.bg} ${styles.hover} ${styles.text} ${styles.ring}`}
    >
      {icon}
      {children}
    </Link>
  );
}
