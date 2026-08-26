import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = ["Home", "Collection", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#F3EEE5]">
      <nav
        className="
          mx-auto
          flex
          h-18
          max-w-350
          items-center
          justify-between
          px-5
          sm:h-20
          sm:px-8
          md:px-10
          lg:h-23
          lg:px-16
        "
      >
        {/* Logo */}
        <a href="#home" className="flex flex-col">
          <span
            className="
              text-[20px]
              font-medium
              tracking-[0.14em]
              text-[#234536]
              sm:text-[23px]
              sm:tracking-[0.16em]
              md:text-[25px]
              lg:text-[27px]
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            MAISON ÈLA
          </span>

          <span className="mt-1 text-[7px] font-medium tracking-[0.28em] text-[#B9975B] sm:text-[8px] sm:tracking-[0.32em] md:text-[9px] md:tracking-[0.35em]">
            INTERIOR DÉCOR
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="
                group
                relative
                text-[11px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-[#6E6258]
                transition-colors
                duration-300
                hover:text-[#234536]
              "
            >
              {link}

              {/* Gold hover line */}
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-px
                  w-0
                  bg-[#B9975B]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="
            hidden
            rounded-sm
            bg-[#234536]
            px-7
            py-4
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-white
            transition-all
            duration-300
            hover:bg-[#3A2A20]
            lg:block
            lg:px-8
            lg:text-[11px]
          "
        >
          Get in Touch
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            text-[#234536]
            transition-opacity
            duration-200
            hover:opacity-70
            lg:hidden
          "
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`
          overflow-hidden
          border-t
          border-[#DED6CA]
          bg-[#F3EEE5]
          transition-all
          duration-300
          ease-in-out
          lg:hidden
          ${
            isOpen
              ? "max-h-105 opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <div className="px-5 py-6 sm:px-8">
          <div className="flex flex-col">

            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="
                  border-b
                  border-[#DED6CA]/70
                  py-4
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]
                  text-[#6E6258]
                  transition-colors
                  duration-300
                  hover:text-[#234536]
                "
              >
                {link}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="
                mt-6
                flex
                h-12
                w-full
                items-center
                justify-center
                rounded-sm
                bg-[#234536]
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white
                transition-colors
                duration-300
                hover:bg-[#3A2A20]
              "
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}