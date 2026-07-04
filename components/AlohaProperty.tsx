"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { scrollToSection } from "@/lib/scrollToSection";
import { useLang } from "@/context/LanguageContext";
import type { Lang } from "@/lib/translations";
import t from "@/lib/translations";

const nums = ["01", "02", "03", "04"];
const ease = "easeOut" as const;

function PropertyModal({ onClose, lang }: { onClose: () => void; lang: Lang }) {
  const modal = t[lang].property.modal;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", check);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop independiente */}
      <motion.div
        className="fixed inset-0 z-[200] bg-ink/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        className="fixed z-[201] bg-white flex flex-col rounded-sm shadow-2xl"
        style={{
          top: isMobile ? '80px' : '230px',
          bottom: '20px',
          left: 0,
          right: 0,
          margin: '0 auto',
          width: 'min(672px, calc(100vw - 32px))',
        }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {/* X flotante encima del popup — solo móvil */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          className="md:hidden absolute -top-10 right-0 w-9 h-9 flex items-center justify-center text-white text-2xl leading-none"
        >
          ✕
        </button>

        {/* Header — siempre visible */}
        <div className="flex-shrink-0 bg-white border-b border-ink/10 px-6 py-5 relative flex items-center justify-center">
          <h2 className="font-kondolar text-2xl font-black uppercase tracking-tight text-ink text-center">
            {modal.title1}<span style={{ color: "#C8102E" }}>{modal.title2}</span>
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="hidden md:flex absolute right-4 w-8 h-8 items-center justify-center text-ink/50 hover:text-ink transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Body — scroll interno */}
        <div className="overflow-y-auto flex-1 min-h-0 px-6 py-8 space-y-8">
          {modal.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] mb-3" style={{ color: "#C8102E" }}>
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-ink/80 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer — siempre visible */}
        <div className="flex-shrink-0 px-6 py-6 text-center border-t border-ink/10">
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); onClose(); scrollToSection("contacto"); }}
            className="inline-flex items-center justify-center px-10 py-4 text-xs uppercase tracking-[0.15em] font-medium text-cream transition-opacity duration-300 hover:opacity-80"
            style={{ backgroundColor: "#C8102E" }}
          >
            {modal.cta}
          </a>
        </div>
      </motion.div>
    </>
  );
}

export default function AlohaProperty() {
  const { lang, tr } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [modalOpen, setModalOpen] = useState(false);
  const { property } = tr;

  return (
    <>
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
                {property.kicker}
              </motion.p>

              <motion.h3
                className="font-kondolar text-[43px] md:text-[55px] font-black uppercase tracking-tight leading-[0.9] mb-4 lg:mb-6 xl:mb-8 text-ink"
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.45, ease }}
              >
                {property.title1}<span className="text-cream">{property.title2}</span>
              </motion.h3>

              <motion.p
                className="text-base md:text-lg text-ink leading-relaxed mb-6 lg:mb-8 xl:mb-12 max-w-md"
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease }}
              >
                {property.intro}
              </motion.p>

              <ol className="space-y-5 lg:space-y-6 xl:space-y-8 mb-6 lg:mb-8 xl:mb-12">
                {property.benefits.map((b, i) => (
                  <motion.li
                    key={nums[i]}
                    className="grid grid-cols-[2.5rem_1fr] gap-4"
                    initial={{ y: 60, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15, ease }}
                  >
                    <span className="font-kondolar text-xl font-black text-cream leading-none pt-0.5">
                      {nums[i]}
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
                className="flex justify-center md:justify-start"
                initial={{ y: 60, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
                transition={{ duration: 0.7, delay: 0.6 + property.benefits.length * 0.15, ease }}
              >
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-ink text-cream inline-flex items-center justify-center px-8 py-[18px] md:py-4 text-sm md:text-xs uppercase tracking-[0.15em] font-medium transition-opacity duration-300 hover:opacity-80"
                >
                  {property.cta}
                </button>
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
                  src="/image-aloha-property.webp"
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

      <AnimatePresence>
        {modalOpen && <PropertyModal onClose={() => setModalOpen(false)} lang={lang} />}
      </AnimatePresence>
    </>
  );
}
