"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToSection } from "@/lib/scrollToSection";
import { useLang } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, tr } = useLang();

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
          {tr.nav.links.map((l) => (
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
          <div className="text-xs uppercase tracking-[0.15em] font-medium select-none flex items-center">
            <button
              onClick={() => setLang("es")}
              className={`transition-colors duration-200 ${lang === "es" ? "text-ink font-bold" : "text-ink/40 hover:text-ink/70"}`}
            >
              ES
            </button>
            <span className="mx-1.5 text-ink/20">|</span>
            <button
              onClick={() => setLang("en")}
              className={`transition-colors duration-200 ${lang === "en" ? "text-ink font-bold" : "text-ink/40 hover:text-ink/70"}`}
            >
              EN
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label={lang === "es" ? "Abrir menú" : "Open menu"}
          >
            <span className={`block w-6 h-px bg-ink transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-6 h-px bg-ink transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
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
          {tr.nav.links.map((l) => (
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
