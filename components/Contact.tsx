"use client";

import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const options = [
  "Busco habitación / piso",
  "Quiero gestionar mi propiedad",
  "Servicio de limpieza",
  "Otra consulta",
];

const countryCodes = [
  { name: "España", dial: "+34" },
  { name: "Afganistán", dial: "+93" },
  { name: "Albania", dial: "+355" },
  { name: "Alemania", dial: "+49" },
  { name: "Algeria", dial: "+213" },
  { name: "Angola", dial: "+244" },
  { name: "Arabia Saudí", dial: "+966" },
  { name: "Argentina", dial: "+54" },
  { name: "Armenia", dial: "+374" },
  { name: "Australia", dial: "+61" },
  { name: "Austria", dial: "+43" },
  { name: "Azerbaiyán", dial: "+994" },
  { name: "Bahréin", dial: "+973" },
  { name: "Bangladesh", dial: "+880" },
  { name: "Bélgica", dial: "+32" },
  { name: "Bolivia", dial: "+591" },
  { name: "Bosnia Herzegovina", dial: "+387" },
  { name: "Brasil", dial: "+55" },
  { name: "Bulgaria", dial: "+359" },
  { name: "Camerún", dial: "+237" },
  { name: "Canadá", dial: "+1" },
  { name: "Chile", dial: "+56" },
  { name: "China", dial: "+86" },
  { name: "Colombia", dial: "+57" },
  { name: "Corea del Sur", dial: "+82" },
  { name: "Costa Rica", dial: "+506" },
  { name: "Croacia", dial: "+385" },
  { name: "Cuba", dial: "+53" },
  { name: "Dinamarca", dial: "+45" },
  { name: "Ecuador", dial: "+593" },
  { name: "Egipto", dial: "+20" },
  { name: "El Salvador", dial: "+503" },
  { name: "Emiratos Árabes Unidos", dial: "+971" },
  { name: "Eslovaquia", dial: "+421" },
  { name: "Eslovenia", dial: "+386" },
  { name: "Estados Unidos", dial: "+1" },
  { name: "Estonia", dial: "+372" },
  { name: "Etiopía", dial: "+251" },
  { name: "Filipinas", dial: "+63" },
  { name: "Finlandia", dial: "+358" },
  { name: "Francia", dial: "+33" },
  { name: "Georgia", dial: "+995" },
  { name: "Ghana", dial: "+233" },
  { name: "Grecia", dial: "+30" },
  { name: "Guatemala", dial: "+502" },
  { name: "Honduras", dial: "+504" },
  { name: "Hong Kong", dial: "+852" },
  { name: "Hungría", dial: "+36" },
  { name: "India", dial: "+91" },
  { name: "Indonesia", dial: "+62" },
  { name: "Irak", dial: "+964" },
  { name: "Irán", dial: "+98" },
  { name: "Irlanda", dial: "+353" },
  { name: "Israel", dial: "+972" },
  { name: "Italia", dial: "+39" },
  { name: "Jamaica", dial: "+1876" },
  { name: "Japón", dial: "+81" },
  { name: "Jordania", dial: "+962" },
  { name: "Kazajistán", dial: "+7" },
  { name: "Kenia", dial: "+254" },
  { name: "Kuwait", dial: "+965" },
  { name: "Letonia", dial: "+371" },
  { name: "Líbano", dial: "+961" },
  { name: "Libia", dial: "+218" },
  { name: "Lituania", dial: "+370" },
  { name: "Luxemburgo", dial: "+352" },
  { name: "Malasia", dial: "+60" },
  { name: "Marruecos", dial: "+212" },
  { name: "México", dial: "+52" },
  { name: "Moldova", dial: "+373" },
  { name: "Mozambique", dial: "+258" },
  { name: "Myanmar", dial: "+95" },
  { name: "Nepal", dial: "+977" },
  { name: "Nicaragua", dial: "+505" },
  { name: "Nigeria", dial: "+234" },
  { name: "Noruega", dial: "+47" },
  { name: "Nueva Zelanda", dial: "+64" },
  { name: "Países Bajos", dial: "+31" },
  { name: "Pakistán", dial: "+92" },
  { name: "Panamá", dial: "+507" },
  { name: "Paraguay", dial: "+595" },
  { name: "Perú", dial: "+51" },
  { name: "Polonia", dial: "+48" },
  { name: "Portugal", dial: "+351" },
  { name: "Puerto Rico", dial: "+1787" },
  { name: "Qatar", dial: "+974" },
  { name: "Reino Unido", dial: "+44" },
  { name: "República Checa", dial: "+420" },
  { name: "República Dominicana", dial: "+1829" },
  { name: "Rumanía", dial: "+40" },
  { name: "Rusia", dial: "+7" },
  { name: "Senegal", dial: "+221" },
  { name: "Serbia", dial: "+381" },
  { name: "Singapur", dial: "+65" },
  { name: "Siria", dial: "+963" },
  { name: "Sri Lanka", dial: "+94" },
  { name: "Sudáfrica", dial: "+27" },
  { name: "Sudán", dial: "+249" },
  { name: "Suecia", dial: "+46" },
  { name: "Suiza", dial: "+41" },
  { name: "Tailandia", dial: "+66" },
  { name: "Taiwán", dial: "+886" },
  { name: "Tanzania", dial: "+255" },
  { name: "Túnez", dial: "+216" },
  { name: "Turquía", dial: "+90" },
  { name: "Ucrania", dial: "+380" },
  { name: "Uganda", dial: "+256" },
  { name: "Uruguay", dial: "+598" },
  { name: "Uzbekistán", dial: "+998" },
  { name: "Venezuela", dial: "+58" },
  { name: "Vietnam", dial: "+84" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    dialCode: "",
    phone: "",
    type: "",
    message: "",
  });
  const [emailError, setEmailError] = useState("");

  function validateEmail(value: string) {
    if (value && !value.includes("@")) {
      setEmailError('El email debe contener "@"');
    } else {
      setEmailError("");
    }
  }

  function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    if (!form.email.includes("@")) {
      setEmailError('El email debe contener "@"');
      return;
    }
    setSent(true);
  }

  return (
    <section id="contacto" className="bg-primary text-cream">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-4">
            <h3 className="font-kondolar text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-8">
              ¿Tu casa en Madrid?
            </h3>
            <p className="text-base md:text-lg text-cream/70 leading-relaxed max-w-xs mb-8">
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/34604378361"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-3 border border-cream/30 text-cream/70 hover:text-cream hover:border-cream transition-colors duration-200"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="mailto:madrid@madridaloha.com"
                aria-label="Email"
                className="p-3 border border-cream/30 text-cream/70 hover:text-cream hover:border-cream transition-colors duration-200"
              >
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <span className="text-6xl font-black text-cream/20 mb-4">✓</span>
                <h4 className="text-2xl font-black uppercase tracking-tight mb-3">
                  Mensaje enviado
                </h4>
                <p className="text-base md:text-lg text-cream/60">
                  Te responderemos en menos de 24 horas. ¡Gracias!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <div>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-transparent border-b border-cream/30 pb-3 text-base md:text-lg text-cream placeholder:text-cream focus:outline-none focus:border-cream transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      required
                      type="text"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        validateEmail(e.target.value);
                      }}
                      onBlur={() => validateEmail(form.email)}
                      className={`w-full bg-transparent border-b pb-3 text-base md:text-lg text-cream placeholder:text-cream focus:outline-none transition-colors ${
                        emailError ? "border-red-300 focus:border-red-300" : "border-cream/30 focus:border-cream"
                      }`}
                      placeholder="Tu correo aquí"
                    />
                    {emailError && (
                      <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-red-300">
                        {emailError}
                      </p>
                    )}
                  </div>
                </div>

                {/* Teléfono */}
                <div>
                  <div className="flex items-end gap-3 border-b border-cream/30 pb-3 focus-within:border-cream transition-colors">
                    <select
                      value={form.dialCode}
                      onChange={(e) => setForm({ ...form, dialCode: e.target.value })}
                      className="bg-transparent text-base md:text-lg text-cream focus:outline-none appearance-none cursor-pointer shrink-0 max-w-[180px]"
                    >
                      <option value="" disabled className="text-ink bg-white">Prefijo país</option>
                      {countryCodes.map((c) => (
                        <option key={c.name} value={c.dial} className="text-ink bg-white">
                          {c.name} ({c.dial})
                        </option>
                      ))}
                    </select>
                    <span className="text-cream/20 shrink-0">|</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="flex-1 bg-transparent text-base md:text-lg text-cream placeholder:text-cream focus:outline-none min-w-0"
                      placeholder="Tu número"
                    />
                  </div>
                </div>

                {/* ¿Qué necesitas? */}
                <div>
                  <select
                    required
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-base md:text-lg text-cream focus:outline-none focus:border-cream transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-ink">
                      ¿Qué necesitas?
                    </option>
                    {options.map((o) => (
                      <option key={o} value={o} className="text-ink">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-base md:text-lg text-cream placeholder:text-cream focus:outline-none focus:border-cream transition-colors resize-none"
                    placeholder="Tu mensaje aquí..."
                  />
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="btn-gradient bg-gradient-to-r from-[#ce304e] to-[#ce214a] inline-flex items-center gap-3 text-cream px-8 py-4 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 group"
                    style={{ border: '2px solid #deddd9' }}
                  >
                    Enviar mensaje
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
