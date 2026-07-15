 "use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Gallery", href: "#gallery" },
  { name: "Experience", href: "#experience" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const whatsappUrl =
  "https://wa.me/34630445982?text=" +
  encodeURIComponent(
    `Hello,

I would like to book Can Mestresso.

Could you please send me the availability and prices?

Thank you.`
  );

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}

          <Link
            href="#home"
            className={`transition-all duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <h1 className="text-3xl tracking-wide">
              Can Mestresso
            </h1>

            <p className="mt-1 text-[10px] uppercase tracking-[0.45em] opacity-80">
              Ibiza
            </p>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-10 lg:flex">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm uppercase tracking-[0.18em] transition ${
                  scrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

          </div>

          {/* Desktop WhatsApp */}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden rounded-full px-7 py-3 text-sm uppercase tracking-[0.15em] transition lg:block ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setOpen(true)}
            className={`lg:hidden ${
              scrolled ? "text-black" : "text-white"
            }`}
            aria-label="Open menu"
          >
            <Menu size={32} />
          </button>

        </nav>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-[100] bg-white transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-10">

          <div>

            <div className="mb-16 flex items-center justify-between">

              <div>

                <h2 className="text-3xl">
                  Can Mestresso
                </h2>

                <p className="uppercase tracking-[0.4em] text-xs text-gray-500">
                  Ibiza
                </p>

              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={32} />
              </button>

            </div>

            <nav className="flex flex-col gap-8">

              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-light"
                >
                  {link.name}
                </Link>
              ))}

            </nav>

          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="rounded-full bg-black py-5 text-center text-white transition hover:bg-gray-800"
          >
            Book Your Stay
          </a>

        </div>
      </div>
    </>
  );
}