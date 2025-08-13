import { Shirt, LucideSpool, Paintbrush } from 'lucide-react';

export const menuItems = [
  { label: 'Послуги', href: '/services' },
  { label: 'Наші роботи', href: '/#portfolio' },
  { label: 'Про нас', href: '/#about' },
  { label: 'Контакти', href: '/#contact' },
];

export const servicesSubmenu = [
  {
    label: 'DTF-друк',
    href: '/services/dtf',
    icon: Shirt,
    description: 'Якісний друк на тканині з високою деталізацією',
  },
  {
    label: 'Вишивка',
    href: '/services/embroidery',
    icon: LucideSpool,
    description: 'Машинна вишивка логотипів та дизайнів',
  },
  {
    label: 'Шовкографія',
    href: '/services/silkscreen',
    icon: Paintbrush,
    description: 'Трафаретний друк для великих тиражів',
  },
];

