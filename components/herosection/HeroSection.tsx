import BackgroundScrollStrip from "@/components/herosection/BackgroundScrollStrip";

const sections = [
  {
    href: "/services/dtf",
    id: "dtf",
    title: "DTF-Друк",
    subtitle: "Яскравий DTF-друк на будь-якому етапі виробництва.",
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
    subtitle: "Професійна машинна вишивка на етапі розкрою.",
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
  rose: {
    text: "text-rose-400",
    subtext: "text-rose-100",
    bg: "bg-rose-500",
    hover: "hover:bg-rose-300",
    ring: "ring-rose-200",
    line: "bg-rose-400",
    grid: "bg-[radial-gradient(#fb7185_1px,_transparent_1px)]",
    shadow: "drop-shadow-[0_0_15px_#fb7185]",
  },
  lime: {
    text: "text-lime-400",
    subtext: "text-lime-100",
    bg: "bg-lime-500",
    hover: "hover:bg-lime-300",
    ring: "ring-lime-200",
    line: "bg-lime-400",
    grid: "bg-[radial-gradient(#a3e635_1px,_transparent_1px)]",
    shadow: "drop-shadow-[0_0_15px_#a3e635]",
  },
};

export default function HeroSection() {
  return (
    <div className="pt-16.5"> {/* отступ от фиксированного navbar */}
    <>
      {sections.map(({ id, title, subtitle, images, reverse, color, href }) => {
        const styles = colorMap[color as keyof typeof colorMap];
        return (
          <section
            key={id}
            id={id}
            className="relative bg-black text-white py-18 px-6 text-center overflow-hidden"
          >
            <BackgroundScrollStrip images={images} reverse={reverse} />

            {/* Контент секции */}
            <div className="relative z-20 max-w-4xl mx-auto">
              <h1 className={`text-5xl md:text-6xl font-extrabold ${styles.text} tracking-wide mb-6 ${styles.shadow}`}>
                {title}
              </h1>
              <p className={`text-lg md:text-xl ${styles.subtext} mb-8`}>
                {subtitle}
              </p>
              <a
                href={href}
                className={`inline-block ${styles.bg} ${styles.hover} text-black font-semibold px-8 py-3 rounded-full shadow-xl transition duration-300 ring-2 ${styles.ring}`}
              >
                Детальніше
              </a>
            </div>
          </section>
        );
      })}
    </>
    </div>
  );
}
