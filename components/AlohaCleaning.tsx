"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";
import { useLang } from "@/context/LanguageContext";

const ease = "easeOut" as const;
const nums = ["01", "02", "03", "04"];

export default function AlohaCleaning() {
  const { tr } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const { cleaning } = tr;

  return (
    <section ref={ref} id="aloha-cleaning" className="bg-cream text-ink min-h-screen flex flex-col justify-center">
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
              {cleaning.kicker}
            </motion.p>

            <motion.h3
              className="font-kondolar text-[43px] md:text-[55px] font-black uppercase tracking-tight leading-[0.9] mb-4 lg:mb-6 xl:mb-8"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease }}
            >
              {cleaning.title1}<br /><span className="text-primary">{cleaning.title2}</span>
            </motion.h3>

            <motion.p
              className="text-base md:text-lg text-ink leading-relaxed mb-6 lg:mb-8 xl:mb-12 max-w-md whitespace-pre-line"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
            >
              {cleaning.intro}
            </motion.p>

            <ol className="space-y-5 lg:space-y-6 xl:space-y-8 mb-6 lg:mb-8 xl:mb-12">
              {cleaning.benefits.map((b, i) => (
                <motion.li
                  key={nums[i]}
                  className="grid grid-cols-[2.5rem_1fr] gap-4"
                  initial={{ y: 60, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease }}
                >
                  <span className="font-kondolar text-xl font-black text-primary leading-none pt-0.5">{nums[i]}</span>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-ink mb-1.5">{b.title}</h4>
                    <p className="text-base md:text-lg leading-relaxed text-ink">{b.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ y: 60, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6 + cleaning.benefits.length * 0.15, ease }}
            >
              <a
                href="#contacto"
                className="bg-gradient-to-r from-[#ce304e] to-[#ce214a] inline-flex items-center justify-center text-cream px-8 py-[18px] md:py-4 text-sm md:text-xs uppercase tracking-[0.15em] font-medium transition-opacity duration-300 hover:opacity-80"
                onClick={(e) => { e.preventDefault(); scrollToSection("contacto"); }}
              >
                {cleaning.cta}
              </a>
            </motion.div>
          </div>

          {/* RIGHT: image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[min(860px,78vh)]" style={{ overflow: "clip" }}>
            <motion.div
              className="absolute inset-0"
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <Image
                src="/image-aloha-carta.webp"
                alt="Carta de acomodación Madrid"
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
