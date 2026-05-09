"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    num: "01",
    title: "Listo antes de que llegue el siguiente",
    desc: "El piso queda impecable entre contratos. Sin que tengas que mover un dedo.",
  },
  {
    num: "02",
    title: "Periódica o puntual, tú decides",
    desc: "Semanal, quincenal o una sola vez. Nos adaptamos a lo que necesitas.",
  },
  {
    num: "03",
    title: "Lavandería incluida",
    desc: "Ropa lavada, secada y doblada. Sin viajes a la lavandería.",
  },
  {
    num: "04",
    title: "Un equipo de confianza",
    desc: "Profesionales verificados que conocen cada rincón del piso como si fuera el suyo.",
  },
];

const ease = "easeOut" as const;

export default function AlohaCleaning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="aloha-cleaning" className="bg-cream text-ink min-h-screen flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: content */}
          <div>
            <motion.p
              className="text-[10px] uppercase tracking-[0.2em] text-primary font-medium mb-4"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              Para pisos y habitaciones en Madrid
            </motion.p>

            <motion.h3
              className="font-kondolar text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              Aloha <span className="text-primary">Cleaning</span>
            </motion.h3>

            <motion.p
              className="text-base md:text-lg text-ink/60 leading-relaxed mb-12 max-w-md"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              Una limpieza profesional no debería ser un problema logístico. Nosotros lo organizamos todo para que el piso esté siempre en su mejor estado.
            </motion.p>

            <ol className="space-y-8 mb-12">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.num}
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease }}
                >
                  <span className="font-kondolar text-xl font-black text-primary/40 leading-none pt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-ink/50">
                      {b.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + benefits.length * 0.15, ease }}
            >
              <Link
                href="#contacto"
                className="btn-gradient bg-gradient-to-r from-[#ce304e] to-[#ce214a] inline-flex items-center justify-center text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300"
              >
                Solicitar presupuesto
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: image */}
          <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[700px]" style={{ overflow: 'clip' }}>
            <motion.div
              className="absolute inset-0"
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <Image
                src="/hero-ma.jpg"
                alt="Limpieza profesional en Madrid"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-ink/5" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
