const testimonials = [
  {
    img: "https://i.pravatar.cc/150?img=47",
    name: "Ana García",
    role: "Estudiante de Máster · México",
    quote:
      "Madrid Aloha me ayudó a encontrar habitación en menos de una semana cuando llegué de México para mi máster en el IE. Todo fue más fácil de lo que esperaba.",
  },
  {
    img: "https://i.pravatar.cc/150?img=45",
    name: "Carmen Ruiz",
    role: "Propietaria · Madrid",
    quote:
      "Como propietaria, delegar la gestión de mi piso a Madrid Aloha fue la mejor decisión. Inquilinos serios, pagos puntuales y cero preocupaciones.",
  },
  {
    img: "https://i.pravatar.cc/150?img=11",
    name: "Martín Fernández",
    role: "Estudiante de Posgrado · Argentina",
    quote:
      "Llegué a Madrid por trabajo y en tres días ya tenía mi habitación firmada. El equipo es muy profesional y entiende perfectamente la situación de quien viene de fuera.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 justify-center mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 text-primary"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="relative flex flex-col items-center pt-14">

              {/* Floating avatar */}
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-cream shadow-md"
                />
              </div>

              {/* Card */}
              <div className="w-full bg-cream border border-ink/10 pt-16 pb-8 px-8 text-center">
                <Stars />

                <p className="text-base leading-relaxed text-ink/70 mb-8 font-light">
                  "{t.quote}"
                </p>

                <div className="border-t border-ink/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-ink/40 mt-1">
                    {t.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
