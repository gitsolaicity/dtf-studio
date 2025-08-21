"use client";

import PrimaryButton from "@/components/PrimaryButton";

export default function TermsOfUseContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-28 text-base leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-6">Умови використання</h1>

      <p className="mb-4">
        Користуючись сайтом <strong>Blacklight365.com</strong>, ви погоджуєтесь
        з наведеними нижче умовами.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Загальні положення</h2>
      <p className="mb-4">
        Сайт призначений для ознайомлення з послугами компанії Blacklight,
        оформлення замовлень та зв’язку з командою.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        2. Інтелектуальна власність
      </h2>
      <p className="mb-4">
        Всі матеріали на сайті (тексти, зображення, логотипи, дизайн) є
        власністю Blacklight або використовуються з дозволу. Заборонено
        копіювати або поширювати без згоди.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        3. Технічна відповідальність
      </h2>
      <p className="mb-4">
        Ми прагнемо забезпечити стабільну роботу сайту, але не гарантуємо його
        безперебійну доступність. Ми не несемо відповідальності за втрату даних
        через технічні збої.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Зміни умов</h2>
      <p className="mb-4">
        Ми можемо змінювати ці умови без попереднього повідомлення. Актуальна
        версія завжди доступна на цій сторінці.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Зв’язок</h2>
      <p className="mb-4">
        Для питань щодо умов використання звертайтесь на наш Вайбер.
      </p>

      <div className="mb-12 text-center px-8 flex flex-col sm:flex-row justify-center gap-4">
        <PrimaryButton
          href="viber://chat?number=%2B380689991414"
          color="purple"
          variant="solid"
        >
          Написати у Viber
        </PrimaryButton>

        <PrimaryButton href="tel:+380689991414" color="blue" variant="solid">
          Зателефонувати
        </PrimaryButton>
      </div>

      <p className="mt-12 text-xs text-gray-500 dark:text-gray-400">
        Останнє оновлення: 12 серпня 2025 року
      </p>
    </div>
  );
}
