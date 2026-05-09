"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    num: "01",
    title: "Cobras sin preocuparte por nada",
    desc: "Seleccionamos al inquilino, firmamos el contrato y gestionamos cualquier incidencia. Tú solo ves el ingreso en tu cuenta.",
  },
  {
    num: "02",
    title: "Nunca recibes una llamada",
    desc: "Todas las comunicaciones con el inquilino pasan por nosotros. Tu tranquilidad está garantizada.",
  },
  {
    num: "03",
    title: "Inquilinos en los que confiar",
    desc: "Verificamos ingresos, referencias y documentación de cada candidato. Solo te presentamos perfiles solventes.",
  },
  {
    num: "04",
    title: "El piso, siempre en perfectas condiciones",
    desc: "Limpieza gratuita al finalizar cada contrato y gestión de mantenimiento incluida.",
  },
];

const ease = "easeOut" as const;

export default function AlohaProperty() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} id="aloha-property" className="bg-cream">
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
              Quiero alquilar mi piso en Madrid
            </motion.p>

            <motion.h3
              className="font-kondolar text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-8 text-ink"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              Aloha <span className="text-primary">Property</span>
            </motion.h3>

            <motion.p
              className="text-base md:text-lg text-ink/60 leading-relaxed mb-12 max-w-md"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              Alquilar no debería ser un segundo trabajo. Nosotros lo gestionamos todo para que tú solo disfrutes de la rentabilidad.
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
                  <span className="font-kondolar text-xl font-black text-primary/30 leading-none pt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-ink mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-ink/55">
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
                className="inline-flex items-center gap-3 bg-ink text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-primary transition-colors duration-300 group"
              >
                Hablar con el equipo
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: image */}
          <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[700px] overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <Image
                src="/image-aloha-property.jpg"
                alt="Piso en alquiler en Madrid"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-cream/5" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
