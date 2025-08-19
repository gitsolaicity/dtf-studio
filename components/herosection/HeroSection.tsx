import BackgroundScrollStrip from "@/components/herosection/BackgroundScrollStrip";
import PrimaryButton from "../PrimaryButton";

const sections = [
  {
    href: "/services/dtf",
    id: "dtf",
    title: "DTF-Друк",
    subtitle: "Яскравий DTF-друк на етапі виробництва.",
    color: "cyan",
    images: [
      "/images/cat-dtf.png",
      "/images/love-dtf.png",
      "/images/bunny-dtf.png",
      "/images/wolves-dtf.png",
      "/images/tattoo-dtf.png",
    ],
    reverse: false,
  },
  {
    href: "/services/embroidery",
    id: "embroidery",
    title: "Вишивка",
    subtitle: "Професійна машинна вишивка.",
    color: "cyan",
    images: [
      "/images/emb-girl.jpg",
      "/images/emb-girl-2.jpg",
      "/images/emb-blue.jpg",
      "/images/emb-p.jpg",
      "/images/emb-pillow.jpg",
    ],
    reverse: true,
  },
  {
    href: "/services/silkscreen",
    id: "silkscreen",
    title: "Шовкографія",
    subtitle: "Друк шовкографією на деталях крою.",
    color: "cyan",
    images: [
      "/images/cat-dtf.png",
      "/images/love-dtf.png",
      "/images/bunny-dtf.png",
      "/images/wolves-dtf.png",
      "/images/tattoo-dtf.png",
    ],
    reverse: false,
  },
];

const colorMap = {
  cyan: {
    text: "text-cyan-200",
    subtext: "text-cyan-100",
    bg: "bg-cyan-500",
    hover: "hover:bg-cyan-300",
    ring: "ring-cyan-200",
    line: "bg-cyan-400",
    grid: "bg-[radial-gradient(#06b6d4_1px,_transparent_1px)]",
    shadow: "drop-shadow-[0_0_15px_#06b6d4]",
  },
};

export default function HeroSection() {
  return (
    <div className="pt-16"> {/* отступ от фиксированного navbar */}
    <>
      {sections.map(({ id, title, subtitle, images, reverse, color, href }) => {
        const styles = colorMap[color as keyof typeof colorMap];
        return (
          <section
            key={id}
            id={id}
            className="relative bg-black text-white py-14 px-6 text-center overflow-hidden"
          >
            <BackgroundScrollStrip images={images} reverse={reverse} />

            {/* Контент секции */}
            <div className="relative z-20 max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-6xl font-extrabold ${styles.text} tracking-wide mb-5 ${styles.shadow}`}>
                {title}
              </h1>
              <p className={`text-lg md:text-xl ${styles.subtext} mb-8`}>
                {subtitle}
              </p>
              
              <PrimaryButton 
                href={href}
                variant="solid"
                color="cyan"
                className={`inline-block ${styles.bg} ${styles.hover} text-black font-semibold rounded-full shadow-xl transition duration-300 ring-2 ${styles.ring}`}
              >
                Детальніше
              </PrimaryButton>
            </div>
          </section>
        );
      })}
    </>
    </div>
  );
}
