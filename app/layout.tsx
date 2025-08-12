import Footer from "@/components/Footer";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import RoughDivider from "@/components/decor/RoughDivider";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Black Light",
  description: "Преміальний DTF-друк та вишивка на замовлення",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        <Providers>
          <Navbar />
          {children}
          <RoughDivider />
          <Footer />
          <Analytics />
          <SpeedInsights />
          </Providers>
      </body>
    </html>
  );
}
