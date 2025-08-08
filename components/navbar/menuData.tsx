import { Shirt, LucideSpool, Paintbrush } from 'lucide-react';

export const menuItems = [
  { label: 'Головна', href: '/#top' },
  { label: 'Послуги', href: '/services' },
  { label: 'Наші роботи', href: '/#portfolio' },
  { label: 'Про нас', href: '/#about' },
  { label: 'Контакти', href: '/#contact' },
];

export const servicesSubmenu = [
  { label: 'DTF-друк', href: '/services/dtf', icon: Shirt },
  { label: 'Вишивка', href: '/services/embroidery', icon: LucideSpool },
  { label: 'Шовкографія', href: '/services/silkscreen', icon: Paintbrush },
];
