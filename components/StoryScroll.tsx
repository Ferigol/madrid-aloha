'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function StoryScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = React.Children.count(children);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useGSAP(
    () => {
      if (!containerRef.current || reducedMotion) return;

      const sections = Array.from(
        containerRef.current.querySelectorAll<HTMLElement>('[data-story-section]'),
      );
      if (sections.length === 0) return;

      // Animation only runs on desktop (≥1024px); mobile/tablet flow normally
      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        const triggers: ScrollTrigger[] = [];

        // Enable will-change only while animation is active
        sections.forEach((section) => {
          const inner = section.querySelector<HTMLElement>('.story-inner');
          if (inner) inner.style.willChange = 'transform';
        });

        sections.forEach((section, i) => {
          gsap.set(section, { zIndex: i + 1 });

          const inner = section.querySelector<HTMLElement>('.story-inner');
          if (!inner) return;

          if (i > 0) {
            gsap.set(inner, { rotation: 30, transformOrigin: 'bottom left' });
            const tween = gsap.to(inner, {
              rotation: 0,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 64px',
                scrub: true,
              },
            });
            if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
          }

          if (i < sections.length - 1) {
            triggers.push(
              ScrollTrigger.create({
                trigger: section,
                start: 'top 64px',
                end: 'bottom 64px',
                pin: true,
                pinSpacing: false,
              }),
            );
          }
        });

        // GSAP wraps each pinned section in a pin-spacer div that stays in normal
        // document flow. Moving the section id there ensures getBoundingClientRect()
        // always returns the real document position, not the fixed viewport position.
        sections.slice(0, sections.length - 1).forEach((section) => {
          const pinSpacer = section.parentElement;
          const innerSection = section.querySelector<HTMLElement>('[id]');
          if (pinSpacer && innerSection?.id && pinSpacer !== containerRef.current) {
            pinSpacer.id = innerSection.id;
            innerSection.removeAttribute('id');
          }
        });

        ScrollTrigger.refresh();

        return () => {
          triggers.forEach((t) => t.kill());
          // Restore ids to inner sections before GSAP removes pin-spacers
          sections.slice(0, sections.length - 1).forEach((section) => {
            const pinSpacer = section.parentElement;
            if (!pinSpacer?.id) return;
            const innerSection = section.querySelector<HTMLElement>('section');
            if (innerSection) {
              innerSection.id = pinSpacer.id;
              pinSpacer.removeAttribute('id');
            }
          });
          sections.forEach((section) => {
            gsap.set(section, { clearProps: 'zIndex' });
            const inner = section.querySelector<HTMLElement>('.story-inner');
            if (inner) {
              gsap.set(inner, { clearProps: 'rotation,transformOrigin' });
              inner.style.willChange = '';
            }
          });
        };
      });

      return () => {
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [count, reducedMotion] },
  );

  return (
    // overflowX:clip clips without creating a scroll container (avoids Y-axis coercion)
    <div ref={containerRef} className="w-full" style={{ overflowX: 'clip' }}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          data-story-section
          className="relative"
          // overflow:clip clips the rotating card without creating a scroll container
          style={{ overflow: 'clip' }}
        >
          <div className="story-inner">
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}
