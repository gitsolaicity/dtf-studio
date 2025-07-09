export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Бренд */}
        <div>
          <h3 className="text-xl font-bold mb-3 tracking-wide">DTF Star Studio</h3>
          <p className="text-gray-400">Печать, дизайн и стиль для вашего бренда. Мы создаём не просто одежду — мы создаём впечатления.</p>
        </div>

        {/* Меню */}
        <div>
          <h4 className="font-semibold mb-3">Меню</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#services" className="hover:text-white transition">Услуги</a></li>
            <li><a href="#gallery" className="hover:text-white transition">Примеры</a></li>
            <li><a href="#contact" className="hover:text-white transition">Контакты</a></li>
          </ul>
        </div>

        {/* Контакты */}
        <div>
          <h4 className="font-semibold mb-3">Контакты</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Viber: <a href="viber://chat?number=%2B380991112233" className="hover:text-white">+380 99 111 22 33</a></li>
            <li>Email: <a href="mailto:hello@dtfstar.com" className="hover:text-white">hello@dtfstar.com</a></li>
            <li>Instagram: <a href="https://instagram.com/yourstudio" className="hover:text-white">@yourstudio</a></li>
          </ul>
        </div>

        {/* Подписка (заглушка) */}
        <div>
          <h4 className="font-semibold mb-3">Следите за нами</h4>
          <p className="text-gray-400 mb-2">Получайте обновления, акции и свежие идеи.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 border-none text-white placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 rounded-r hover:bg-gray-200 transition"
            >
              →
            </button>
          </form>
        </div>
      </div>

      {/* Линия и копирайт */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} DTF Star Studio. Все права защищены.
      </div>
    </footer>
  );
}
