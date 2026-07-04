"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/context/LanguageContext";

const socials = [
  { label: "Instagram", href: "https://instagram.com/madridaloha" },
  { label: "LinkedIn",  href: "https://linkedin.com/company/madridaloha" },
  { label: "Facebook",  href: "https://facebook.com/madridaloha" },
];

export default function Footer() {
  const { tr } = useLang();
  return (
    <footer className="text-cream" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-cream/10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Image
              src="/logo-ma-completo.svg"
              alt="Madrid Aloha"
              width={800}
              height={133}
              className="h-[26px] w-auto mb-6"
              style={{ filter: "brightness(0) invert(1) sepia(0.08) brightness(0.87)" }}
            />
            <p className="text-sm text-white leading-relaxed max-w-xs">
              {tr.footer.description}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <ul className="space-y-3">
              {tr.nav.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[12px] text-white hover:text-white/70 transition-colors uppercase tracking-[0.1em]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 md:col-start-10">
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-white hover:text-white/70 transition-colors"
                >
                  <span className="text-[14px] font-bold uppercase tracking-wide">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <p className="text-[10px] tracking-[0.15em] text-white">
            {tr.footer.copyright}
          </p>
          <p className="text-[10px] tracking-[0.15em] text-white/70">
            {tr.footer.createdBy}{" "}
            <a href="https://hostia-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              host<span className="uppercase">IA</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
