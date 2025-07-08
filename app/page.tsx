import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DTF-Печать на Одежде</h1>
        <p className="text-lg md:text-xl mb-6">Яркие и долговечные принты для любого типа ткани</p>
        <a href="#services" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Узнать больше
        </a>
      </section>

      {/* О нас */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
        <p className="text-lg text-gray-700">Мы специализируемся на DTF-печати, предоставляя чёткие и стойкие изображения на любом текстиле. Используем только сертифицированные материалы и профессиональное оборудование.</p>
      </section>

      {/* Услуги */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="Печать по макету" description="Принт по вашему дизайну на любом виде ткани." />
            <ServiceCard title="Создание дизайна" description="Поможем создать макет или отрисовать ваш эскиз." />
            <ServiceCard title="Мелкий и оптовый заказ" description="Работаем от 1 шт. до больших тиражей с доставкой." />
          </div>
        </div>
      </section>

      {/* Примеры */}
      
<section className="py-16 px-6">
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
        <h2 className="text-3xl font-bold mb-6">Связаться с нами</h2>
        <p className="mb-4">Напишите нам в мессенджер или оставьте заявку</p>
        <a href="https://t.me/yourusername" className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Telegram
        </a>
      </section>

      {/* Футер */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DTF Star Studio. Все права защищены.
      </footer>
    </main>
  );
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

