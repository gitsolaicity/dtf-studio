import { useCallback, useRef } from "react";

export default function useSafeAudioTrigger(src: string, volume = 0.5) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tryPlay = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.volume = volume;
    }

    // Попытка воспроизведения (может быть заблокирована браузером)
    audioRef.current.play().catch((err) => {
      // Можно логировать или игнорировать
      console.warn("Audio play blocked:", err);
    });
  }, [src, volume]);

  return { tryPlay };
}
