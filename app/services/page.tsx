import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/services/ServiceCard';
import { ArrowLeft } from 'lucide-react';
import PrimaryButton from '@/components/PrimaryButton';

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-white">
      <Navbar />
      <main className="flex-1 pt-28 w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-12">
        <h1 className="text-4xl font-bold text-white mb-14 text-center drop-shadow-lg">
  Наші послуги
</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
  title="DTF-друк"
  description="Яскравий і деталізований друк на тканині."
  href="/services/dtf"
  imageSrc="/images/love-dtf.png"
/>
<ServiceCard
  title="Вишивка"
  description="Преміальна машинна вишивка логотипів."
  href="/services/embroidery"
  imageSrc="/images/emb-girl.jpg"
/>
<ServiceCard
  title="Шовкографія"
  description="Класичний друк фарбами через трафарет."
  href="/services/silkscreen"
  imageSrc="/images/cat-dtf.png"
/>
        </div>
        <div className="flex justify-center mt-12">
  <PrimaryButton href="/" variant="subtle" icon={<ArrowLeft size={18} />}>Назад на головну</PrimaryButton>
       </div>
      </main> 
      <Footer />
    </div>
  );
}
