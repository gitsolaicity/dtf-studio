'use client';

import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';

export default function NotFound() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden px-6">

      {/* SVG Background как Image */}
      <Image
        src="/images/404/404.svg"
        alt="404 background"
        fill
        priority
        className="pt-10 lg:pt-0 object-contain lg:object-cover object-top opacity-30 -z-10"
      />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-7xl font-extrabold mb-4 tracking-tight">404</h1>
        <p className="text-xl mb-6 text-white/80">
          Сторінку не знайдено. Можливо, вона була вирізана, вишита або просто зникла.
        </p>

        <PrimaryButton
          href="/"
          variant="solid"
          color="cyan"
          className="mt-2 font-semibold px-8 py-3 rounded-full"
        >
          На головну
        </PrimaryButton>
      </div>
    </div>
  );
}
