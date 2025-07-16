import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Авторизація | Blacklight 365',
  description: 'Вхід або реєстрація на Blacklight 365',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* SVG background анимация */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-80 blur-2xl">
        <svg width="1000" height="1000" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="240" fill="url(#gradient)" />
          <defs>
            <radialGradient
              id="gradient"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(300 300) rotate(90) scale(300)"
            >
              <stop stopColor="#e0e0e0" stopOpacity="0.2" />
              <stop offset="1" stopColor="#e0e0e0" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Контент (формы) */}
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>
    </main>
  );
}
