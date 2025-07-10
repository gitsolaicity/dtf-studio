import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

const services = [
  { title: "Печать по макету", description: "Принт по вашему дизайну на любом виде ткани." },
  { title: "Создание дизайна", description: "Поможем создать макет или отрисовать ваш эскиз." },
  { title: "Мелкий и оптовый заказ", description: "Работаем от 1 шт. до больших тиражей с доставкой." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 scroll-smooth">
      <Navbar />
      {/* Hero */}
      <section id="top" className="bg-black text-white py-28 px-6 text-center">
  <h1 className="text-5xl font-bold mb-4">DTF-Печать</h1>
  <p className="text-lg text-gray-400 mb-6">Ярко. Стильно. Надолго.</p>
  <a
    href="#services"
    className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
  >
    Узнать больше
  </a>
</section>

      {/* О нас */}
      <section id="about" className="bg-neutral-900 text-gray-300 py-20 px-6 text-center">
  <h2 className="text-3xl font-bold text-white mb-4">Почему выбирают нас</h2>
  <p className="max-w-2xl mx-auto">Качество печати, внимание к деталям и любовь к дизайну.</p>
</section>

     {/* Услуги */}

<section
  id="services"
  className="relative py-20 px-6 bg-black scroll-mt-12 border-t border-gray-800 overflow-hidden"
>
  <div
    className="absolute inset-0 pointer-events-none z-0"
    style={{
      backgroundImage: "radial-gradient(#06b6d4 1px, transparent 1px)",
      backgroundSize: "20px 20px",
      opacity: 0.06,
    }}
  />

  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12 tracking-widest">
      Наши услуги
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((item, index) => (
        <ServiceCard
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  </div>
</section>




 {/* Примеры */}    
<section id="portfolio" className="py-16 px-6 scroll-mt-12">
  <h2 className="text-3xl font-bold text-center mb-12">Наши работы</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
    {["cat-dtf.png", "tattoo-dtf.png", "love-dtf.png", "wolves-dtf.png", "bunny-dtf.png", "heart-dtf.png"].map((filename, index) => (
      <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-inner">
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

      {/* Контакты */}
      <section className="py-16 px-6 bg-gray-900 text-white text-center">

        {/* Форма */}
  <ContactSection />
      </section>

      {/* Футер */}
    <Footer />
    </main>
  );
}


/*function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}*/

