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
      <section
  id="top"
  className="relative bg-black text-white py-32 px-6 text-center overflow-hidden border-b border-cyan-700"
>
  {/* Неоновая сетка фона */}
  <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(#06b6d4_1px,_transparent_1px)] bg-[length:24px_24px]" />

  {/* Верхняя неоновая линия */}
  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-cyan-400 blur-sm opacity-90 animate-pulse z-10" />

  {/* Контент Hero */}
  <div className="relative z-20 max-w-4xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-400 tracking-wide mb-6 drop-shadow-[0_0_15px_#06b6d4]">
      DTF-Печать
    </h1>
    <p className="text-lg md:text-xl text-cyan-100 mb-8">
      Ярко. Стильно. Надолго.
    </p>
    <a
      href="#services"
      className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-full shadow-xl transition duration-300 ring-2 ring-cyan-300"
    >
      Узнать больше
    </a>
  </div>

  {/* Нижняя неоновая линия */}
  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 blur-sm opacity-70 z-10" />
</section>



      {/* О нас */}
      <section
  id="about"
  className="bg-[#0a0a0a] text-gray-300 py-24 px-6 text-center border-t border-gray-800"
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-6 tracking-wide">
      Почему выбирают нас
    </h2>
    <p className="text-lg leading-relaxed text-gray-400">
      Мы — команда дизайнеров и технологов, влюблённых в печать. Сочетаем высокое качество,
      индивидуальный подход и креатив, чтобы воплощать ваши идеи в жизнь — от одного экземпляра
      до крупного тиража.
    </p>
  </div>
</section>

     {/* Услуги */}

<section id="services"
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
<section id="portfolio" className="relative bg-black text-white py-20 px-6 scroll-mt-12 border-t border-gray-800">
  {/* Tron-сетка как фоновый элемент */}
  <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_#06b6d4_1px,_transparent_1px)] bg-[length:22px_22px]" />

  {/* Заголовок */}
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-400 tracking-widest relative z-10">Наши работы</h2>

  {/* Галерея */}
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto relative z-10">
    {[
      "cat-dtf.png",
      "tattoo-dtf.png",
      "love-dtf.png",
      "wolves-dtf.png",
      "bunny-dtf.png",
      "heart-dtf.png",
    ].map((filename, index) => (
      <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition">
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
      <section
  id="contact"
  className="relative py-20 px-6 bg-black text-white text-center scroll-mt-20 overflow-hidden border-1 border-gray-800">
    {/* Здесь вставляется форма (если она отдельным компонентом) */}
    <ContactSection />
</section>


      {/* Футер */}
    <Footer />
    </main>
  );
}

