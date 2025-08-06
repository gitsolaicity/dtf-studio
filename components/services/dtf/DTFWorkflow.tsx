import Image from "next/image";

export default function DTFWorkflow() {
  const steps = [
    { label: "Розробка дизайну", src: "/images/dtfproc/computedesign.jpg" },
    { label: "Друк на принтері", src: "/images/dtfproc/dtfprint.jpg" },
    { label: "Обробка порошком", src: "/images/dtfproc/powdering.jpg" },
    { label: "Термопрес", src: "/images/dtfproc/thermopress.jpg" },
    { label: "Готова футболка", src: "/images/dtfproc/finishedproducts2.jpg", isFinal: true },
  ];

  return (
    <section className="mt-16">
      <h3 className="text-2xl font-bold mb-6 text-center md:text-left">Етапи DTF-друку</h3>
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
      className="object-contain rounded-md shadow-md opacity-75"
    />
  </div>
</div>


            <p className="mt-2 text-base py-2 px-3 rounded-md text-gray-300">
              {step.label}
            </p>

            {/* Стрелка между блоками */}
            {index < steps.length - 1 && (
              <>
                {/* Мобилка: стрелка вниз */}
                <div className="block md:hidden text-white/80 text-xl font-black mt-2">
                  ↓
                </div>

                {/* Десктоп: стрелка вправо */}
                <div className="hidden md:block text-white/80 text-xl font-black mt-2">
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
