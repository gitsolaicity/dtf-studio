'use client';

import { usePathname } from 'next/navigation';
import PrimaryButton from '@/components/PrimaryButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'dtf',
    title: 'DTF',
    href: '/services/dtf',
  },
  {
    id: 'embroidery',
    title: 'Вишивка',
    href: '/services/embroidery',
  },
  {
    id: 'silkscreen',
    title: 'Шовкографія',
    href: '/services/silkscreen',
  },
];

export default function ServiceNavSection() {
  const pathname = usePathname();

  const currentIndex = services.findIndex(service => pathname.includes(service.id));
  const prevService = services[currentIndex - 1];
  const nextService = services[currentIndex + 1];

  return (
    <section className="my-10 px-0">
      <div className="flex flex-wrap justify-items-start gap-3">
        {/* Назад до послуг */}
        <PrimaryButton href="/services" variant="subtle" icon={<ArrowLeft size={16} />}>
          До послуг
        </PrimaryButton>

        {/* Навигация между услугами */}
        {prevService && (
          <PrimaryButton href={prevService.href} variant="ghost" icon={<ArrowLeft size={16} />}>
            {prevService.title}
          </PrimaryButton>
        )}
        {nextService && (
          <PrimaryButton href={nextService.href} variant="ghost" icon={<ArrowRight size={16} />}>
            {nextService.title}
          </PrimaryButton>
        )}
      </div>
    </section>
  );
}

