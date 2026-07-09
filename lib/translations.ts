export type Lang = "es" | "en";

const t = {
  es: {
    nav: {
      links: [
        { label: "Buscas Casa",    href: "#aloha-home" },
        { label: "Propietarios",   href: "#aloha-property" },
        { label: "Carta Consular", href: "#aloha-cleaning" },
        { label: "Equipo",         href: "#equipo" },
        { label: "FAQ",            href: "#faq" },
        { label: "Contacto",       href: "#contacto" },
      ],
    },
    hero: {
      title1a: "¿Vienes a vivir",
      title1b: "a Madrid?",
      title2a: "Tenemos la casa",
      title2b: "que buscas",
      cta1: "Busco casa",
      cta2: "Alquilo piso",
    },
    heroStats: [
      { label: "Estudiantes\nalojados" },
      { label: "Empresarios y\ntrabajadores" },
      { label: "Años de\nexperiencia" },
    ],
    universities: {
      label: "Universidades aliadas",
    },
    home: {
      kicker: "Busco dónde vivir en Madrid",
      title1: "Aloha ",
      title2: "Home",
      intro: "Llegás a Madrid con las maletas. Nosotros ponemos el resto.",
      benefits: [
        {
          title: "Tu piso desde el día uno",
          desc: "Encontramos tu casa en la zona que quieras, cerca de tu escuela o trabajo, con las comodidades que nos pidas, ajustándonos a tu presupuesto.",
        },
        {
          title: "Te recogemos en el aeropuerto",
          desc: "Tu primera hora en Madrid, sin estrés. Te llevamos directo a tu nuevo hogar.",
        },
        {
          title: "Instalado en días, no semanas",
          desc: "NIE, empadronamiento, cuenta bancaria, abono de transporte. Te ayudamos con todos los trámites para que empieces a disfrutar de esta experiencia cuanto antes.",
        },
        {
          title: "Servicio de limpieza",
          desc: "Contamos con personal de limpieza, pregúntanos por nuestros packs de limpieza, lavado y planchado.",
        },
      ],
      cta: "Buscar mi piso ahora",
    },
    property: {
      kicker: "Quiero alquilar mi piso en Madrid",
      title1: "Aloha ",
      title2: "Property",
      intro: "Alquilar no debería ser un segundo trabajo. Nosotros lo gestionamos todo para que tú solo disfrutes de la rentabilidad.",
      benefits: [
        {
          title: "Cobras sin preocuparte por nada",
          desc: "Seleccionamos al inquilino, firmamos el contrato y gestionamos cualquier incidencia. Tú solo ves el ingreso en tu cuenta.",
        },
        {
          title: "Nunca recibes una llamada",
          desc: "Todas las comunicaciones con el inquilino pasan por nosotros. Tu tranquilidad está garantizada.",
        },
        {
          title: "Inquilinos en los que confiar",
          desc: "Verificamos ingresos, referencias y documentación de cada candidato. Nuestro dto. de riesgos te ayudará a elegir el mejor perfil.",
        },
        {
          title: "El piso, siempre en perfectas condiciones",
          desc: "Limpieza gratuita al finalizar cada contrato y gestión de mantenimiento incluida.",
        },
      ],
      cta: "¿Qué hacemos por tu piso?",
      modal: {
        title1: "Detalles ",
        title2: "Aloha Property",
        cta: "Sí, quiero el servicio",
        sections: [
          {
            title: "Encontramos tu inquilino",
            items: [
              "Buscamos al inquilino que mejor se adapte a tu vivienda según tus necesidades.",
              "Nuestro departamento de riesgos verifica la solvencia de cada candidato.",
              "Nuestro departamento legal redacta los contratos e incluye las cláusulas necesarias.",
            ],
          },
          {
            title: "Check In",
            items: [
              "Servicio de limpieza de la vivienda incluido antes de la entrada.",
              "Gestionamos el Check In completo con el inquilino.",
              "Cambiamos los datos bancarios y suministros a nombre de los nuevos inquilinos.",
            ],
          },
          {
            title: "Durante el alquiler",
            items: [
              "Atención telefónica directa y disponibilidad 24x7 para tus inquilinos.",
              "Resolución de incidencias y averías: contactamos con el seguro o con técnicos profesionales cuando es necesario.",
              "Presentamos mínimo 2 presupuestos para cualquier reparación antes de ejecutarla.",
              "Gestión de partes y reparaciones con el seguro de la vivienda.",
              "Coordinamos la sustitución de electrodomésticos o mobiliario con tu aprobación previa.",
              "Gestionamos con la Comunidad de Propietarios los recibos de agua y cualquier incidencia.",
            ],
          },
          {
            title: "Check Out",
            items: [
              "Realizamos el Check Out y verificamos el estado del inmueble.",
              "Gestionamos pagos pendientes, fianzas y gastos del inquilino saliente.",
              "Coordinamos la limpieza integral entre el Check Out y el nuevo Check In.",
              "Verificamos nuevamente la solvencia del inquilino entrante.",
            ],
          },
        ],
      },
    },
    cleaning: {
      kicker: "Trámite esencial para tu visado",
      title1: "Carta de",
      title2: "acomodación",
      intro: "El consulado te la pide. Nosotros te la damos.\nRecibes tu Carta de Acomodación oficial en cuanto firmas tu reserva. Sin esperas, sin complicaciones.",
      benefits: [
        { title: "Válida para cualquier consulado", desc: "Reconocida en embajadas y consulados de todo el mundo." },
        { title: "La recibes en 24 horas", desc: "Emitimos tu carta en cuanto confirmamos tu reserva." },
        { title: "Sin burocracia", desc: "Nosotros nos encargamos de toda la gestión documental." },
        { title: "Tranquilidad antes de llegar", desc: "Viaja con toda la documentación en regla desde el primer día." },
      ],
      cta: "Reserva y recibe tu carta",
    },
    testimonials: {
      items: [
        {
          name: "Gabriel Ochoa Jara",
          role: "Máster ADE · México",
          quote: "Excelente servicio de principio a fin. 100% recomendado. Rebeca es una excelente profesional y persona. El piso que alquilas es tal cual te lo muestra en fotos.",
        },
        {
          name: "Clara Tennyson",
          role: "Posgrado de Economía · Chile",
          quote: "Recomiendo al 100% esta increíble empresa, me ayudó a encontrar el apartamento de mis sueños. Rebeca y Juan Carlos son unos cracks. Gracias chicos.",
        },
        {
          name: "Martín Fernández",
          role: "Posgrado de Derecho · Argentina",
          quote: "Llegué a Madrid un jueves y 3 días antes ya tenía mi habitación firmada. Rebeca es muy profesional y consiguió exactamente el espacio que quería.",
        },
      ],
    },
    team: {
      description: "Sabemos lo que es llegar a una ciudad nueva sin conocer a nadie. Nosotros te ayudamos a encontrar el lugar donde sentirte en casa desde el primer día.",
    },
    faq: {
      title1: "Preguntas ",
      title2: "Frecuentes",
      items: [
        {
          q: "¿Cuánto tiempo tardáis en encontrarme piso o habitación?",
          a: "En la mayoría de los casos tenemos opciones disponibles en menos de 72 horas. Si vienes con tiempo, podemos prepararte una selección personalizada antes de que llegues a Madrid.",
        },
        {
          q: "¿Los pisos vienen amueblados y equipados?",
          a: "Sí. Todos los alojamientos están totalmente equipados: muebles, electrodomésticos, ropa de cama y utensilios de cocina. Llegas con las maletas y listo.",
        },
        {
          q: "¿Necesito el NIE para firmar el contrato?",
          a: "No es imprescindible para empezar, con tu pasaporte es suficiente. Te ayudamos con el trámite del NIE, número de cuenta, abono, empadronamiento y otros trámites administrativos para que estés regularizado cuanto antes.",
        },
        {
          q: "¿Recogéis en el aeropuerto aunque llegue fuera del horario habitual?",
          a: "Sí. Nos adaptamos a tu vuelo en horario laboral. Solo necesitamos los datos de llegada con antelación para coordinar el servicio sin coste adicional.",
        },
        {
          q: "¿En qué zonas de Madrid tenéis pisos?",
          a: "Trabajamos en toda la ciudad, con especial presencia en barrios universitarios y zonas bien comunicadas como Moncloa, Chamberí, Malasaña, Lavapiés y Salamanca.",
        },
        {
          q: "¿Ayudáis con el empadronamiento, cuenta bancaria y el abono de transporte?",
          a: "Sí. Te acompañamos en los trámites del día a día: apertura de cuenta bancaria, tarjeta de transporte y cualquier gestión que necesites al llegar.",
        },
        {
          q: "¿Puedo contratar también el servicio de limpieza?",
          a: "Por supuesto. Contamos con servicio de limpieza periódico y puntual, con opción de lavandería incluida. Pregúntanos por nuestros packs.",
        },
        {
          q: "¿Cómo puedo contactar con vosotros?",
          a: "Puedes escribirnos a través del formulario de contacto o por WhatsApp. Respondemos en menos de 24 horas en días laborables.",
        },
      ],
    },
    contact: {
      kicker: "Hablemos",
      title1: "Contacto",
      intro: "Cuéntanos qué necesitas y te respondemos en menos de 24 horas.",
      whatsapp: "WhatsApp",
      email: "Email",
      placeholders: {
        name: "Nombre",
        email: "Correo electrónico",
        prefix: "Prefijo",
        phone: "Número de móvil",
        message: "Tu mensaje aquí...",
      },
      typeOptions: [
        "Busco habitación / piso",
        "Quiero gestionar mi propiedad",
        "Carta de acomodación",
        "Otra consulta",
      ],
      typeLabel: "¿Qué necesitas?",
      sent: "Mensaje enviado",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Te responderemos en\nmenos de 24 horas.\n¡Gracias!",
      submitError: "No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      errors: {
        name: "El nombre es obligatorio",
        email: "Introduce un correo válido",
        dialCode: "Selecciona un prefijo",
        phone: "Número de teléfono inválido",
        type: "Selecciona una opción",
        message: "El mensaje es obligatorio",
      },
    },
    footer: {
      description: "Ayudamos a estudiantes y trabajadores nacionales a encontrar su hogar en Madrid.",
      copyright: "© 2026 Madrid Aloha · Todos los derechos reservados",
      createdBy: "Proyecto creado por:",
    },
  },

  en: {
    nav: {
      links: [
        { label: "Find a Home",   href: "#aloha-home" },
        { label: "Landlords",     href: "#aloha-property" },
        { label: "Visa Letter",   href: "#aloha-cleaning" },
        { label: "Team",          href: "#equipo" },
        { label: "FAQ",           href: "#faq" },
        { label: "Contact",       href: "#contacto" },
      ],
    },
    hero: {
      title1a: "Moving to",
      title1b: "Madrid?",
      title2a: "We have the home",
      title2b: "you're looking for",
      cta1: "Find a home",
      cta2: "List my property",
    },
    heroStats: [
      { label: "Students\nhoused" },
      { label: "Professionals &\nentrepreneurs" },
      { label: "Years of\nexperience" },
    ],
    universities: {
      label: "Partner universities",
    },
    home: {
      kicker: "Looking for a place to live in Madrid",
      title1: "Aloha ",
      title2: "Home",
      intro: "You arrive in Madrid with your bags. We handle the rest.",
      benefits: [
        {
          title: "Your apartment from day one",
          desc: "We find your home in the neighborhood you want, close to your school or job, with the amenities you need, all within your budget.",
        },
        {
          title: "We pick you up at the airport",
          desc: "Your first hour in Madrid, stress-free. We take you straight to your new home.",
        },
        {
          title: "Settled in days, not weeks",
          desc: "NIE, city registration, bank account, public transport card. We guide you through every step so you can start enjoying Madrid as soon as possible.",
        },
        {
          title: "Cleaning service",
          desc: "We have a professional cleaning team. Ask us about our cleaning, laundry, and ironing packages.",
        },
      ],
      cta: "Find my apartment now",
    },
    property: {
      kicker: "I want to rent my apartment in Madrid",
      title1: "Aloha ",
      title2: "Property",
      intro: "Renting out shouldn't feel like a second job. We manage everything so you can simply enjoy the returns.",
      benefits: [
        {
          title: "Get paid without worrying about a thing",
          desc: "We select the tenant, sign the contract, and handle any issues. You just see the money in your account.",
        },
        {
          title: "You'll never get a call",
          desc: "All communication with the tenant goes through us. Your peace of mind is guaranteed.",
        },
        {
          title: "Tenants you can trust",
          desc: "We verify income, references, and documents for every applicant. Our risk team helps you choose the best profile.",
        },
        {
          title: "Your property, always in perfect shape",
          desc: "Free cleaning at the end of every lease and full maintenance management included.",
        },
      ],
      cta: "What do we do for your property?",
      modal: {
        title1: "Details ",
        title2: "Aloha Property",
        cta: "Yes, I want the service",
        sections: [
          {
            title: "We find your tenant",
            items: [
              "We look for the tenant that best fits your property and your needs.",
              "Our risk department verifies the financial reliability of every applicant.",
              "Our legal team drafts the contracts and adds all the necessary clauses.",
            ],
          },
          {
            title: "Check In",
            items: [
              "Professional cleaning of the property included before move-in.",
              "We handle the full Check In process with the tenant.",
              "We update bank details and utilities to the new tenants' names.",
            ],
          },
          {
            title: "During the lease",
            items: [
              "Direct phone support and 24/7 availability for your tenants.",
              "We handle incidents and repairs — contacting insurance or professionals when needed.",
              "We get at least 2 quotes for any repair before going ahead.",
              "We manage all insurance claims and repair paperwork.",
              "We coordinate appliance or furniture replacements with your prior approval.",
              "We handle homeowners' association bills and any related issues.",
            ],
          },
          {
            title: "Check Out",
            items: [
              "We perform the Check Out and inspect the property's condition.",
              "We handle pending payments, deposits, and outgoing tenant costs.",
              "We coordinate a full cleaning between Check Out and the new Check In.",
              "We re-verify the incoming tenant's financial reliability.",
            ],
          },
        ],
      },
    },
    cleaning: {
      kicker: "Essential for your visa application",
      title1: "Letter of",
      title2: "accommodation",
      intro: "The consulate asks for it. We provide it.\nYou receive your official Letter of Accommodation as soon as you sign your booking. No waiting, no hassle.",
      benefits: [
        { title: "Valid at any consulate", desc: "Recognized at embassies and consulates worldwide." },
        { title: "Ready within 24 hours", desc: "We issue your letter as soon as your booking is confirmed." },
        { title: "Zero bureaucracy", desc: "We take care of all the paperwork for you." },
        { title: "Peace of mind before you arrive", desc: "Travel with all your documents sorted from day one." },
      ],
      cta: "Book and get your letter",
    },
    testimonials: {
      items: [
        {
          name: "Gabriel Ochoa Jara",
          role: "Master's in Business · Mexico",
          quote: "Excellent service from start to finish. 100% recommended. Rebeca is an outstanding professional and person. The apartment is exactly as shown in the photos.",
        },
        {
          name: "Clara Tennyson",
          role: "Postgrad in Economics · Chile",
          quote: "I 100% recommend this amazing company — they helped me find the apartment of my dreams. Rebeca and Juan Carlos are absolute pros. Thanks guys!",
        },
        {
          name: "Martín Fernández",
          role: "Postgrad in Law · Argentina",
          quote: "I arrived in Madrid on a Thursday and already had my room signed 3 days later. Rebeca is incredibly professional and found exactly what I was looking for.",
        },
      ],
    },
    team: {
      description: "We know what it's like to arrive in a new city where you don't know anyone. We're here to help you find the place where you'll feel at home from day one.",
    },
    faq: {
      title1: "Frequently ",
      title2: "Asked Questions",
      items: [
        {
          q: "How quickly can you find me an apartment or room?",
          a: "In most cases we have options available within 72 hours. If you're planning ahead, we can prepare a personalized selection before you even arrive in Madrid.",
        },
        {
          q: "Are the apartments furnished and fully equipped?",
          a: "Yes. All accommodations are fully equipped: furniture, appliances, bed linen, and kitchen utensils. You just show up with your bags.",
        },
        {
          q: "Do I need a NIE to sign the contract?",
          a: "Not necessarily — your passport is enough to get started. We'll help you obtain your NIE, open a bank account, get a transport card, register at the city hall, and handle any other admin tasks.",
        },
        {
          q: "Can you pick me up at the airport even outside business hours?",
          a: "Yes. We adapt to your flight within business hours. We just need your arrival details in advance to arrange the service at no extra cost.",
        },
        {
          q: "Which areas of Madrid do you cover?",
          a: "We work across the whole city, with a strong presence in university neighborhoods and well-connected areas like Moncloa, Chamberí, Malasaña, Lavapiés, and Salamanca.",
        },
        {
          q: "Can you help with city registration, bank account, and transport card?",
          a: "Absolutely. We guide you through everyday admin: opening a bank account, getting your transport card, and anything else you need when you arrive.",
        },
        {
          q: "Can I also hire a cleaning service?",
          a: "Of course. We offer both regular and one-off cleaning, with a laundry option included. Just ask us about our packages.",
        },
        {
          q: "How can I get in touch?",
          a: "You can reach us through the contact form or via WhatsApp. We respond within 24 hours on business days.",
        },
      ],
    },
    contact: {
      kicker: "Let's talk",
      title1: "Contact",
      intro: "Tell us what you need and we'll get back to you within 24 hours.",
      whatsapp: "WhatsApp",
      email: "Email",
      placeholders: {
        name: "Full name",
        email: "Email address",
        prefix: "Prefix",
        phone: "Mobile number",
        message: "Your message here...",
      },
      typeOptions: [
        "Looking for a room / apartment",
        "I want to manage my property",
        "Letter of accommodation",
        "Other inquiry",
      ],
      typeLabel: "What do you need?",
      sent: "Message sent",
      send: "Send message",
      sending: "Sending...",
      success: "We'll get back to you\nwithin 24 hours.\nThank you!",
      submitError: "We couldn't send your message. Please try again or reach us on WhatsApp.",
      errors: {
        name: "Name is required",
        email: "Please enter a valid email",
        dialCode: "Please select a prefix",
        phone: "Invalid phone number",
        type: "Please select an option",
        message: "Message is required",
      },
    },
    footer: {
      description: "We help students and professionals find their home in Madrid.",
      copyright: "© 2026 Madrid Aloha · All rights reserved",
      createdBy: "Project created by:",
    },
  },
} as const;

export default t;
