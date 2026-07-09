"use client";

import { useRef, useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLang } from "@/context/LanguageContext";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none ${className}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

const countryCodes = [
  { name: "España",                    dial: "+34",   min: 9,  max: 9  },
  { name: "Afganistán",               dial: "+93",   min: 9,  max: 9  },
  { name: "Albania",                  dial: "+355",  min: 9,  max: 9  },
  { name: "Alemania",                 dial: "+49",   min: 10, max: 11 },
  { name: "Algeria",                  dial: "+213",  min: 9,  max: 9  },
  { name: "Angola",                   dial: "+244",  min: 9,  max: 9  },
  { name: "Arabia Saudí",             dial: "+966",  min: 9,  max: 9  },
  { name: "Argentina",                dial: "+54",   min: 10, max: 10 },
  { name: "Armenia",                  dial: "+374",  min: 8,  max: 8  },
  { name: "Australia",                dial: "+61",   min: 9,  max: 9  },
  { name: "Austria",                  dial: "+43",   min: 10, max: 11 },
  { name: "Azerbaiyán",              dial: "+994",  min: 9,  max: 9  },
  { name: "Bahréin",                 dial: "+973",  min: 8,  max: 8  },
  { name: "Bangladesh",               dial: "+880",  min: 10, max: 10 },
  { name: "Bélgica",                 dial: "+32",   min: 9,  max: 9  },
  { name: "Bolivia",                  dial: "+591",  min: 8,  max: 8  },
  { name: "Bosnia Herzegovina",       dial: "+387",  min: 8,  max: 8  },
  { name: "Brasil",                   dial: "+55",   min: 10, max: 11 },
  { name: "Bulgaria",                 dial: "+359",  min: 9,  max: 9  },
  { name: "Camerún",                 dial: "+237",  min: 9,  max: 9  },
  { name: "Canadá",                  dial: "+1",    min: 10, max: 10 },
  { name: "Chile",                    dial: "+56",   min: 9,  max: 9  },
  { name: "China",                    dial: "+86",   min: 11, max: 11 },
  { name: "Colombia",                 dial: "+57",   min: 10, max: 10 },
  { name: "Corea del Sur",            dial: "+82",   min: 9,  max: 10 },
  { name: "Costa Rica",               dial: "+506",  min: 8,  max: 8  },
  { name: "Croacia",                  dial: "+385",  min: 8,  max: 9  },
  { name: "Cuba",                     dial: "+53",   min: 8,  max: 8  },
  { name: "Dinamarca",               dial: "+45",   min: 8,  max: 8  },
  { name: "Ecuador",                  dial: "+593",  min: 9,  max: 9  },
  { name: "Egipto",                   dial: "+20",   min: 10, max: 10 },
  { name: "El Salvador",              dial: "+503",  min: 8,  max: 8  },
  { name: "Emiratos Árabes Unidos",  dial: "+971",  min: 9,  max: 9  },
  { name: "Eslovaquia",              dial: "+421",  min: 9,  max: 9  },
  { name: "Eslovenia",               dial: "+386",  min: 8,  max: 8  },
  { name: "Estados Unidos",           dial: "+1",    min: 10, max: 10 },
  { name: "Estonia",                  dial: "+372",  min: 7,  max: 8  },
  { name: "Etiopía",                 dial: "+251",  min: 9,  max: 9  },
  { name: "Filipinas",               dial: "+63",   min: 10, max: 10 },
  { name: "Finlandia",               dial: "+358",  min: 9,  max: 10 },
  { name: "Francia",                  dial: "+33",   min: 9,  max: 9  },
  { name: "Georgia",                  dial: "+995",  min: 9,  max: 9  },
  { name: "Ghana",                    dial: "+233",  min: 9,  max: 9  },
  { name: "Grecia",                   dial: "+30",   min: 10, max: 10 },
  { name: "Guatemala",                dial: "+502",  min: 8,  max: 8  },
  { name: "Honduras",                 dial: "+504",  min: 8,  max: 8  },
  { name: "Hong Kong",                dial: "+852",  min: 8,  max: 8  },
  { name: "Hungría",                 dial: "+36",   min: 9,  max: 9  },
  { name: "India",                    dial: "+91",   min: 10, max: 10 },
  { name: "Indonesia",                dial: "+62",   min: 9,  max: 12 },
  { name: "Irak",                     dial: "+964",  min: 10, max: 10 },
  { name: "Irán",                    dial: "+98",   min: 10, max: 10 },
  { name: "Irlanda",                  dial: "+353",  min: 9,  max: 9  },
  { name: "Israel",                   dial: "+972",  min: 9,  max: 9  },
  { name: "Italia",                   dial: "+39",   min: 9,  max: 10 },
  { name: "Jamaica",                  dial: "+1876", min: 7,  max: 7  },
  { name: "Japón",                   dial: "+81",   min: 10, max: 10 },
  { name: "Jordania",                 dial: "+962",  min: 9,  max: 9  },
  { name: "Kazajistán",             dial: "+7",    min: 10, max: 10 },
  { name: "Kenia",                    dial: "+254",  min: 9,  max: 9  },
  { name: "Kuwait",                   dial: "+965",  min: 8,  max: 8  },
  { name: "Letonia",                  dial: "+371",  min: 8,  max: 8  },
  { name: "Líbano",                  dial: "+961",  min: 7,  max: 8  },
  { name: "Libia",                    dial: "+218",  min: 9,  max: 9  },
  { name: "Lituania",                 dial: "+370",  min: 8,  max: 8  },
  { name: "Luxemburgo",              dial: "+352",  min: 9,  max: 9  },
  { name: "Malasia",                  dial: "+60",   min: 9,  max: 10 },
  { name: "Marruecos",               dial: "+212",  min: 9,  max: 9  },
  { name: "México",                  dial: "+52",   min: 10, max: 10 },
  { name: "Moldova",                  dial: "+373",  min: 8,  max: 8  },
  { name: "Mozambique",               dial: "+258",  min: 9,  max: 9  },
  { name: "Myanmar",                  dial: "+95",   min: 8,  max: 10 },
  { name: "Nepal",                    dial: "+977",  min: 10, max: 10 },
  { name: "Nicaragua",                dial: "+505",  min: 8,  max: 8  },
  { name: "Nigeria",                  dial: "+234",  min: 10, max: 10 },
  { name: "Noruega",                 dial: "+47",   min: 8,  max: 8  },
  { name: "Nueva Zelanda",            dial: "+64",   min: 8,  max: 9  },
  { name: "Países Bajos",           dial: "+31",   min: 9,  max: 9  },
  { name: "Pakistán",               dial: "+92",   min: 10, max: 10 },
  { name: "Panamá",                 dial: "+507",  min: 8,  max: 8  },
  { name: "Paraguay",                 dial: "+595",  min: 9,  max: 9  },
  { name: "Perú",                    dial: "+51",   min: 9,  max: 9  },
  { name: "Polonia",                  dial: "+48",   min: 9,  max: 9  },
  { name: "Portugal",                 dial: "+351",  min: 9,  max: 9  },
  { name: "Puerto Rico",              dial: "+1787", min: 7,  max: 7  },
  { name: "Qatar",                    dial: "+974",  min: 8,  max: 8  },
  { name: "Reino Unido",              dial: "+44",   min: 10, max: 10 },
  { name: "República Checa",         dial: "+420",  min: 9,  max: 9  },
  { name: "República Dominicana",    dial: "+1829", min: 7,  max: 7  },
  { name: "Rumanía",                dial: "+40",   min: 9,  max: 9  },
  { name: "Rusia",                    dial: "+7",    min: 10, max: 10 },
  { name: "Senegal",                  dial: "+221",  min: 9,  max: 9  },
  { name: "Serbia",                   dial: "+381",  min: 8,  max: 9  },
  { name: "Singapur",                dial: "+65",   min: 8,  max: 8  },
  { name: "Siria",                    dial: "+963",  min: 9,  max: 9  },
  { name: "Sri Lanka",                dial: "+94",   min: 9,  max: 9  },
  { name: "Sudáfrica",              dial: "+27",   min: 9,  max: 9  },
  { name: "Sudán",                   dial: "+249",  min: 9,  max: 9  },
  { name: "Suecia",                   dial: "+46",   min: 7,  max: 9  },
  { name: "Suiza",                    dial: "+41",   min: 9,  max: 9  },
  { name: "Tailandia",               dial: "+66",   min: 9,  max: 9  },
  { name: "Taiwán",                  dial: "+886",  min: 9,  max: 9  },
  { name: "Tanzania",                 dial: "+255",  min: 9,  max: 9  },
  { name: "Túnez",                   dial: "+216",  min: 8,  max: 8  },
  { name: "Turquía",                 dial: "+90",   min: 10, max: 10 },
  { name: "Ucrania",                  dial: "+380",  min: 9,  max: 9  },
  { name: "Uganda",                   dial: "+256",  min: 9,  max: 9  },
  { name: "Uruguay",                  dial: "+598",  min: 8,  max: 8  },
  { name: "Uzbekistán",             dial: "+998",  min: 9,  max: 9  },
  { name: "Venezuela",                dial: "+58",   min: 10, max: 10 },
  { name: "Vietnam",                  dial: "+84",   min: 9,  max: 10 },
];

