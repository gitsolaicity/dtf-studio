'use client';

import { motion } from 'framer-motion';

export default function FooterBackground() {
  return (
    <>
      {/* Линии */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <motion.div
          className="flex w-[200%] h-full"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity }}
        >
          {[1, 2].map((_, i) => (
            <svg
              key={i}
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradientLines" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#9333ea" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#f43f5e" />
                </linearGradient>
              </defs>
              <path
                fill="none"
                stroke="url(#gradientLines)"
                strokeWidth="4"
                strokeLinecap="round"
                d="M0,160 C180,80, 360,240, 540,160 S900,80, 1080,160 S1320,240, 1440,160"
              />
            </svg>
          ))}
        </motion.div>
      </div>

      {/* Бегущий текст */}
      <motion.div
        className="absolute -top-[10vw] md:-top-2/3 left-0 w-[200%] whitespace-nowrap text-[38vw] font-bold tracking-widest text-white opacity-5 pointer-events-none select-none"
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 80, ease: 'linear', repeat: Infinity }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="mr-32">
            BLACKLIGHT365
          </span>
        ))}
      </motion.div>
    </>
  );
}
