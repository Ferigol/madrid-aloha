"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 772, label: "Estudiantes\nalojados",        delay: 0   },
  { target: 221, label: "Empresarios y\ntrabajadores",  delay: 180 },
  { target: 12,  label: "Años de\nexperiencia",         delay: 360 },
];

const DURATION = 1800;

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function HeroStats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [values, setValues]   = useState([0, 0, 0]);
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

        stats.forEach(({ target, delay }, i) => {
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
          }, delay);

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
    <section ref={sectionRef} className="bg-cream border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-3 divide-x divide-ink/10">
          {stats.map((s, i) => (
            <div key={s.label} className="flex flex-col items-center text-center px-4">
              <p className="font-kondolar text-4xl sm:text-5xl md:text-6xl font-black text-primary leading-none tabular-nums">
                +{values[i]}
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-primary mt-3 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
