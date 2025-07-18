'use client';

import Link from 'next/link';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageSrc: string; // путь к изображению из /public/images
}

export default function ServiceCard({ title, description, href, imageSrc }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="relative block h-72 rounded-xl overflow-hidden group"
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

      {/* Text content */}
      <div className="absolute bottom-0 p-6 z-10">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </Link>
  );
}
