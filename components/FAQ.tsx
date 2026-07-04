"use client";

import { useState, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { useLang } from "@/context/LanguageContext";

export default function FAQ() {
  const { tr } = useLang();
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
          {tr.faq.title1}<span className="text-primary">{tr.faq.title2}</span>
        </h3>

        <div className="divide-y divide-ink/10 max-w-3xl mx-auto">
          {tr.faq.items.map((faq, i) => (
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