type FormFields = {
  name: string;
  email: string;
  dialCode: string;
  phone: string;
  type: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !!email && re.test(email);
}

function isValidPhone(phone: string, dialCode: string): boolean {
  if (!phone) return false;
  const digits = phone.replace(/\D/g, "");
  const country = countryCodes.find((c) => c.dial === dialCode);
  if (!country) return digits.length >= 7;
  return digits.length >= country.min && digits.length <= country.max;
}

function ErrorMsg({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 text-[11px] tracking-wide text-red-300 flex items-center gap-1">
      <span>⚠</span> {msg}
    </p>
  );
}

const WEB3FORMS_ACCESS_KEY = "d2f9c664-8859-49a0-a9cb-fb5e1b294152";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const { tr } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef    = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !formRef.current) return;
    gsap.fromTo(
      formRef.current,
      { x: 120, opacity: 0 },
      {
        x: 0, opacity: 1, ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", end: "top 25%", scrub: 1,
        },
      },
    );
  }, { scope: sectionRef });

  const [form, setForm] = useState<FormFields>({
    name: "", email: "", dialCode: "", phone: "", type: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormFields, boolean>>>({});

  function touch(field: keyof FormFields) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function getErrors(f: FormFields): FormErrors {
    const msgs = tr.contact.errors;
    const e: FormErrors = {};
    if (!f.name.trim()) e.name = msgs.name;
    if (!isValidEmail(f.email)) e.email = msgs.email;
    if (!f.dialCode) e.dialCode = msgs.dialCode;
    else if (!isValidPhone(f.phone, f.dialCode)) e.phone = msgs.phone;
    if (!f.type) e.type = msgs.type;
    if (!f.message.trim()) e.message = msgs.message;
    return e;
  }

  function handleBlur(field: keyof FormFields) {
    touch(field);
    setErrors(getErrors(form));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      (Object.keys(form) as (keyof FormFields)[]).map((k) => [k, true])
    ) as Record<keyof FormFields, boolean>;
    setTouched(allTouched);
    const errs = getErrors(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          phone: `${form.dialCode} ${form.phone}`,
          subject: form.type,
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full bg-transparent border-b pb-3 text-base text-cream placeholder:text-white/60 focus:outline-none transition-colors";
  const err = (f: keyof FormFields) =>
    touched[f] && errors[f] ? "border-red-300 focus:border-red-300" : "border-white/60 focus:border-white";

  return (
    <section id="contacto" className="bg-primary text-cream" style={{ overflowX: "clip" }}>
      <div ref={sectionRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left */}
          <div className="lg:col-span-4">
            <h3 className="font-kondolar text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-8">
              {tr.contact.title1}
            </h3>
            <p className="text-base text-cream leading-relaxed max-w-xs mb-8">
              {tr.contact.intro}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://wa.me/34604378361" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="p-3 rounded-full border border-cream/30 text-cream/70 hover:text-cream hover:border-cream transition-colors duration-200">
                <FaWhatsapp size={18} />
              </a>
              <a href="mailto:madrid@madridaloha.com" aria-label="Email"
                className="p-3 rounded-full border border-cream/30 text-cream/70 hover:text-cream hover:border-cream transition-colors duration-200">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Right */}
          <div ref={formRef} className="lg:col-span-8">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <span className="text-6xl font-black text-cream/20 mb-4">✓</span>
                <h4 className="font-kondolar text-2xl font-black uppercase tracking-tight mb-3">{tr.contact.sent}</h4>
                <p className="text-base text-white whitespace-pre-line">
                  {tr.contact.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                {/* Nombre + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onBlur={() => handleBlur("name")}
                      className={`${inputBase} ${err("name")}`}
                      placeholder={tr.contact.placeholders.name}
                    />
                    <ErrorMsg msg={touched.name ? errors.name ?? "" : ""} />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onBlur={() => handleBlur("email")}
                      className={`${inputBase} ${err("email")}`}
                      placeholder={tr.contact.placeholders.email}
                    />
                    <ErrorMsg msg={touched.email ? errors.email ?? "" : ""} />
                  </div>
                </div>

                {/* Prefijo + Móvil */}
                <div>
                  <div className={`flex items-end gap-3 border-b pb-3 transition-colors ${
                    (touched.phone || touched.dialCode) && (errors.phone || errors.dialCode)
                      ? "border-red-300"
                      : "border-white/60 focus-within:border-white"
                  }`}>
                    <div className="relative shrink-0 flex items-center">
                      <select
                        value={form.dialCode}
                        onChange={(e) => setForm({ ...form, dialCode: e.target.value })}
                        onBlur={() => { touch("dialCode"); handleBlur("phone"); }}
                        className="bg-transparent text-base text-cream focus:outline-none appearance-none cursor-pointer pr-5 max-w-[190px]"
                      >
                        <option value="" disabled className="text-ink bg-white">{tr.contact.placeholders.prefix}</option>
                        {countryCodes.map((c) => (
                          <option key={c.name} value={c.dial} className="text-ink bg-white">
                            {c.name} ({c.dial})
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 text-cream/60" />
                    </div>
                    <span className="text-cream/20 shrink-0">|</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onBlur={() => handleBlur("phone")}
                      className="flex-1 bg-transparent text-base text-cream placeholder:text-white/60 focus:outline-none min-w-0"
                      placeholder={tr.contact.placeholders.phone}
                    />
                  </div>
                  <ErrorMsg msg={(touched.phone || touched.dialCode) ? errors.phone ?? errors.dialCode ?? "" : ""} />
                </div>

                {/* ¿Qué necesitas? */}
                <div className="relative">
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    onBlur={() => handleBlur("type")}
                    className={`w-full bg-transparent border-b pb-3 text-base text-cream focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer pr-6 ${err("type")}`}
                  >
                    <option value="" disabled className="text-ink">{tr.contact.typeLabel}</option>
                    {tr.contact.typeOptions.map((o) => (
                      <option key={o} value={o} className="text-ink">{o}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-0 bottom-4 text-cream/60" />
                  <ErrorMsg msg={touched.type ? errors.type ?? "" : ""} />
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onBlur={() => handleBlur("message")}
                    className={`${inputBase} resize-none ${err("message")}`}
                    placeholder={tr.contact.placeholders.message}
                  />
                  <ErrorMsg msg={touched.message ? errors.message ?? "" : ""} />
                </div>

                <div className="pt-4 flex flex-col items-end gap-3">
                  {status === "error" && (
                    <p className="text-[11px] tracking-wide text-red-300 flex items-center gap-1">
                      <span>⚠</span> {tr.contact.submitError}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-ink text-cream inline-flex items-center gap-3 px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-opacity duration-300 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {status === "sending" ? tr.contact.sending : tr.contact.send}
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
