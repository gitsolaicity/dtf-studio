// components/DashboardSidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Убедись, что у тебя есть функция объединения классов

const navItems = [
  { label: "Главная", href: "/dashboard" },
  { label: "Клиенты", href: "/dashboard/clients" },
  { label: "Заказы", href: "/dashboard/orders" },
  { label: "Настройки", href: "/dashboard/settings" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-black border-r border-cyan-800 w-64 min-h-screen px-6 py-8 text-white fixed left-0 top-0 z-40">
      <div className="text-2xl font-bold text-cyan-400 mb-10 tracking-wide">
        Панель <span className="text-white">управления</span>
      </div>

      <nav className="flex flex-col space-y-4 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "py-2 px-4 rounded transition hover:bg-cyan-900/30",
              pathname === item.href
                ? "bg-cyan-700/20 text-cyan-300 font-semibold"
                : "text-gray-300"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
