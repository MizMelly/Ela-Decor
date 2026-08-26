import { ArrowRight } from "lucide-react";
import heroImage from "../assets/hero .jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-72px)] overflow-hidden sm:min-h-[calc(100vh-80px)] lg:min-h-[calc(100vh-92px)]"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Elegant luxury interior"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-[#2F241C]/50 sm:bg-[#2F241C]/45" />

      {/* Left-side gradient for text readability */}
      <div className="absolute inset-0 bg-linear-to-r from-[#241B15]/75 via-[#3A2A20]/35 to-transparent sm:from-[#241B15]/65 sm:via-[#3A2A20]/25" />

      {/* Mobile bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#241B15]/35 to-transparent sm:hidden" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-72px)]
          max-w-350
          items-center
          px-5
          py-12
          sm:min-h-[calc(100vh-80px)]
          sm:px-8
          md:px-10
          lg:min-h-[calc(100vh-92px)]
          lg:px-16
        "
      >
        <div className="max-w-155 pb-2 sm:pb-8">

          {/* Eyebrow */}
          <div className="mb-6 sm:mb-7">
            <p className="text-[8px] font-medium uppercase tracking-[0.3em] text-[#E6C98A] sm:text-[10px] sm:tracking-[0.42em] md:text-[11px]">
              Interior&nbsp;&nbsp; Décor&nbsp;&nbsp; Lifestyle
            </p>

            <div className="mt-5 h-px w-10 bg-[#C19A58] sm:mt-6 sm:w-14" />
          </div>

          {/* Heading */}
          <h1
            className="
              text-[43px]
              leading-[0.98]
              tracking-[-0.03em]
              text-[#F8F3EA]
              sm:text-[60px]
              md:text-[76px]
              lg:text-[92px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Elevate
            <br />
            <span className="italic text-[#E6D1A8]">
              Your Space
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-107.5
              text-[13px]
              font-light
              leading-[1.75]
              text-[#F3EDE4]/90
              sm:mt-8
              sm:text-[15px]
              sm:leading-[1.9]
              md:text-[16px]
            "
          >
            Beautiful décor pieces designed to make your home feel warmer,
            softer and more luxurious.
          </p>

          {/* Buttons */}
          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3
              sm:mt-9
              sm:w-auto
              sm:flex-row
              sm:flex-wrap
              sm:items-center
              sm:gap-4
            "
          >
            {/* Primary */}
            <a
              href="#collection"
              className="
                group
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-3
                rounded-[3px]
                bg-[#C29A58]
                px-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:bg-[#D0AA6A]
                sm:h-13
                sm:w-auto
                sm:px-7
                sm:text-[11px]
                sm:tracking-[0.18em]
              "
            >
              Explore Collection

              <ArrowRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Secondary */}
            <a
              href="#contact"
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-[3px]
                border
                border-white/55
                px-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
                transition-all
                duration-300
                hover:border-white
                hover:bg-white/10
                sm:h-13
                sm:w-auto
                sm:px-7
                sm:text-[11px]
                sm:tracking-[0.18em]
              "
            >
              Chat With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}