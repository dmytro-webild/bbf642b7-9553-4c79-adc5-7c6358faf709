import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function SelectedPortfolioSection() {
  const items = [
    {
      title: "LUXURY VILLAS",
      subtitle: "Bespoke architectural estates in prime enclave locations.",
      imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-1.webp?_wi=2",
      href: "#properties",
    },
    {
      title: "WATERFRONT RESIDENCES",
      subtitle: "Direct coastal sanctuaries offering uninterrupted sea panoramas.",
      imageSrc: "https://storage.googleapis.com/webild/default/templates/marbella/properties/villa-2.webp?_wi=2",
      href: "#properties",
    },
    {
      title: "YACHTS",
      subtitle: "Discreetly represented superyachts engineered for global navigation.",
      imageSrc: "https://picsum.photos/seed/1240422294/1200/800",
      href: "#contact",
    },
  ];

  return (
    <div
      data-webild-section="selected-portfolio"
      id="selected-portfolio"
      className="relative bg-[#0d0d0d] text-[#faf8f5] py-24 md:py-32 border-b border-[#222222] overflow-hidden"
    >
      {/* Decorative ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#c9a96e]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-content-width mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-8 bg-[#c9a96e]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] font-medium">
              Private Representation
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight text-[#faf8f5] uppercase mb-3">
            SELECTED PORTFOLIO
          </h2>

          <p className="text-sm md:text-base text-[#d0c9bd] font-light tracking-wide max-w-xl">
            Exceptional properties and yachts, privately represented.
          </p>
        </motion.div>

        {/* 3 Luxury Portfolio Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#161616] border border-[#2a241a] shadow-2xl"
            >
              {/* Image with subtle hover zoom */}
              <img
                src={item.imageSrc}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e] font-medium mb-2 block">
                    Collection 0{index + 1}
                  </span>

                  <h3 className="text-xl md:text-2xl font-serif font-light text-[#faf8f5] tracking-wide mb-2 uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#d0c9bd] font-light leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.subtitle}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#c9a96e] group-hover:text-[#faf8f5] font-medium transition-colors">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c9a96e] group-hover:text-[#faf8f5] group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}