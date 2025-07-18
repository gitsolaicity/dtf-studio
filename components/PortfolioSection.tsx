import Image from "next/image";

const images = [
  "cat-dtf.png",
  "tattoo-dtf.png",
  "love-dtf.png",
  "wolves-dtf.png",
  "bunny-dtf.png",
  "heart-dtf.png",
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative bg-black text-white py-20 px-6 scroll-mt-12 border-t border-[#e0e0e0]/20"
    >
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_#06b6d4_1px,_transparent_1px)] bg-[length:22px_22px]" />

      <h2 className="text-4xl font-bold text-center mb-12 text-gray-300 tracking-widest relative z-10">
        Наші роботи
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto relative z-10">
        {images.map((filename, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition"
          >
            <Image
              src={`/images/${filename}`}
              alt={`Пример работы ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index === 1}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
