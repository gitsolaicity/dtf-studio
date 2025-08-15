'use client';

import { privacyPolicyStructuredData } from './structuredData';

export default function PrivacyPolicyContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicyStructuredData),
        }}
      />
    <div className="max-w-3xl mx-auto px-4 py-28 text-base leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-6">Політика конфіденційності</h1>

      <p className="mb-4">
        Ця політика конфіденційності описує, як компанія <strong>Blacklight</strong> (далі — «ми», «наш сайт», «Blacklight365.com») збирає, використовує та захищає персональні дані користувачів.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">1. Які дані ми збираємо</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Ім’я та прізвище</li>
        <li>Контактний номер телефону</li>
        <li>Електронна пошта</li>
        <li>Файли, завантажені через форму замовлення</li>
        <li>Інформація про обрані послуги (DTF-друк, шовкографія, машинна вишивка)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">2. Як ми використовуємо ваші дані</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Для обробки та виконання замовлень</li>
        <li>Для зв’язку з вами щодо деталей замовлення</li>
        <li>Для покращення якості наших послуг</li>
        <li>Для надсилання оновлень або спеціальних пропозицій (за вашою згодою)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Захист даних</h2>
      <p className="mb-4">
        Ми використовуємо сучасні технічні та організаційні заходи для захисту ваших даних від несанкціонованого доступу, втрати або розголошення.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">4. Передача третім сторонам</h2>
      <p className="mb-4">
        Ми не передаємо ваші персональні дані третім сторонам, за винятком випадків, передбачених законодавством України або необхідних для виконання замовлення (наприклад, служби доставки).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Cookies та аналітика</h2>
      <p className="mb-4">
        Наш сайт може використовувати файли cookies та інструменти аналітики (наприклад, Vercel Analytics) для покращення роботи сайту та аналізу поведінки користувачів.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Ваші права</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Отримати доступ до ваших даних</li>
        <li>Вимагати їх виправлення або видалення</li>
        <li>Відкликати згоду на обробку даних</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Зв’язок з нами</h2>
      <p className="mb-4">
        Якщо у вас є питання щодо цієї політики або обробки ваших даних, напишіть нам на Вайбер
      </p>
      <div className="mb-12">
        <a
          href="viber://chat?number=%2B380689991414"
          className="inline-block bg-purple-700 hover:bg-purple-800 transition text-white px-4 py-1.5 rounded-full shadow-md"
          style={{ boxShadow: '0 0 6px rgba(139, 92, 246, 0.2)' }}
        >
          Написати у Viber
        </a>
      </div>

      <p className="mt-12 text-xs text-gray-500 dark:text-gray-400">
        Останнє оновлення: 12 серпня 2025 року
      </p>
    </div>
</>
  );
}