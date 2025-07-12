// app/dashboard/page.tsx
export default function DashboardHome() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">Добро пожаловать в святая святых</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-neutral-800 p-6 rounded-lg border border-cyan-800">
          <h2 className="text-xl font-semibold mb-2">Клиенты</h2>
          <p className="text-gray-400">Пока 0 записей</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg border border-cyan-800">
          <h2 className="text-xl font-semibold mb-2">Заказы</h2>
          <p className="text-gray-400">Пока 0 заказов</p>
        </div>
        <div className="bg-neutral-800 p-6 rounded-lg border border-cyan-800">
          <h2 className="text-xl font-semibold mb-2">Настройки</h2>
          <p className="text-gray-400">Управление профилем</p>
        </div>
      </div>
    </div>
  );
}
