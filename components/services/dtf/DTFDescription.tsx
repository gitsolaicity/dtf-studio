
import DTFWorkflow from "./DTFWorkflow";

export default function DTFDescription() {
  return (
    <section id="description" className="scroll-mt-42">
      <h1 className="inline-block text-3xl md:text-3xl font-bold mb-6 px-4 py-2 rounded-lg border border-white/10 bg-gradient-to-r from-white/10 to-white/0 text-[var(--accent)] shadow-sm backdrop-blur-sm">
  DTF-друк
</h1>

      <p className="text-gray-300">
        Сучасний метод переносу зображень на тканину з високою деталізацією, який включає друк малюнків або візерунків на спеціальній плівці, яка потім переноситься на тканину за допомогою термопреса. Цей метод друку ефективний для друку на складних матеріалах, що робить їх більш підходящими до різних застосувань у швейній промисловості.
        Підходить для великих тиражів і унікальних дизайнів.
      </p>
      <div className="flex flex-col py-3 md:flex-row gap-6">
        <DTFWorkflow />
        
      </div>
    </section>
  );
}
