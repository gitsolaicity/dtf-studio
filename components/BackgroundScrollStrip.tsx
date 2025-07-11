"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/cat-dtf.png",
  "/images/love-dtf.png",
  "/images/bunny-dtf.png",
  "/images/wolves-dtf.png",
  "/images/tattoo-dtf.png",
];

export default function BackgroundScrollStrip() {
  return (
    <div className="absolute top-16 left-0 w-full overflow-hidden z-0 pointer-events-none opacity-30">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-66%"] }}
        transition={{ duration: 60, ease: "linear", repeat: Infinity }}
      >
        {[...images, ...images].map((src, i) => (
          <div key={i} className="relative w-[380px] h-[380px] flex-shrink-0 opacity-80">
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
