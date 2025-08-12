// app/contact/page.tsx

import Link from "next/link";
import OrderFormSection from "@/components/forms/OrderFormSection";// если форма уже есть

export const metadata = {
  title: "Контакти — Blacklight",
  description: "Зв’яжіться з нами для замовлення друку, вишивки або консультації.",
};

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-12 px-6">
          {/* Можно вставить форму прямо тут или компонент */}
          <OrderFormSection />
          <p className="text-gray-400 text-center text-lg">
          Ми завжди на зв’язку. Залиште повідомлення або напишіть нам напряму.
        </p>
    </section>
  );
}
