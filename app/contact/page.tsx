import OrderFormSection from "@/components/forms/OrderFormSection";

export const metadata = {
  title: "Контакти — Blacklight",
  description: "Зв’яжіться з нами для замовлення друку, вишивки або консультації.",
};

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-12 px-6">
      {/* 👇 Structured data прямо в JSX */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Головна",
                "item": "https://blacklight365.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Контакти",
                "item": "https://blacklight365.com/contact"
              }
            ]
          }),
        }}
      />

      <OrderFormSection />
      <p className="text-gray-400 text-center text-lg">
        Ми завжди на зв’язку. Залиште повідомлення або напишіть нам напряму.
      </p>
    </section>
  );
}
