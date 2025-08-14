import OrderFormSection from "@/components/forms/OrderFormSection";

export const metadata = {
  title: "Контакти — Blacklight",
  description: "Зв’яжіться з нами для замовлення друку, вишивки або консультації.",
};

export default function ContactPage() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <OrderFormSection />
      <p className="text-gray-400 text-center text-lg">
        Ми завжди на зв’язку. Залиште повідомлення або напишіть нам напряму.
      </p>
    </section>
  );
}
