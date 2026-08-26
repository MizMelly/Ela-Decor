export default function QuoteSection() {
  return (
    <section
      className="
        relative
        flex
        min-h-100
        items-center
        justify-center
        overflow-hidden
        bg-[#234536]
        px-5
        py-16
        sm:min-h-112.5
        sm:px-10
        sm:py-20
        md:min-h-125
        lg:min-h-133.75
        lg:py-24
      "
    >
      {/* Decorative Circle - Top Left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-56
          w-56
          rounded-full
          border
          border-[#C19A58]/20
          sm:-left-32
          sm:-top-32
          sm:h-72
          sm:w-72
          md:-left-36
          md:-top-36
          md:h-85
          md:w-85
        "
        aria-hidden="true"
      />

      {/* Decorative Circle - Bottom Right */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          -right-28
          h-72
          w-72
          rounded-full
          border
          border-[#C19A58]/20
          sm:-bottom-36
          sm:-right-32
          sm:h-88
          sm:w-88
          md:-bottom-45
          md:-right-39
          md:h-107.5
          md:w-107.5
        "
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-225 flex-col items-center text-center">

        {/* Top Gold Line */}
        <div className="h-px w-10 bg-[#C19A58] sm:w-14" />

        {/* Quote */}
        <blockquote
          className="
            mt-8
            max-w-85
            text-[28px]
            leading-[1.3]
            text-[#F4EEE5]
            sm:mt-10
            sm:max-w-162.5
            sm:text-[36px]
            md:max-w-200
            md:text-[46px]
            lg:text-[50px]
          "
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
          }}
        >
          “A beautiful space is created one
          <br className="hidden sm:block" />
          thoughtful detail at a time.”
        </blockquote>

        {/* Bottom Gold Line */}
        <div className="mt-8 h-px w-10 bg-[#C19A58] sm:mt-10 sm:w-14" />

        {/* Brand */}
        <p
          className="
            mt-6
            text-[8px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-[#C19A58]
            sm:mt-7
            sm:text-[10px]
            sm:tracking-[0.48em]
          "
        >
          Maison Èla
        </p>
      </div>
    </section>
  );
}