'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  href: string;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
  color?: 'cyan' | 'purple' | 'blue';
  variant?: 'solid' | 'subtle' | 'ghost';
}

// Тип для стилей варианта
interface StyleVariant {
  bg: string;
  hover: string;
  ring: string;
  text: string;
  shadow?: string;
  glow?: string;
}

// Тип для всей карты стилей
type StyleMap = {
  [color in 'cyan' | 'purple' | 'blue']: {
    [variant in 'solid' | 'subtle' | 'ghost']: StyleVariant;
  };
};

const styleMap: StyleMap = {
  cyan: {
    solid: {
      bg: 'bg-cyan-500',
      hover: 'hover:bg-cyan-300',
      ring: 'ring-2 ring-cyan-200',
      text: 'text-black font-semibold',
      shadow: 'shadow-xl',
      glow: '',
    },
    subtle: {
      bg: 'bg-transparent',
      hover: 'hover:bg-white/5',
      ring: 'ring-0 border border-white/20 hover:border-white/40',
      text: 'text-white/80 hover:text-white font-medium',
    },
    ghost: {
      bg: 'bg-white/5',
      hover: 'hover:bg-white/10',
      ring: 'border border-white/30 hover:border-white/50',
      text: 'text-white/85 hover:text-white font-medium',
    },
  },
  purple: {
    solid: {
      bg: 'bg-purple-800',
      hover: 'hover:bg-purple-700',
      ring: 'ring-2 ring-purple-500',
      text: 'text-white font-medium',
      shadow: 'shadow-md',
      glow: 'shadow-[0_0_10px_rgba(139,92,246,0.2)]',
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
  blue: {
    solid: {
      bg: 'bg-blue-700',
      hover: 'hover:bg-blue-600',
      ring: 'ring-2 ring-blue-500',
      text: 'text-white font-medium',
      shadow: 'shadow-md',
      glow: 'shadow-[0_0_10px_rgba(37,99,235,0.2)]',
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
  className,
}: PrimaryButtonProps) {
  const styles = styleMap[color][variant];

  return (
    <Link
  href={href}
  className={`flex justify-center items-center gap-2 text-sm px-4 py-1.5 rounded-full transition duration-300 text-center
    ${styles.bg} ${styles.hover} ${styles.text} ${styles.ring ?? ''} ${styles.shadow ?? ''} ${styles.glow ?? ''} ${className ?? ''}`}
>
  {icon}
  {children}
</Link>

  );
}
