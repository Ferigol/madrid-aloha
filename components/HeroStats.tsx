"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LanguageContext";

const targets = [772, 221, 9];
const delays  = [0, 180, 360];
const DURATION = 1800;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function HeroStats() {
  const { tr } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues] = useState([0, 0, 0]);
  const triggeredRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || triggeredRef.current) return;
        triggeredRef.current = true;

        const rafs: number[] = [];
        const timeouts: ReturnType<typeof setTimeout>[] = [];

        targets.forEach((target, i) => {
          const t = setTimeout(() => {
            const t0 = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - t0) / DURATION, 1);
              const eased    = easeOutExpo(progress);
              setValues(prev => {
                const next = [...prev];
                next[i] = Math.round(eased * target);
                return next;
              });
              if (progress < 1) rafs[i] = requestAnimationFrame(tick);
            };
            rafs[i] = requestAnimationFrame(tick);
          }, delays[i]);
          timeouts.push(t);
        });

        return () => {
          timeouts.forEach(clearTimeout);
          rafs.forEach(cancelAnimationFrame);
        };
      },
      { threshold: 0.4 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-3 divide-x divide-cream/20">
          {tr.heroStats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <p className="font-kondolar text-4xl sm:text-5xl md:text-6xl font-black text-cream leading-none tabular-nums">
                +{values[i]}
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-cream/70 mt-3 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
