import Link from "next/link";

const paths = [
  {
    num: "01",
    id: "aloha-home",
    label: "Busco dónde vivir",
    name: "Aloha Home",
    tagline: "Para estudiantes y trabajadores",
    summary:
      "Llegás a Madrid y necesitas un lugar donde quedarte. Nosotros encontramos el piso o habitación, gestionamos el contrato y te recibimos en el aeropuerto. Tú solo tienes que hacer las maletas.",
    highlights: ["Pisos amueblados", "Cerca de tu universidad", "Recogida en aeropuerto", "Trámites administrativos"],
    cta: "Quiero encontrar mi piso",
    href: "#aloha-home",
    accent: true,
  },
  {
    num: "02",
    id: "aloha-property",
    label: "Quiero alquilar mi piso",
    name: "Aloha Property",
    tagline: "Para propietarios",
    summary:
      "Tienes un piso en Madrid y quieres alquilarlo con garantías. Nosotros encontramos el inquilino ideal, gestionamos el contrato y atendemos todas las incidencias. Tú nunca recibes una llamada.",
    highlights: ["Inquilinos verificados", "Gestión 24/7", "Sin llamadas al propietario", "Máxima rentabilidad"],
    cta: "Quiero alquilar mi piso",
    href: "#aloha-property",
    accent: false,
  },
  {
    num: "03",
    id: "aloha-cleaning",
    label: "Necesito limpieza",
    name: "Carta de acomodación",
    tagline: "Servicio profesional",
    summary:
      "Limpieza profesional para pisos y habitaciones en Madrid. Cambios de inquilino, limpiezas periódicas o una sola vez. Baños, cocina, salón, ropa lavada y planchada.",
    highlights: ["Cambios de inquilino", "Limpieza profunda", "Lavandería y plancha", "Servicio recurrente"],
    cta: "Solicitar limpieza",
    href: "#aloha-cleaning",
    accent: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-cream">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-0">
        <div className="flex items-end justify-between border-b border-ink/10 pb-6">
          <div className="flex items-center gap-4">
            <span className="w-8 h-px bg-primary" />
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-ink/50 font-medium">
              ¿Qué necesitas?
            </h2>
          </div>
          <span className="text-[10px] uppercase tracking-[0.15em] text-ink/30 hidden md:block">
            3 servicios · Madrid
          </span>
        </div>
      </div>

      {/* 3 paths */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {paths.map((p) => (
          <div
            key={p.num}
            className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 py-16 border-b border-ink/10 ${
              p.accent ? "bg-primary -mx-6 md:-mx-12 px-6 md:px-12" : ""
            }`}
          >
            {/* Number + label + name */}
            <div className="md:col-span-4 flex flex-col justify-start">
              <span className={`text-[5rem] font-black leading-none tracking-tight ${p.accent ? "text-cream/20" : "text-ink/10"}`}>
                {p.num}
              </span>
              <div className="mt-2">
                <p className={`text-[10px] uppercase tracking-[0.2em] font-medium mb-1 ${p.accent ? "text-cream/50" : "text-primary"}`}>
                  {p.tagline}
                </p>
                <h3 className={`font-kondolar text-3xl md:text-4xl font-black uppercase tracking-tight mb-1 ${p.accent ? "text-cream" : "text-ink"}`}>
                  {p.name}
                </h3>
                <p className={`text-xs uppercase tracking-[0.15em] font-medium ${p.accent ? "text-cream/60" : "text-ink/40"}`}>
                  {p.label}
                </p>
              </div>
            </div>

            {/* Summary + highlights */}
            <div className="md:col-span-5 flex flex-col justify-center md:px-8">
              <p className={`text-base md:text-lg leading-relaxed mb-8 ${p.accent ? "text-cream/80" : "text-ink/60"}`}>
                {p.summary}
              </p>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className={`w-4 h-px shrink-0 ${p.accent ? "bg-cream/40" : "bg-primary"}`} />
                    <span className={`text-xs uppercase tracking-[0.1em] ${p.accent ? "text-cream/70" : "text-ink/60"}`}>
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-end">
              <Link
                href={p.href}
                className={`inline-flex items-center gap-3 px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 group ${
                  p.accent
                    ? "border border-cream/40 text-cream hover:bg-cream hover:text-primary"
                    : "border border-ink/30 text-ink hover:border-primary hover:text-primary"
                }`}
              >
                {p.cta}
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
