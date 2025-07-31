"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// 🔊 Универсальный хук для безопасного воспроизведения звука
function useSafeAudioTrigger(src: string, volume = 0.3) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasInteractedRef = useRef(false);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.volume = volume;
    audioRef.current.preload = "auto";

    const handleInteraction = () => {
      hasInteractedRef.current = true;
    };

    const events = ["click", "touchstart"];
    events.forEach((event) =>
      window.addEventListener(event, handleInteraction, { once: true })
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, handleInteraction)
      );
    };
  }, [src, volume]);

  const tryPlay = () => {
    if (
      hasInteractedRef.current &&
      audioRef.current &&
      !hasPlayedRef.current
    ) {
      audioRef.current
        .play()
        .then(() => {
          hasPlayedRef.current = true;
        })
        .catch((err) => {
          console.warn("Audio play blocked:", err);
        });
    }
  };

  return { tryPlay };
}

const RoughDividerInvert = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-20% 0px -20% 0px",
    once: false,
  });

  const [visible, setVisible] = useState(false);
  const hasAnimatedOnceRef = useRef(false);
  const { tryPlay } = useSafeAudioTrigger("/0/sfx/pincel.mp3", 0.2);

  useEffect(() => {
    if (isInView && !hasAnimatedOnceRef.current) {
      setVisible(true);
      tryPlay();
      hasAnimatedOnceRef.current = true;
    }
  }, [isInView, tryPlay]);

  return (
    <div ref={ref} className="w-full overflow-hidden" style={{ transform: "scaleX(-1)" }}>
  <motion.svg
    viewBox="0 0 874.97 12"
    preserveAspectRatio="none"
    className="w-full fill-cyan-950 lg:fill-white/10"
    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }} // ✅ обрезка справа
    animate={
      visible
        ? { opacity: 1, clipPath: "inset(0 0% 0 0)" } // ✅ раскрытие слева
        : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
    }
    transition={{ duration: 0.4, ease: "easeOut" }}
    style={{ originX: 1 }} // ✅ анимация начинается слева (но svg уже зеркален)
  >

        <path xmlns="http://www.w3.org/2000/svg" d="M213.8,12q-34.62,0-60.57-1.44-24.72-.88-24.71-1.45c-4.13-.25-6.18-.44-6.18-.56q-26-.24-50.67-.88h21q24.71,0,50.65-.4c0-.47,3.3-.77,9.89-.88h2.47Q142.11,6,132.23,6q-13.59,0-29.67.45t-25.95.46q-23.49,0-61.78-1.79L0,4.52l1.23-.08q12.36.25,26,.25,33.35,0,95.15-2.05Q168,1,197.73,1q18.53,0,39.55.42l22.24.25Q283,1.28,311.42,1,274.34.51,242.22.5c-.83,0-1.24,0-1.24-.12s.41-.13,1.24-.13Q276.81,0,311.42,0q59.32,0,117.41.75,30.89.26,63,.25H632.75q21-.57,42-.56,34.59,0,65.5.83l1.23.06a24,24,0,0,1-3.09.12c-2.07.05-3.1.1-3.1.13l9.89.33q17.29-.15,34.61-.16Q828,1.75,875,3.11H837.89l1.23.08-1.23.08q-19.78.16-35.84,1t-23.47.84c-.83.06-2.06.08-3.72.08l2.48.08c4.11.06,6.58.21,7.41.48,0,.31-1.66.56-4.94.72q-32.14,1-66.73,1h-5q-30.89.21-59.31.77H773.62l1.24.17Q647.57,11,515.34,11h-47q-40.78,1-81.57,1-50.67,0-101.34-.48c-1.66,0-2.89,0-3.7.07q-18.54.33-35.22.38T213.8,12ZM484.44,7.67q65.48,0,124.83-.79-35.87-.36-70.46-.36-14.84.23-32.12.36l-49.44.5-13.59.21Q463.43,7.7,484.44,7.67Zm136-.56L616.67,7c0,.06-.22.08-.62.08h4.34Z"/>
      </motion.svg>
    </div>
  );
};

export default RoughDividerInvert;