'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SidebarMenu from '@/components/services/SidebarMenu';

import SilkscreenDescription from '@/components/services/silkscreen/SilkscreenDescription';
import SilkscreenAdvantages from '@/components/services/silkscreen/SilkscreenAdvantages';
import SilkscreenExamples from '@/components/services/silkscreen/SilkscreenExamples';
import SilkscreenOrder from '@/components/services/silkscreen/SilkscreenOrder';
import WorkflowSection from '@/components/services/WorkflowSection'; // можно переиспользовать

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
      <Navbar />
      <div className="relative flex-1 flex w-full max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <SidebarMenu sections={sections} activeId={activeId} />
        <main className="flex-1 space-y-32">
          <SilkscreenDescription />
          <SilkscreenAdvantages />
          <SilkscreenExamples />
          <SilkscreenOrder />
          <WorkflowSection />
        </main>
      </div>
      <Footer />
    </div>
  );
}
