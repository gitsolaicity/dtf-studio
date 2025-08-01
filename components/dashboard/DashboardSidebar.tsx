'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Users, ClipboardList, Settings, ExternalLink } from 'lucide-react';

const navItems = [
  { label: 'Главная', href: '/dashboard', icon: Home },
  { label: 'Клиенты', href: '/dashboard/clients', icon: Users },
  { label: 'Заказы', href: '/dashboard/orders', icon: ClipboardList },
  { label: 'Настройки', href: '/dashboard/settings', icon: Settings },
  { label: 'На сайт', href: '/', icon: ExternalLink }, // новый пункт меню
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block md:flex flex-col bg-black border-r border-cyan-800 w-64 min-h-screen px-6 py-8 text-white fixed left-0 top-0 z-40">
        <div className="text-2xl font-bold text-cyan-400 mb-10 tracking-wide">
          Панель <span className="text-white">управления</span>
        </div>

        <nav className="flex flex-col space-y-4 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 py-2 px-4 rounded transition hover:bg-cyan-900/30',
                pathname === item.href
                  ? 'bg-cyan-700/20 text-cyan-300 font-semibold'
                  : 'text-gray-300'
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-cyan-800 z-50 flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center text-xs transition-all',
                isActive
                  ? 'text-cyan-300'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              <item.icon className="w-5 h-5 mb-1" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
