import { Diamond, Feather, Layers, Sparkles } from "lucide-react";

const reasons = [
  {
    title: "Elegant Pieces",
    description:
      "Beautiful décor selected to complement modern interiors.",
    icon: Diamond,
  },
  {
    title: "Beautiful Finishing",
    description:
      "Small details that make a room feel complete.",
    icon: Feather,
  },
  {
    title: "Versatile Décor",
    description:
      "Perfect for homes, offices, events and special spaces.",
    icon: Layers,
  },
  {
    title: "Transform Your Space",
    description:
      "Simple décor pieces that create a noticeable difference.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#E9DECC] px-5 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-300">

        {/* Section Heading */}
        <div className="text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#C19A58] sm:text-[11px] sm:tracking-[0.48em]">
            Why Choose Us
          </p>

          <h2
            className="
              mx-auto
              mt-5
              max-w-85
              text-[34px]
              leading-[1.15]
              text-[#294D3D]
              sm:mt-7
              sm:max-w-150
              sm:text-[42px]
              md:text-[48px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Considered in Every{" "}
            <span className="italic">Detail</span>
          </h2>

          <div className="mx-auto mt-6 h-px w-12 bg-[#C19A58] sm:mt-8 sm:w-14" />
        </div>

        {/* Reasons */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-4
            sm:mt-14
            sm:grid-cols-2
            sm:gap-5
            lg:mt-16
            lg:grid-cols-4
            lg:gap-6
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="
                  bg-[#F7F1E8]
                  px-7
                  py-8
                  text-center
                  transition-transform
                  duration-300
                  hover:-translate-y-1
                  sm:px-8
                  sm:py-9
                  sm:text-left
                  lg:px-9
                  lg:py-10
                "
              >
                {/* Icon */}
                <div className="flex justify-center sm:justify-start">
                  <Icon
                    size={23}
                    strokeWidth={1.3}
                    className="text-[#C19A58]"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-6
                    text-[20px]
                    leading-tight
                    text-[#294D3D]
                    sm:mt-8
                    sm:text-[21px]
                    lg:mt-9
                    lg:text-[22px]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-[13px] font-light leading-[1.75] text-[#8E8176] sm:mt-5 sm:text-[14px] lg:mt-6">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}