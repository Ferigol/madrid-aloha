const stats = [
  { num: "+772", label: "Estudiantes\nalojados" },
  { num: "+221", label: "Empresarios y\ntrabajadores" },
  { num: "+12",  label: "Años de\nexperiencia" },
];

export default function HeroStats() {
  return (
    <section className="bg-cream border-b border-ink/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-3 divide-x divide-ink/10">
          {stats.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center px-4">
              <p className="font-kondolar text-4xl sm:text-5xl md:text-6xl font-black text-primary leading-none">
                {s.num}
              </p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.18em] text-ink/40 mt-3 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
