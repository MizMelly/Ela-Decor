import { ArrowRight } from "lucide-react";

import centreRugsImage from "../assets/centre-rugs.jpg";
import fluffyFurRugsImage from "../assets/fur-rugs.jpg";
import artificialPlantsImage from "../assets/plants.jpg";
import tableFlowersImage from "../assets/table-flowers.jpg";

const showcaseItems = [
  {
    title: "Luxury Centre Rugs",
    description:
      "Grounding textures that give a living room its quiet centre.",
    image: centreRugsImage,
  },
  {
    title: "Soft Fluffy Fur Rugs",
    description:
      "Cloud-soft layers that make any corner feel indulgent.",
    image: fluffyFurRugsImage,
  },
  {
    title: "Elegant Table Flowers",
    description:
      "Sculptural arrangements styled for dining and console tables.",
    image: tableFlowersImage,
  },
  {
    title: "Beautiful Artificial Plants",
    description:
      "Lifelike greenery that stays perfect through every season.",
    image: artificialPlantsImage,
  },
];

export default function Showcase() {
  return (
    <section
      className="
        bg-[#F4EEE5]
        px-5
        py-14
        sm:px-8
        sm:py-18
        md:px-10
        lg:px-16
        lg:py-24
      "
    >
      <div className="mx-auto max-w-300">

        {/* Section Heading */}
        <div className="max-w-160">
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#C19A58]
              sm:text-[11px]
              sm:tracking-[0.48em]
            "
          >
            Showcase
          </p>

          <h2
            className="
              mt-5
              max-w-90
              text-[34px]
              leading-[1.18]
              text-[#294D3D]
              sm:mt-7
              sm:max-w-150
              sm:text-[44px]
              md:text-[52px]
              lg:text-[56px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Pieces That Bring Your Space
            <br />
            to <span className="italic">Life</span>
          </h2>

          <div className="mt-6 h-px w-12 bg-[#C19A58] sm:mt-8 sm:w-14" />
        </div>

        {/* Showcase Grid */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-14
            sm:mt-14
            sm:gap-16
            md:grid-cols-2
            md:gap-x-8
            md:gap-y-20
            lg:mt-16
            lg:gap-x-10
          "
        >
          {showcaseItems.map((item, index) => (
            <article
              key={item.title}
              className={index % 2 === 1 ? "md:translate-y-20" : ""}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    h-75
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.02]
                    sm:h-95
                    md:h-105
                    lg:h-110
                  "
                />
              </div>

              {/* Divider */}
              <div className="mt-6 h-px w-full bg-[#E4D7C5] sm:mt-7" />

              {/* Title */}
              <h3
                className="
                  mt-5
                  text-[22px]
                  leading-[1.2]
                  text-[#294D3D]
                  sm:mt-7
                  sm:text-[26px]
                  lg:text-[28px]
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-4
                  max-w-125
                  text-[13px]
                  font-light
                  leading-[1.8]
                  text-[#8E8176]
                  sm:mt-5
                  sm:text-[14px]
                "
              >
                {item.description}
              </p>

              {/* Link */}
              <a
                href="#collection"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#C19A58]
                  transition-colors
                  duration-300
                  hover:text-[#294D3D]
                  sm:mt-6
                  sm:gap-4
                  sm:text-[11px]
                  sm:tracking-[0.28em]
                "
              >
                View Collection

                <ArrowRight
                  size={15}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}