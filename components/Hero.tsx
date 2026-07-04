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

  // Prime the video on load: show first frame and unlock seeking on iOS without playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const prime = () => { video.play().then(() => video.pause()).catch(() => {}); };
    video.addEventListener("canplay", prime, { once: true });
    return () => video.removeEventListener("canplay", prime);
  }, []);

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
          className="absolute inset-0 w-full h-full object-cover object-center"
          muted
          playsInline
          autoPlay
          preload="auto"
        >
          <source src="/hero-madrid.mp4" type="video/mp4" />
        </video>

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

          <div className="flex flex-col items-center sm:flex-row gap-4">
            <Link
              href="#contacto"
              className="bg-gradient-to-r from-[#ce304e] to-[#ce214a] w-52 whitespace-nowrap inline-flex items-center justify-center text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium opacity-80 transition-opacity duration-300 hover:opacity-50"
            >
              Busco casa
            </Link>
            <Link
              href="#aloha-property"
              className="w-52 whitespace-nowrap inline-flex items-center justify-center border border-cream text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:bg-cream hover:text-ink hover:opacity-50"
            >
              Alquilo piso
            </Link>
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
