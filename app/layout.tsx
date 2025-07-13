import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "BlackLight365",
  description: "Премиальная DTF-печать и вышивка на заказ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
          </Providers>
      </body>
    </html>
  );
}
