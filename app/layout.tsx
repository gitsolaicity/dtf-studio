import Footer from "@/components/Footer"
import "./globals.css"
import { Providers } from "./providers"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import RoughDivider from "@/components/decor/RoughDivider"
import Navbar from "@/components/navbar/Navbar"
import SearchModal from "@/components/search/SearchModal"
import { SearchProvider } from "@/components/search/SearchContext"
import SearchHotkey from "@/components/search/SearchHotkey" // ✅ добавлено

export const metadata = {
  title: "Black Light",
  description: "Преміальний DTF-друк та вишивка на замовлення",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        {/* 👇 Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Black Light",
              "url": "https://blacklight365.com",
              "logo": "https://blacklight365.com/logo.png",
              "sameAs": [
                "https://instagram.com/blacklight365",
                "https://facebook.com/blacklight365"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+380689991414",
                "contactType": "customer service",
                "areaServed": "UA",
                "availableLanguage": ["Ukrainian"]
              }
            }),
          }}
        />

        {/* 👇 Structured data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Black Light",
              "url": "https://blacklight365.com",
              "inLanguage": "uk",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://blacklight365.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />

        {/* 🔍 Глобальный провайдер и модалка */}
        <SearchProvider>
          <SearchHotkey /> {/* ✅ теперь хук вызывается корректно */}
          <SearchModal />

          {/* 🧩 Остальные провайдеры и контент */}
          <Providers>
            <Navbar />
            {children}
            <RoughDivider />
            <Footer />
          </Providers>
        </SearchProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
