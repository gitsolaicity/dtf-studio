'use client'

export default function AboutContent() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-28 text-base leading-relaxed text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-semibold mb-6">Про Blacklight</h1>

      <p className="mb-4">
        <strong>Blacklight</strong> — це студія друку, яка поєднує технології, естетику та емоційний резонанс. Ми створюємо речі, які хочеться носити, показувати, дарувати.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Наша місія</h2>
      <p className="mb-4">
        Ми прагнемо зробити друк не просто послугою, а досвідом. Кожен замовлення — це діалог між брендом і людиною, між ідеєю і матеріалом.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Що ми робимо</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>DTF-друк на текстилі та аксесуарах</li>
        <li>Шовкографія для великих тиражів</li>
        <li>Машинна вишивка з преміальним виглядом</li>
        <li>Індивідуальні рішення для брендів, подій та подарунків</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">Чому обирають нас</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Технічна точність і емоційна глибина</li>
        <li>Швидкий термін виконання без втрати якості</li>
        <li>Прозора комунікація і підтримка на кожному етапі</li>
        <li>Дизайн, який говорить мовою вашого бренду</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">Зв’язок з нами</h2>
      <p className="mb-4">
        Маєте ідею, яку хочете втілити? Напишіть нам у Вайбер — ми допоможемо зробити її реальністю.
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
        Останнє оновлення: 21 серпня 2025 року
      </p>
    </div>
  )
}
