import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Buscas Casa",  href: "#aloha-home" },
  { label: "Propietarios", href: "#aloha-property" },
  { label: "Carta Consular", href: "#aloha-cleaning" },
  { label: "Equipo",        href: "#equipo" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contacto",     href: "#contacto" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/madridaloha",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/madridaloha",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/madridaloha",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

export default function Footer() {
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
              Ayudamos a estudiantes y trabajadores nacionales a encontrar su hogar en Madrid.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <ul className="space-y-3">
              {navLinks.map((l) => (
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
            © 2025 Madrid Aloha · Todos los derechos reservados
          </p>
          <p className="text-[10px] tracking-[0.15em] text-white/70">
            Proyecto creado por:{" "}
            <a href="https://hostia-agency.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              host<span className="uppercase">IA</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
