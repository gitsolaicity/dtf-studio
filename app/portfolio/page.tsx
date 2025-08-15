import { Metadata } from 'next'
import PortfolioContent from './PortfolioContent'
import { StructuredData } from '@/components/seo/StructuredData'

export const generateMetadata = (): Metadata => ({
  title: 'Наші роботи | Blacklight',
  description: 'Галерея прикладів друку, вишивки та шовкографії від Blacklight.',
  alternates: {
    canonical: 'https://blacklight.site/portfolio',
  },
  openGraph: {
    title: 'Наші роботи | Blacklight',
    description: 'DTF друк, вишивка, шовкографія — приклади виконаних замовлень.',
    url: 'https://blacklight.site/portfolio',
    images: [
      {
        url: 'https://blacklight.site/og/portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Галерея робіт Blacklight',
      },
    ],
  },
})

export default function PortfolioPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Наші роботи',
          description: 'Галерея прикладів друку, вишивки та шовкографії від Blacklight',
          url: 'https://blacklight.site/portfolio',
        }}
      />
      <PortfolioContent />
    </>
  )
}
