'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head'; // 👈 добавляем
import Navbar from '@/components/navbar/Navbar';
import SidebarMenu from '@/components/services/SidebarMenu';

import SilkscreenDescription from '@/components/services/silkscreen/SilkscreenDescription';
import SilkscreenAdvantages from '@/components/services/silkscreen/SilkscreenAdvantages';
import SilkscreenExamples from '@/components/services/silkscreen/SilkscreenExamples';
import SilkscreenOrder from '@/components/services/silkscreen/SilkscreenOrder';
import WorkflowSection from '@/components/services/WorkflowSection';
import ServiceNavSection from '@/components/services/ServiceNavSection';

const sections = [
  { id: 'description', label: 'Опис' },
  { id: 'advantages', label: 'Переваги' },
  { id: 'examples', label: 'Приклади' },
  { id: 'order', label: 'Як замовити' },
  { id: 'workflow', label: 'Як ми працюємо' },
];

export default function SilkscreenPage() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">
      <Head>
        <title>Шовкографія | Black Light</title>
        <meta name="description" content="Преміальна шовкографія на текстилі та аксесуарах" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Головна",
                  "item": "https://blacklight365.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Послуги",
                  "item": "https://blacklight365.com/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Шовкографія",
                  "item": "https://blacklight365.com/services/silkscreen"
                }
              ]
            }),
          }}
        />
      </Head>

      <Navbar />
      <div className="relative flex-1 flex w-full max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <SidebarMenu sections={sections} activeId={activeId} />
        <main className="flex-1 space-y-24">
          <ServiceNavSection />
          <SilkscreenDescription />
          <SilkscreenAdvantages />
          <SilkscreenExamples />
          <SilkscreenOrder />
          <WorkflowSection />
          <ServiceNavSection />
        </main>
      </div>
    </div>
  );
}
