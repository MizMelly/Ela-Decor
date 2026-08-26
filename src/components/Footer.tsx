import { MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collection", href: "#collection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: MessageCircle, href: "#", label: "Chat" },
];

export default function SpaceFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#3A2A22] px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-16">
      <div className="mx-auto max-w-300">
        {/* Main Footer */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            text-center
            sm:grid-cols-2
            sm:gap-12
            sm:text-left
            lg:grid-cols-[1.3fr_1fr_1fr]
            lg:gap-16
          "
        >
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2
              className="text-[25px] tracking-[0.08em] text-[#F5F1E9] sm:text-[26px]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Maison Èla
            </h2>

            <p className="mx-auto mt-4 max-w-70 text-[13px] font-light leading-[1.8] text-[#B9AA9C] sm:mx-0">
              Elegant décor pieces for beautiful spaces.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-4 sm:items-start">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="
                  w-fit
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#EAE1D3]
                  transition-colors
                  duration-300
                  hover:text-[#C19A58]
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex flex-col items-center sm:items-start lg:items-end">
            <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#C19A58]">
              Follow
            </p>

            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#6B5A4C]
                    text-[#EAE1D3]
                    transition-all
                    duration-300
                    hover:border-[#C19A58]
                    hover:text-[#C19A58]
                  "
                >
                  <Icon
                    size={16}
                    {...(label === "Chat" ? { strokeWidth: 1.5 } : {})}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-[#5A4A3D] sm:mt-12" />

        {/* Bottom Bar */}
        <p className="mt-6 text-center text-[9px] uppercase tracking-[0.14em] text-[#8E8176] sm:text-left sm:text-[10px] sm:tracking-[0.18em]">
          © {year} Maison Èla. All rights reserved.
        </p>
      </div>
    </footer>
  );
}