"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const members = [
  {
    id: "rebe",
    name: "Rebeca Vilches",
    role: "Sales Manager",
    image: "/equipo-rebe.jpg",
    social: { linkedin: "#", email: "madrid@madridaloha.com" },
  },
  {
    id: "juanca",
    name: "Juan Carlos Taboada",
    role: "Marketing Manager",
    image: "/equipo-juanca.jpg",
    social: { linkedin: "#", email: "madrid@madridaloha.com" },
  },
];

type Member = (typeof members)[0];

const photoOffsets = ["", "mt-16"];

function hoverState(id: string, hoveredId: string | null) {
  return {
    isActive: hoveredId === id,
    isDimmed: hoveredId !== null && hoveredId !== id,
  };
}

const PhotoCard = memo(function PhotoCard({
  member,
  offset,
  hoveredId,
  onHover,
}: {
  member: Member;
  offset: string;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const { isActive, isDimmed } = hoverState(member.id, hoveredId);

  return (
    <div
      className={`relative w-[180px] h-[260px] md:w-[230px] md:h-[320px] overflow-hidden cursor-pointer flex-shrink-0 ${offset}`}
      style={{ opacity: isDimmed ? 0.4 : 1, transition: "opacity 0.4s ease" }}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="(max-width: 768px) 180px, 230px"
        className="object-cover object-top"
        style={{
          filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.7)",
          transition: "filter 0.5s ease",
        }}
      />
    </div>
  );
});

const MemberRow = memo(function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: Member;
  hoveredId: string | null;
  onHover: (id: string | null) => void;
}) {
  const { isActive, isDimmed } = hoverState(member.id, hoveredId);

  return (
    <div
      className="cursor-pointer"
      style={{ opacity: isDimmed ? 0.3 : 1, transition: "opacity 0.3s ease" }}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-4 mb-2">
        <h3
          className="font-kondolar text-4xl md:text-[42px] font-black leading-none tracking-tight"
          style={{
            color: isActive ? "var(--color-primary)" : "color-mix(in srgb, var(--color-ink) 45%, transparent)",
            transition: "color 0.3s ease",
          }}
        >
          {member.name}
        </h3>
      </div>

      <div className="flex items-center gap-4 pl-8 mb-4">
        <p
          className="text-base uppercase tracking-[0.25em] transition-colors duration-300"
          style={{ color: isActive ? "var(--color-primary)" : "color-mix(in srgb, var(--color-ink) 40%, transparent)" }}
        >
          {member.role}
        </p>

        <div
          className="flex items-center gap-2"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(-8px)",
            pointerEvents: isActive ? "auto" : "none",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
        {member.social.linkedin && (
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 transition-colors duration-200"
            style={{ color: "var(--color-primary)", border: "1px solid var(--color-primary)" }}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={12} />
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            onClick={(e) => e.stopPropagation()}
            className="p-2 transition-colors duration-200"
            style={{ color: "var(--color-primary)", border: "1px solid var(--color-primary)" }}
            aria-label="Email"
          >
            <FaEnvelope size={12} />
          </a>
        )}
        </div>
      </div>
    </div>
  );
});

export default function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const handleHover = useCallback((id: string | null) => setHoveredId(id), []);

  return (
    <section id="equipo" className="bg-cream text-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-28">

          {/* Texto: solo visible en móvil, encima de las fotos */}
          <p className="lg:hidden text-base text-ink/60 font-light leading-relaxed">
            Sabemos lo que es llegar a una ciudad nueva sin conocer a nadie. Nosotros te ayudamos a encontrar el lugar donde sentirte en casa desde el primer día.
          </p>

          {/* Fotos */}
          <div className="flex gap-4 md:gap-6 flex-shrink-0">
            {members.map((m, i) => (
              <PhotoCard key={m.id} member={m} offset={photoOffsets[i]} hoveredId={hoveredId} onHover={handleHover} />
            ))}
          </div>

          {/* Columna derecha: texto (solo desktop) + nombres */}
          <div className="flex flex-col pt-2 flex-1">
            <p className="hidden lg:block text-base md:text-lg text-ink/60 font-light leading-relaxed max-w-md">
              Sabemos lo que es llegar a una ciudad nueva sin conocer a nadie. Nosotros te ayudamos a encontrar el lugar donde sentirte en casa desde el primer día.
            </p>
            <div className="flex flex-col gap-12 mt-8 lg:mt-16">
              {members.map((m) => (
                <MemberRow key={m.id} member={m} hoveredId={hoveredId} onHover={handleHover} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
