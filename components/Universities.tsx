const logos = [
  { src: "/logo-ie.svg",     alt: "IE Business School" },
  { src: "/logo-iese.svg",   alt: "IESE Business School" },
  { src: "/logo-esic.svg",   alt: "ESIC University" },
  { src: "/logo-ue.svg",     alt: "Universidad Europea de Madrid" },
  { src: "/logo-complu.svg", alt: "Universidad Complutense de Madrid" },
  { src: "/logo-urjc.svg",   alt: "Universidad Rey Juan Carlos" },
  { src: "/logo-eae.svg",    alt: "EAE Business School" },
  { src: "/logo-eserp.svg",  alt: "ESERP Business School" },
  { src: "/logo-bcsm.svg",   alt: "BCSM" },
  { src: "/logo-cto.svg",    alt: "CTO" },
];

const doubled = [...logos, ...logos];

export default function Universities() {
  return (
    <section className="bg-primary">

      {/* Label */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-10">
        <p className="text-[10px] uppercase tracking-[0.25em] text-cream/60 font-medium text-center">
          Universidades aliadas
        </p>
      </div>

      {/* Marquee — full bleed, CSS animation for seamless loop */}
      <div className="overflow-hidden pb-16">
        <div className="flex items-center gap-20 w-max animate-marquee">
          {doubled.map((logo, i) => (
            <div key={i} className="shrink-0 flex items-center justify-center h-14 px-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: "51px", filter: "brightness(0) invert(1) sepia(0.08) brightness(0.87)" }}
                className="w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
