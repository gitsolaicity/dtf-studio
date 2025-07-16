'use client';

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="group relative rounded-xl cursor-pointer border border-[#e0e0e0]/20 p-6 bg-black/40 hover:bg-cyan-900/10 transition duration-300 hover:shadow-[0_0_2px_#06b6d4]">
      <div className="absolute inset-0 rounded-xl border border-[#e0e0e0]/20 opacity-50 pointer-events-none" />
      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
