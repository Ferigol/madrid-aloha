"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const VIDEO_DURATION = 5;
const FADE_START = 0.35;  // title 1 starts fading at second 1.75
const FADE_END   = 0.40;  // title 1 fully gone at second 2
const SWITCH_AT  = 0.60;  // title 2 appears at second 3

export default function Hero() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const title1Ref   = useRef<HTMLDivElement>(null);
  const phaseRef    = useRef<"one" | "two">("one");

  const [showTitle2, setShowTitle2] = useState(false);
  const [title2Key,  setTitle2Key]  = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const video   = videoRef.current;
    const t1      = title1Ref.current;
    if (!section || !video || !t1) return;

    const scrub = () => {
      const scrolled    = -section.getBoundingClientRect().top;
      const scrollRange = section.offsetHeight - window.innerHeight;
      const progress    = Math.min(Math.max(scrolled / scrollRange, 0), 1);

      video.currentTime = progress * (video.duration || VIDEO_DURATION);

      // Title 1 — fully gone at FADE_END (second 2), well before title 2 arrives
      if (progress < FADE_START) {
        t1.style.opacity = "1";
      } else if (progress < FADE_END) {
        t1.style.opacity = String(1 - (progress - FADE_START) / (FADE_END - FADE_START));
      } else {
        t1.style.opacity = "0";
      }

      // Phase gate — title 2 appears at SWITCH_AT (second 3), disappears below FADE_END
      if (progress >= SWITCH_AT && phaseRef.current === "one") {
        phaseRef.current = "two";
        setTitle2Key((k) => k + 1);
        setShowTitle2(true);
      } else if (progress < FADE_END && phaseRef.current === "two") {
        phaseRef.current = "one";
        setShowTitle2(false);
      }
    };

    window.addEventListener("scroll", scrub, { passive: true });
    scrub();
    return () => window.removeEventListener("scroll", scrub);
  }, []);

  return (
    <div ref={sectionRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Video — scroll-scrubbed */}
        <video
          ref={videoRef}
          src="/hero-madrid.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center"
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/45 to-ink/20" />
        <div className="absolute inset-0 bg-amber-950/20" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-12">

          {/* Title slot — title 1 in flow sets the height; title 2 overlays it */}
          <div className="relative mb-8">

            {/* Title 1 — in normal flow, defines container height */}
            <h1
              ref={title1Ref}
              className="font-kondolar text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.92] tracking-tight text-cream text-center"
            >
              <span className="block">¿Vienes a vivir</span>
              <span className="block">a Madrid?</span>
            </h1>

            {/* Title 2 — absolute overlay, line-reveal animation re-triggers on each activation */}
            {showTitle2 && (
              <div key={title2Key} className="absolute inset-0 flex items-center justify-center">
                <h1 className="font-kondolar text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.92] tracking-tight text-cream text-center">
                  <span className="block overflow-hidden">
                    <span className="block whitespace-nowrap animate-line-reveal-1">Tenemos la casa</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block whitespace-nowrap animate-line-reveal-2">que buscas</span>
                  </span>
                </h1>
              </div>
            )}
          </div>

          <p className="text-base md:text-lg text-cream/80 font-light leading-relaxed max-w-xl mb-12">
            Sabemos lo que es llegar a una ciudad nueva sin conocer a nadie.
            Nosotros te ayudamos a encontrar el lugar donde sentirte en casa desde el primer día.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#contacto"
              className="w-52 whitespace-nowrap inline-flex items-center justify-center gap-3 bg-primary text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-cream hover:text-primary transition-colors duration-300 group"
            >
              Busco piso
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link
              href="#aloha-property"
              className="w-52 whitespace-nowrap inline-flex items-center justify-center gap-3 border border-cream/40 text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium hover:bg-cream hover:text-ink transition-colors duration-300 group"
            >
              Alquilo piso
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>

          <div className="mt-14 pt-10 border-t border-cream/15 grid grid-cols-3 gap-4 sm:gap-10 md:gap-20 w-full max-w-lg">
            {[
              { num: "+500", label: "Estudiantes alojados" },
              { num: "+200", label: "Propiedades gestionadas" },
              { num: "10+", label: "Años en Madrid" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-kondolar text-2xl sm:text-3xl md:text-4xl font-black text-primary">{s.num}</p>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.1em] text-cream/50 mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 z-10">
          <span className="text-[9px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-cream/20 relative overflow-hidden">
            <div className="w-full h-full bg-primary animate-scroll-down" />
          </div>
        </div>

      </div>
    </div>
  );
}
