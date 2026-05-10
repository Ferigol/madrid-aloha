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
    <section ref={ref} id="aloha-property" className="bg-primary text-cream min-h-screen flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 lg:py-16 xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: content */}
          <div>
            <motion.p
              className="text-[10px] uppercase tracking-[0.2em] text-ink font-medium mb-4"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              Quiero alquilar mi piso en Madrid
            </motion.p>

            <motion.h3
              className="font-kondolar text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-4 lg:mb-6 xl:mb-8 text-ink"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              Aloha <span className="text-cream">Property</span>
            </motion.h3>

            <motion.p
              className="text-base md:text-lg text-ink leading-relaxed mb-6 lg:mb-8 xl:mb-12 max-w-md"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              Alquilar no debería ser un segundo trabajo. Nosotros lo gestionamos todo para que tú solo disfrutes de la rentabilidad.
            </motion.p>

            <ol className="space-y-5 lg:space-y-6 xl:space-y-8 mb-6 lg:mb-8 xl:mb-12">
              {benefits.map((b, i) => (
                <motion.li
                  key={b.num}
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease }}
                >
                  <span className="font-kondolar text-xl font-black text-cream leading-none pt-0.5">
                    {b.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-ink mb-1.5">
                      {b.title}
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed text-ink">
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
                className="bg-ink text-cream inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-opacity duration-300 hover:opacity-80"
              >
                Hablar con el equipo
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[min(860px,78vh)]" style={{ overflow: 'clip' }}>
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
