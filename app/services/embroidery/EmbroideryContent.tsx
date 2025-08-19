'use client';

import { useEffect, useState, useRef } from 'react';
import SidebarMenu from '@/components/services/SidebarMenu';

import EmbroideryDescription from '@/components/services/embroidery/EmbroideryDescription';
import EmbroideryAdvantages from '@/components/services/embroidery/EmbroideryAdvantages';
import EmbroideryExamples from '@/components/services/embroidery/EmbroideryExamples';
import EmbroideryOrder from '@/components/services/embroidery/EmbroideryOrder';
import WorkflowSection from '@/components/services/WorkflowSection';
import ServiceNavSection from '@/components/services/ServiceNavSection';

const sections = [
  { id: 'description', label: 'Опис' },
  { id: 'advantages', label: 'Переваги' },
  { id: 'examples', label: 'Приклади' },
  { id: 'order', label: 'Як замовити' },
  { id: 'workflow', label: 'Як ми працюємо' },
];

export default function EmbroideryContent() {
  const [activeId, setActiveId] = useState('');
  const [showMobileButton, setShowMobileButton] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const bottomEdge = scrollY + viewportHeight;

      const container = containerRef.current;
      if (container) {
        const containerBottom = container.offsetTop + container.offsetHeight;
        setShowMobileButton(bottomEdge < containerBottom);
      }

      const scrollPosition = scrollY + 200;
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
    <div ref={containerRef} className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">
      <div className="relative flex-1 flex w-full max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <SidebarMenu sections={sections} activeId={activeId} showMobileButton={showMobileButton} />
        <main className="flex-1 space-y-24">
          <ServiceNavSection />
          <EmbroideryDescription />
          <EmbroideryAdvantages />
          <EmbroideryExamples />
          <EmbroideryOrder />
          <WorkflowSection />
          <ServiceNavSection />
        </main>
      </div>
    </div>
  );
}
