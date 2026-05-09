"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const members = [
  {
    id: "rebe",
    name: "Rebeca Vílchez",
    role: "Co-Fundadora",
    image: "/equipo-rebe.jpg",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "juanca",
    name: "Juan Carlos Taboada",
    role: "Co-Fundador",
    image: "/equipo-juanca.jpg",
    social: { linkedin: "#", instagram: "#" },
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
        <span
          className="h-px bg-primary flex-shrink-0"
          style={{ width: isActive ? "2rem" : "1rem", opacity: isActive ? 1 : 0.35, transition: "width 0.4s ease, opacity 0.4s ease" }}
        />
        <h3
          className="font-kondolar text-4xl md:text-5xl font-black leading-none tracking-tight"
          style={{
            color: isActive ? "var(--color-cream)" : "color-mix(in srgb, var(--color-cream) 55%, transparent)",
            transition: "color 0.3s ease",
          }}
        >
          {member.name}
        </h3>
      </div>

      <p className="text-[10px] uppercase tracking-[0.25em] text-cream/40 mb-4 pl-8">
        {member.role}
      </p>

      <div
        className="flex items-center gap-2 pl-8"
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
            className="p-2 border border-cream/20 text-cream/50 hover:text-cream hover:border-cream/50 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={12} />
          </a>
        )}
        {member.social.instagram && (
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 border border-cream/20 text-cream/50 hover:text-cream hover:border-cream/50 transition-colors duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={12} />
          </a>
        )}
      </div>
    </div>
  );
});

export default function Team() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const handleHover = useCallback((id: string | null) => setHoveredId(id), []);

  return (
    <section className="bg-ink text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">

        <div className="flex items-center gap-4 border-b border-cream/10 pb-6 mb-20">
          <span className="w-8 h-px bg-primary" />
          <h2 className="text-[10px] uppercase tracking-[0.25em] text-cream/50 font-medium">
            El equipo
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-28">

          <div className="flex gap-4 md:gap-6 flex-shrink-0">
            {members.map((m, i) => (
              <PhotoCard key={m.id} member={m} offset={photoOffsets[i]} hoveredId={hoveredId} onHover={handleHover} />
            ))}
          </div>

          <div className="flex flex-col gap-12 pt-2 flex-1">
            {members.map((m) => (
              <MemberRow key={m.id} member={m} hoveredId={hoveredId} onHover={handleHover} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
