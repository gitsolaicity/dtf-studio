import ServiceCard from "./ServiceCard";

const services = [
  { title: "Друк по макету", description: "Принт за вашим дизайном на будь-якому типі тканини." },
  { title: "Розробка дизайну", description: "Допоможемо створити макет або намалювати ваш ескіз." },
  { title: "Дрібне та оптове замовлення", description: "Працюємо від 1 шт. до великих тиражів із доставкою." },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 bg-black scroll-mt-12 overflow-hidden"
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
        <h2 className="text-4xl font-bold text-center text-gray-300 mb-12 tracking-widest">
          Переваги
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
  );
}
