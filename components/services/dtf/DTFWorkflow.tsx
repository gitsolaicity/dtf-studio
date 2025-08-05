import Image from "next/image";

export default function DTFWorkflow() {
  const steps = [
    { label: "Розробка дизайну", src: "/images/dtf-a3.png" },
    { label: "Друк на принтері", src: "/images/dtf-a3.png" },
    { label: "Обробка порошком", src: "/images/dtf-a3.png" },
    { label: "Термопрес", src: "/images/dtf-a3.png" },
    { label: "Готова футболка", src: "/images/dtf-a3.png", isFinal: true },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center">Етапи DTF-друку</h3>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center text-center w-full md:w-auto">
            <div className="flex justify-center w-full">
  <div className="relative w-80 h-80 md:w-46 md:h-46">
    <Image
      src={step.src}
      alt={step.label}
      height={320}
      width={320}
      className="object-contain rounded-md shadow-md bg-amber-200/10"
    />
  </div>
</div>


            <p className="mt-2 text-sm py-2 px-3 rounded-md text-gray-300 bg-white/10 w-full md:w-auto">
              {step.label}
            </p>

            {/* Стрелка между блоками */}
            {index < steps.length - 1 && (
              <>
                {/* Мобилка: стрелка вниз */}
                <div className="block md:hidden text-[var(--accent)] text-xl font-black mt-2">
                  ↓
                </div>

                {/* Десктоп: стрелка вправо */}
                <div className="hidden md:block text-[var(--accent)] text-xl font-black mt-2">
                  ➝
                </div>
              </>
            )}

            {/* Иконка финиша под последним блоком */}
            {step.isFinal && (
              <div className="mt-2 text-green-400 text-xl">
                ✅
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
