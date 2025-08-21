import { generateMetadata } from '@/utils/generateMetadata'
import { StructuredData } from '@/components/seo/StructuredData'
import AboutContent from './AboutContent'

const { metadata, structuredData } = generateMetadata({
  type: 'AboutPage',
  title: 'Про нас — Blacklight',
  description: 'Дізнайтесь, хто ми, що ми робимо і чому нам довіряють бренди та люди.',
  slug: 'about',
  logoUrl: 'https://blacklight365.com/logo.png',
  dateModified: '2025-08-21',
})

export { metadata }

export default function AboutPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      <AboutContent />
    </>
  )
}
