"use client";

import { useState, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const faqs = [
  {
    q: "¿Cuánto tiempo tardáis en encontrarme piso o habitación?",
    a: "En la mayoría de los casos tenemos opciones disponibles en menos de 72 horas. Si vienes con tiempo, podemos prepararte una selección personalizada antes de que llegues a Madrid.",
  },
  {
    q: "¿Los pisos vienen amueblados y equipados?",
    a: "Sí. Todos los alojamientos están totalmente equipados: muebles, electrodomésticos, ropa de cama y utensilios de cocina. Llegas con las maletas y listo.",
  },
  {
    q: "¿Necesito el NIE para firmar el contrato?",
    a: "No es imprescindible para empezar, con tu pasaporte es suficiente. Te ayudamos con el trámite del NIE, número de cuenta, abono, empadronamiento y otros trámites administrativos para que estés regularizado cuanto antes.",
  },
  {
    q: "¿Recogéis en el aeropuerto aunque llegue fuera del horario habitual?",
    a: "Sí. Nos adaptamos a tu vuelo en horario laboral. Solo necesitamos los datos de llegada con antelación para coordinar el servicio sin coste adicional.",
  },
  {
    q: "¿En qué zonas de Madrid tenéis pisos?",
    a: "Trabajamos en toda la ciudad, con especial presencia en barrios universitarios y zonas bien comunicadas como Moncloa, Chamberí, Malasaña, Lavapiés y Salamanca.",
  },
  {
    q: "¿Ayudáis con el empadronamiento, cuenta bancaria y el abono de transporte?",
    a: "Sí. Te acompañamos en los trámites del día a día: apertura de cuenta bancaria, tarjeta de transporte y cualquier gestión que necesites al llegar.",
  },
  {
    q: "¿Puedo contratar también el servicio de limpieza?",
    a: "Por supuesto. Contamos con servicio de limpieza periódico y puntual, con opción de lavandería incluida. Pregúntanos por nuestros packs.",
  },
  {
    q: "¿Cómo puedo contactar con vosotros?",
    a: "Puedes escribirnos a través del formulario de contacto o por WhatsApp. Respondemos en menos de 24 horas en días laborables.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const title = sectionRef.current.querySelector("[data-faq-title]");
    const items = sectionRef.current.querySelectorAll("[data-faq-item]");

    // Título
    gsap.fromTo(
      title,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: title,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      },
    );

    // Cada pregunta se activa individualmente al entrar en pantalla
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        },
      );
    });
  }, { scope: sectionRef });

  return (
    <section id="faq" className="bg-cream text-ink">
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        <h3
          data-faq-title
          className="font-kondolar text-[43px] md:text-[55px] font-black uppercase tracking-tight leading-[0.9] mb-16 text-center text-ink"
        >
          Preguntas <span className="text-primary">Frecuentes</span>
        </h3>

        <div className="divide-y divide-ink/10 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} data-faq-item>
              <button
                className="w-full text-left py-6 grid grid-cols-[1fr_auto] gap-8 items-start group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base md:text-lg font-bold text-ink text-left group-hover:text-primary transition-colors duration-200">
                  {faq.q}
                </span>
                <span
                  className={`text-primary text-xl leading-none mt-0.5 transition-transform duration-300 shrink-0 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-base md:text-lg leading-relaxed text-ink text-left max-w-2xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
