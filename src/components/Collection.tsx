import { ArrowRight } from "lucide-react";

import centreRugsImage from "../assets/centre-rugs.jpg";
import fluffyFurRugsImage from "../assets/fur-rugs.jpg";
import artificialPlantsImage from "../assets/plants.jpg";
import artificialGrassImage from "../assets/grass.jpg";
import tableFlowersImage from "../assets/table-flowers.jpg";
import decorativeFlowersImage from "../assets/decor-flowers.jpg";

const collections = [
  {
    title: "Centre Rugs",
    subtitle: "Anchor The Room",
    image: centreRugsImage,
  },
  {
    title: "Fluffy Fur Rugs",
    subtitle: "Softness Underfoot",
    image: fluffyFurRugsImage,
  },
  {
    title: "Artificial Plants",
    subtitle: "Evergreen Calm",
    image: artificialPlantsImage,
  },
  {
    title: "Artificial Grass",
    subtitle: "Outdoor Freshness",
    image: artificialGrassImage,
  },
  {
    title: "Table Flowers",
    subtitle: "Quiet Centrepieces",
    image: tableFlowersImage,
  },
  {
    title: "Decorative Flowers",
    subtitle: "Finishing Touches",
    image: decorativeFlowersImage,
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-[#F4EEE5] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-16 lg:px-16 lg:py-20"
    >
      <div className="mx-auto max-w-300">
        {/* Section Header */}
        <div className="mx-auto max-w-150 text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#C19A58] sm:text-[11px] sm:tracking-[0.48em]">
            The Collection
          </p>

          <h2
            className="mt-5 text-[38px] leading-[1.08] text-[#294D3D] sm:mt-7 sm:text-[48px] md:text-[58px]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Beautiful Pieces.
            <br />
            <span className="italic">Beautiful Spaces.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-139 text-[13px] font-light leading-[1.75] text-[#8E8176] sm:mt-9 sm:text-[14px]">
            Thoughtfully selected décor pieces that bring warmth, character
            and elegance into every space.
          </p>

          <div className="mx-auto mt-7 h-px w-12 bg-[#C19A58] sm:mt-8 sm:w-14" />
        </div>

        {/* Collection Grid */}
        <div className="mt-12 grid gap-6 sm:mt-14 sm:gap-7 md:mt-16 md:grid-cols-3 md:gap-x-8 md:gap-y-8">
          {collections.map((item) => (
            <a
              key={item.title}
              href="#contact"
              className="group block overflow-hidden bg-white"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden sm:h-70 md:h-70">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex min-h-25 items-center justify-between px-5 py-5 sm:h-25 sm:px-6 sm:py-0">
                <div className="min-w-0">
                  <h3
                    className="text-[21px] leading-tight text-[#294D3D] sm:text-[24px]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8E8176] sm:mt-4 sm:text-[10px] sm:tracking-[0.36em]">
                    {item.subtitle}
                  </p>
                </div>

                <ArrowRight
                  size={18}
                  strokeWidth={1.4}
                  className="ml-4 shrink-0 text-[#C19A58] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}