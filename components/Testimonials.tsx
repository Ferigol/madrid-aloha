"use client";

import { useRef } from "react";
import { FaStar } from "react-icons/fa";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const testimonials = [
  {
    img: "/testimonio-carlos.webp",
    name: "Gabriel Ochoa Jara",
    role: "Máster ADE · México",
    quote:
      "Excelente servicio de principio a fin. 100% recomendado. Rebeca es una excelente profesional y persona. El piso que alquilas es tal cual te lo muestra en fotos.",
  },
  {
    img: "/testimonio-clara.webp",
    name: "Clara Tennyson",
    role: "Posgrado de Economía · Chile",
    quote:
      "Recomiendo al 100% esta increíble empresa, me ayudó a encontrar el apartamento de mis sueños. Rebeca y Juan Carlos son unos cracks. Gracias chicos.",
  },
  {
    img: "https://i.pravatar.cc/150?img=11",
    name: "Martín Fernández",
    role: "Posgrado de Derecho · Argentina",
    quote:
      "Llegué a Madrid un jueves y 3 días antes ya tenía mi habitación firmada. Rebeca es muy profesional y consiguió exactamente el espacio que quería.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 justify-center mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} size={14} className="text-primary" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const cards   = sectionRef.current.querySelectorAll("[data-card]");
    const avatars = sectionRef.current.querySelectorAll("[data-avatar]");

    // Estado inicial
    gsap.set(cards,   { y: 70, opacity: 0 });
    gsap.set(avatars, { scale: 0.6, opacity: 0 });

    // Tarjetas: entran escalonadas al hacer scroll
    ScrollTrigger.batch(cards, {
      start: "top 88%",
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
          stagger: 0.18,
        }),
    });

    // Avatares: aparecen con un leve rebote después de sus tarjetas
    ScrollTrigger.batch(avatars, {
      start: "top 88%",
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.4)",
          stagger: 0.18,
          delay: 0.2,
        }),
    });
  }, { scope: sectionRef });

  return (
    <section className="bg-cream">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} data-card className="relative flex flex-col items-center pt-14 group">

              {/* Floating avatar */}
              <div data-avatar className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-cream shadow-md grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                />
              </div>

              {/* Card */}
              <div className="w-full bg-cream border border-ink/10 pt-16 pb-8 px-8 text-center transition-colors duration-300 group-hover:bg-white/15">
                <Stars />

                <p className="text-base leading-relaxed text-ink mb-8 font-light">
                  "{t.quote}"
                </p>

                <div className="border-t border-ink/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-ink mt-1">
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
