"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface BackgroundScrollStripProps {
  images: string[];
  reverse?: boolean; // направление анимации
}

export default function BackgroundScrollStrip({ images, reverse = false }: BackgroundScrollStripProps) {
  return (
    <div className="absolute top-2 left-0 w-full overflow-hidden z-0 pointer-events-none opacity-40">
      <motion.div
        className="flex gap-2 w-6xl"
        animate={{ x: reverse ? ["-66%", "0%"] : ["0%", "-66%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="relative w-[320px] h-[320px] flex-shrink-0 opacity-80">
            <Image
              src={src}
              alt={`scrolling-print-${i}`}
              fill
              className="object-cover rounded-lg border border-cyan-500/10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
