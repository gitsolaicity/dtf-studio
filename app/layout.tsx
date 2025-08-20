import Footer from "@/components/Footer"
import "./globals.css"
import { Providers } from "./providers"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import RoughDivider from "@/components/decor/RoughDivider"
import Navbar from "@/components/navbar/Navbar"
import SearchModal from "@/components/search/SearchModal"
import { SearchProvider } from "@/components/search/SearchContext"
import SearchHotkey from "@/components/search/SearchHotkey"
import Head from "next/head"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import {
  organizationSchema,
  websiteSchema,
  homepageSchema
} from "@/lib/schema"
import ScrollToTopButton from "@/components/ScrollToTopButton"

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
      <Head>
        <link rel="canonical" href="https://blacklight365.com" />

        {/* ✅ Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageSchema)
          }}
        />
      </Head>

      <body className="bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        <SearchProvider>
          <SearchHotkey />
          <SearchModal />

          <Providers>
            <Navbar />
            <BreadcrumbJsonLd />
            {children}
            <RoughDivider />
            <Footer />
            <ScrollToTopButton />
          </Providers>
        </SearchProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
