"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const RoughDivider = () => {
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
      <audio ref={audioRef} src="/sfx/sword.mp3" preload="auto" />

      <motion.svg
        viewBox="0 0 469.73 7.38"
        preserveAspectRatio="none"
        className="w-full fill-red-500/30"
        initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
        animate={
          visible
            ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
        }
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ originX: 1 }}
      >
        <path d="M469.49,2.38a5.38,5.38,0,0,0-.9,0q-3.66,0-8.68,0c-3.33,0-6.68,0-10,0q-8.65,0-17.77-.1-14.61-.18-20.76-1.22c-1.06-.21-2.35-.4-3.88-.56q6.63,0,24.18-.28-18-.21-36-.21Q368,0,344.55.49q-14.15.27-28.29.28h-5q-42.19,0-83.69.55L221,1.39A13.45,13.45,0,0,0,217.77,1Q211.37.63,204.31.62q-7.31,0-18.7.29-9.13.27-18,.27h-2.05Q156,1.18,147.3.31A64.39,64.39,0,0,0,140.23,0c-1.06,0-2,0-2.95.07Q112.41,1.29,91.21,3,42.86,4,.46,5.47c-.31,0-.46,0-.46.1s.31.07.92.07q16.41-.08,33.51-.07t34.66.07q23.26.11,46.51.11H127q-19.83.72-19.83.76v.07c0,.07.39.11,1.14.11l44-.11,7.29,0q8.43,0,17.33-.21,5.94-.07,12.08-.11,9.81,0,19.61-.17-5.24.45-13.44.52c-7.6.12-12.78.35-15.51.7l3.41,0q3.43,0,6.17-.09c1.82,0,3.57-.08,5.25-.08,1.05,0,2.19,0,3.28.06,19.55-.61,40.22-.63,59.85-.92,12.07-.18,24.17-.2,36.27-.14h9.59l9.34,0q21.66,0,42.65-.69-2.75-.21-6.39-.21h-.91l-3.42,0,15.28-.42q23.7-.8,47.42-1c2.58.05,5.25.07,8,.07q12.07,0,33.29-.73c7.13-.23,13.83-.41,20.06-.52a5,5,0,0,0,.92-.11S469.64,2.42,469.49,2.38Z" />
      </motion.svg>
    </div>
  );
};

export default RoughDivider;
