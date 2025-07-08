export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-b from-neutral-900 to-black text-white py-24 px-6">
        <div className="text-white p-12">Проверка Tailwind</div>

        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            DTF-печать и вышивка премиум-класса
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Индивидуальный подход к вашему стилю и бренду
          </p>
          <a
            href="#services"
            className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            Наши услуги
          </a>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">DTF-печать</h3>
              <p>
                Яркие и стойкие принты на футболках, худи, и других текстильных изделиях. Идеально для брендов и мерча.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Вышивка</h3>
              <p>
                Компьютерная вышивка высокого качества. Подчеркнёт премиум-уровень вашего бренда.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-800 p-6 rounded-2xl shadow hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Индивидуальный дизайн</h3>
              <p>
                Мы поможем создать уникальный принт или логотип. Работаем по вашему ТЗ или предлагаем свои идеи.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
