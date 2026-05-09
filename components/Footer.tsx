import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Buscas Casa",  href: "#aloha-home" },
  { label: "Propietarios", href: "#aloha-property" },
  { label: "Limpieza",     href: "#aloha-cleaning" },
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
    <footer className="bg-ink text-cream">
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
              className="h-8 w-auto mb-6"
              style={{ filter: "brightness(0) invert(1) sepia(0.08) brightness(0.87)" }}
            />
            <p className="text-base md:text-lg text-cream/50 leading-relaxed max-w-xs">
              Ayudamos a estudiantes y trabajadores internacionales a encontrar su hogar en Madrid.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-5">
              Navegación
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-xs text-cream/60 hover:text-cream transition-colors uppercase tracking-[0.1em]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-[10px] uppercase tracking-[0.2em] text-cream/30 mb-5">
              Contacto
            </p>
            <div className="space-y-3">
              <p className="text-base md:text-lg text-cream/60">madrid@madridaloha.com</p>
              <p className="text-base md:text-lg text-cream/60">+34 604 378 361</p>
              <p className="text-base md:text-lg text-cream/60">Los Madroños 22, Madrid</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6">
          <p className="text-[10px] uppercase tracking-[0.15em] text-cream/20">
            © 2025 Madrid Aloha · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-cream/30 hover:text-cream transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
