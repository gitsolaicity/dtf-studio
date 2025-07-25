"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RoughDivider2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  const [visible, setVisible] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);

      if (!hasPlayedRef.current) {
        audioRef.current?.play().catch(() => {
          // В случае, если браузер блокирует автоплей без взаимодействия
        });
        hasPlayedRef.current = true;
      }
    } else {
      const timeout = setTimeout(() => {
        setVisible(false);
        hasPlayedRef.current = false;
      }, 3000); // 3s delay
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="w-full overflow-hidden">
      {/* 🔊 Аудио элемент */}
      <audio ref={audioRef} src="/sfx/brush.mp3" preload="auto" />

      <motion.svg
        viewBox="0 0 469.73 16.34"
        preserveAspectRatio="none"
        className="w-full fill-green-500/30"
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        animate={
          visible
            ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ originX: 1 }}
      >
        <path d="M468.39,16.3c-6.72-.46-13.95-.83-21.78-1.08s-15.06-.63-21.78-1.09C402.5,12.45,381.24,11.42,361.2,11q0,.87,4.77,1.32l2,.16c2.21.05,3.35.21,3.37.49s-1.53.57-4.63,1.09q-55.08-2.79-119.26-1.52c-2.87-.12-5.87-.22-8.92-.31-10.36-.3-21.85-.47-33.94-.57-14.78-.38-30.52-.66-48-.73-22.84-.09-45.38-.25-71.15.07-10.63.13-22.59.52-34.95,1-17.6.06-34,0-50.51-.12,29.72-1.52,59.45-3,89-4.48C125.83,5.64,162.42,4,198,2.67,232.41,1.38,264.09.57,294.64.08l5.9-.08c12.62.11,24.67.31,36,.64,4,0,8.26,0,12.68,0a105.07,105.07,0,0,1,10.73.05q.74,1.34,6.76,1.94,40.88,1.63,70.45,4.48l.66.19c0,.06-.21.16-.63.29a11.67,11.67,0,0,1-2,.32l-1.3.08a26.77,26.77,0,0,1-2.69,0q-18.75-.92-38.83-1.62A54.1,54.1,0,0,1,385,6.26a55.74,55.74,0,0,0-7.34-.12l-.7,0c3.57.16,6.71.35,9.37.56Q405.15,8,430,10.54l19.48,1.93a65.32,65.32,0,0,1,10.83,1.83,61.56,61.56,0,0,0,9.45,1.83,3.84,3.84,0,0,1-1.34.21Z" />
      </motion.svg>
    </div>
  );
};

export default RoughDivider2;
