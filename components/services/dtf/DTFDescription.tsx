import Image from "next/image";
import DTFWorkflow from "./DTFWorkflow";

export default function DTFDescription() {
  return (
    <section id="description" className="pt-16 scroll-mt-32">
      <h2 className="text-3xl font-bold mb-4">DTF-друк</h2>
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
