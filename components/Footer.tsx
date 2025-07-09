export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-black text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Blacklight365</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Креативная студия DTF-печати и стильной одежды. Мы создаём магию на ткани, чтобы ты сиял каждый день.
          </p>
        </div>

        <div>
          <h4 className="uppercase tracking-wider text-xs font-semibold mb-3 text-gray-500">Услуги</h4>
          <ul className="space-y-2 text-sm">
            <li>Печать по макету</li>
            <li>Создание дизайна</li>
            <li>Мелкий и оптовый заказ</li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-wider text-xs font-semibold mb-3 text-gray-500">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>Телефон: <a href="tel:+380123456789" className="hover:text-purple-400 transition">+38 012 345 67 89</a></li>
            <li>Email: <a href="mailto:info@blacklight365.com" className="hover:text-purple-400 transition">info@blacklight365.com</a></li>
            <li>Telegram: <a href="https://t.me/blacklight365" className="hover:text-purple-400 transition">@blacklight365</a></li>
            <li>Viber: <a href="viber://chat?number=%2B380123456789" className="hover:text-purple-400 transition">+38 012 345 67 89</a></li>
          </ul>
        </div>

        <div>
          <h4 className="uppercase tracking-wider text-xs font-semibold mb-3 text-gray-500">Соцсети</h4>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-400 transition">Instagram</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Facebook</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">TikTok</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-600 select-none">
        © {new Date().getFullYear()} Blacklight365. Все права защищены.
      </div>
    </footer>
  );
}
