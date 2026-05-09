"use client";

import { useState } from "react";
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
    a: "No es imprescindible para empezar. Te acompañamos en la gestión del NIE y otros trámites administrativos para que estés regularizado cuanto antes.",
  },
  {
    q: "¿Recogéis en el aeropuerto aunque llegue fuera del horario habitual?",
    a: "Sí. Nos adaptamos a tu vuelo. Solo necesitamos los datos de llegada con antelación para coordinar el servicio sin coste adicional.",
  },
  {
    q: "¿En qué zonas de Madrid tenéis pisos?",
    a: "Trabajamos en toda la ciudad, con especial presencia en barrios universitarios y zonas bien comunicadas como Moncloa, Chamberí, Malasaña, Lavapiés y Salamanca.",
  },
  {
    q: "¿Ayudáis con la cuenta bancaria y el transporte?",
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

  return (
    <section id="faq" className="bg-cream text-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        {/* Title */}
        <h3 className="font-kondolar text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-16 text-center text-ink">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h3>

        {/* Accordion */}
        <div className="divide-y divide-ink/10 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-6 grid grid-cols-[1fr_auto] gap-8 items-start group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-sm md:text-base font-medium text-ink text-left group-hover:text-primary transition-colors duration-200">
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
                <p className="text-base md:text-lg leading-relaxed text-ink/70 text-left max-w-2xl">
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
