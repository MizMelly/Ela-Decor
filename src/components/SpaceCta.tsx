import interiorImage from "../assets/cta.jpg";

export default function SpaceCta() {
  return (
    <section className="bg-[#F5F1E9] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:px-16 lg:py-16">
      <div className="mx-auto grid max-w-300 overflow-hidden border border-[#D9C8AE] md:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col justify-center bg-[#E9DDCC] px-6 py-12 sm:px-10 sm:py-14 md:px-12 lg:px-16 lg:py-16">
          {/* Eyebrow */}
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#C19A58] sm:text-[10px] sm:tracking-[0.48em]">
            Let&apos;s Begin
          </p>

          {/* Heading */}
          <h2
            className="
              mt-5
              max-w-125
              text-[34px]
              leading-[1.15]
              text-[#294D3D]
              sm:mt-7
              sm:text-[40px]
              md:text-[44px]
              lg:text-[48px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Your Space Deserves
            <br />
            More Than{" "}
            <span className="italic">Ordinary.</span>
          </h2>

          {/* Gold Divider */}
          <div className="mt-6 h-px w-12 bg-[#C19A58] sm:mt-8 sm:w-14" />

          {/* Description */}
          <p className="mt-6 max-w-107.5 text-[13px] font-light leading-[1.8] text-[#8E8176] sm:mt-7 sm:text-[14px]">
            Let beautiful details transform the way your home feels.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#collection"
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                bg-[#294D3D]
                px-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-white
                transition-colors
                duration-300
                hover:bg-[#1F3B2F]
                sm:h-13
                sm:w-auto
                sm:px-7
                sm:text-[10px]
                sm:tracking-[0.18em]
              "
            >
              Explore Our Collection
            </a>

            <a
              href="#contact"
              className="
                inline-flex
                h-12
                w-full
                items-center
                justify-center
                border
                border-[#C19A58]
                bg-transparent
                px-6
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[#294D3D]
                transition-colors
                duration-300
                hover:bg-[#C19A58]
                hover:text-white
                sm:h-13
                sm:w-auto
                sm:px-8
                sm:text-[10px]
                sm:tracking-[0.18em]
              "
            >
              Chat With Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-70 overflow-hidden sm:h-90 md:h-full md:min-h-130">
          <img
            src={interiorImage}
            alt="Beautifully styled interior space"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              hover:scale-[1.02]
            "
          />
        </div>
      </div>
    </section>
  );
}