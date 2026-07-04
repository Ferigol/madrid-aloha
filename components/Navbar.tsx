"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Buscas Casa", href: "#aloha-home" },
  { label: "Propietarios", href: "#aloha-property" },
  { label: "Carta Consular", href: "#aloha-cleaning" },
  { label: "Equipo", href: "#equipo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream shadow-sm" : "bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between border-b border-ink/10">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-ma.svg"
            alt="Madrid Aloha"
            width={40}
            height={54}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(l.href.slice(1)); }}
                className="text-xs uppercase tracking-[0.15em] font-medium text-ink/70 hover:text-primary transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <div className="text-xs uppercase tracking-[0.15em] font-medium select-none">
            <span className="text-ink">ES</span>
            <span className="mx-1.5 text-ink/20">|</span>
            <span className="text-ink/30 cursor-not-allowed">EN</span>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ink transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-cream border-b border-ink/10 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-8 flex flex-col gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(l.href.slice(1)); setOpen(false); }}
                className="text-2xl uppercase tracking-[0.15em] font-medium text-ink hover:text-primary transition-colors cursor-pointer"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
