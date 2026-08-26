import philosophyImage from "../assets/lifestyle.jpg";

export default function Philosophy() {
  return (
    <section className="bg-[#E9DECC] px-5 py-14 sm:px-8 sm:py-18 md:px-10 lg:px-16 lg:py-20">
      <div className="relative mx-auto max-w-300 lg:min-h-141.25">

        {/* Image */}
        <div className="relative w-full lg:max-w-177.5">
          <img
            src={philosophyImage}
            alt="Warm living room with layered decor and greenery"
            className="
              h-85
              w-full
              object-cover
              shadow-[0_24px_60px_rgba(76,57,36,0.16)]
              sm:h-105
              md:h-125
              lg:h-140
            "
          />

          {/* Decorative Inner Border */}
          <div className="pointer-events-none absolute inset-3 border border-[#D4B783]/45 sm:inset-4" />
        </div>

        {/* Content Card */}
        <div
          className="
            relative
            z-10
            -mt-px
            w-full
            bg-[#F7F1E8]
            px-6
            py-10
            shadow-[0_22px_60px_rgba(76,57,36,0.12)]
            sm:px-10
            sm:py-12
            md:px-14
            md:py-14
            lg:absolute
            lg:right-3
            lg:top-12
            lg:mt-0
            lg:w-[49%]
            lg:px-13
            lg:py-14
          "
        >
          {/* Eyebrow */}
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-[#C19A58] sm:text-[11px] sm:tracking-[0.48em]">
            The Philosophy
          </p>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-[33px]
              leading-[1.18]
              text-[#294D3D]
              sm:mt-7
              sm:text-[40px]
              md:text-[46px]
              lg:text-[45px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            The Little Details Make
            <br />
            the <span className="italic">Difference</span>
          </h2>

          {/* Divider */}
          <div className="mt-6 h-px w-12 bg-[#C19A58] sm:mt-8 sm:w-14" />

          {/* Description */}
          <p
            className="
              mt-6
              max-w-130
              text-[13px]
              font-light
              leading-[1.8]
              text-[#8E8176]
              sm:mt-8
              sm:text-[14px]
              md:text-[15px]
              md:leading-loose
            "
          >
            Sometimes, all a space needs is the right rug, a touch of greenery
            or a beautiful floral arrangement to completely transform how it
            feels.
          </p>

          {/* Button */}
          <a
            href="#collection"
            className="
              mt-8
              inline-flex
              h-12
              w-full
              items-center
              justify-center
              border
              border-[#C19A58]
              px-6
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#4B3C31]
              transition-all
              duration-300
              hover:bg-[#C19A58]
              hover:text-white
              sm:mt-10
              sm:h-13
              sm:w-auto
              sm:px-8
              sm:text-[11px]
              sm:tracking-[0.22em]
              lg:mt-12
            "
          >
            Discover Our Collection
          </a>
        </div>
      </div>
    </section>
  );
}