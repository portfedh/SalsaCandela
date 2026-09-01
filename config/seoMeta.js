// Per-page SEO metadata
// *********************
// Pages that share `views/partials/store_head.ejs` used to emit one identical
// <title> and meta description for the whole site, which search engines treat
// as duplicate content. Each page now supplies its own entry here.
//
// `noindex: true` marks transactional or utility pages that should never
// appear in search results (confirmations, password reset, 404). They carry no
// standalone value to a searcher and only dilute the indexed pages.
//
// Pages with their own head partial (guia-codi, sucursales, siguiente) already
// define their own tags and are intentionally absent from this map.

const seoMeta = {
  home: {
    es: {
      title: "Salsa Candela México | Academia de Baile CDMX | Salsa y Bachata",
      description:
        "Academia de baile de enseñanza de salsa cubana y bachata en CDMX. Instructores profesionales, cursos de 5 semanas, no necesitas pareja.",
    },
    en: {
      title: "Salsa Candela Mexico | Dance Academy CDMX | Salsa & Bachata Classes",
      description:
        "Learn to dance salsa and bachata in CDMX. Professional instructors, 5-week courses, no partner needed. Join Salsa Candela today!",
    },
  },

  salsa: {
    es: {
      title: "Clases de Salsa en CDMX | Salsa Cubana y Estilo LA | Salsa Candela",
      description:
        "Aprende a bailar salsa cubana y estilo LA en CDMX. Cursos de 5 semanas para principiantes, no necesitas pareja. Grupos en 5 sucursales.",
    },
    en: {
      title: "Salsa Classes in Mexico City | Cuban & LA Style | Salsa Candela",
      description:
        "Learn to dance Cuban salsa and LA style in Mexico City. Five-week beginner courses, no partner needed. Groups at 5 locations.",
    },
  },

  bachata: {
    es: {
      title: "Clases de Bachata en CDMX | Cursos para Principiantes | Salsa Candela",
      description:
        "Descubre el ritmo de la bachata en CDMX. Cursos de 5 semanas desde cero, no necesitas pareja. Instructores profesionales en 5 sucursales.",
    },
    en: {
      title: "Bachata Classes in Mexico City | Beginner Courses | Salsa Candela",
      description:
        "Discover the rhythm of bachata in Mexico City. Five-week courses from scratch, no partner needed. Professional instructors at 5 locations.",
    },
  },

  fiesta: {
    es: {
      title: "Fiesta de Salsa y Bachata en CDMX | Salsa Candela",
      description:
        "Baila salsa, timba y bachata con nosotros. Clase de salsa incluida, música en vivo del DJ y buena vibra. Compra tu boleto en preventa.",
    },
    en: {
      title: "Salsa & Bachata Party in Mexico City | Salsa Candela",
      description:
        "Dance salsa, timba and bachata with us. Salsa class included, DJ all night and great vibes. Get your ticket at the presale price.",
    },
  },

  particulares: {
    es: {
      title: "Clases Particulares de Baile en CDMX | Salsa Candela",
      description:
        "Clases particulares de salsa y bachata con atención personalizada. Avanza a tu ritmo con horarios flexibles. Ideal para bodas y eventos.",
    },
    en: {
      title: "Private Dance Classes in Mexico City | Salsa Candela",
      description:
        "Private salsa and bachata lessons with personalized attention. Progress at your own pace with flexible scheduling. Great for weddings.",
    },
  },

  faq: {
    es: {
      title: "Preguntas Frecuentes | Clases de Salsa y Bachata | Salsa Candela",
      description:
        "Respuestas a tus dudas sobre nuestras clases: precios, horarios, niveles, sucursales, inscripciones y pagos. Todo lo que necesitas saber.",
    },
    en: {
      title: "Frequently Asked Questions | Salsa & Bachata Classes | Salsa Candela",
      description:
        "Answers about our classes: pricing, schedules, levels, locations, registration and payments. Everything you need before you start.",
    },
  },

  boletos: {
    es: {
      title: "Boletos para la Fiesta | Salsa Candela",
      description:
        "Compra tus boletos para la próxima fiesta de salsa y bachata de Salsa Candela.",
    },
    en: {
      title: "Party Tickets | Salsa Candela",
      description:
        "Get your tickets for the next Salsa Candela salsa and bachata party.",
    },
  },

  avisoPrivacidad: {
    es: {
      title: "Aviso de Privacidad | Salsa Candela",
      description:
        "Aviso de privacidad de Salsa Candela: cómo recabamos, usamos y protegemos tus datos personales.",
    },
    en: {
      title: "Privacy Policy | Salsa Candela",
      description:
        "Salsa Candela's privacy policy: how we collect, use and protect your personal data.",
    },
  },

  politicaDevoluciones: {
    es: {
      title: "Política de Devoluciones | Salsa Candela",
      description:
        "Consulta la política de devoluciones y reembolsos de Salsa Candela para clases, cursos y boletos de fiesta.",
    },
    en: {
      title: "Refund Policy | Salsa Candela",
      description:
        "Read Salsa Candela's refund and cancellation policy for classes, courses and party tickets.",
    },
  },

  confirmacion: {
    noindex: true,
    es: {
      title: "Confirmación de Inscripción | Salsa Candela",
      description: "Tu inscripción ha sido confirmada.",
    },
    en: {
      title: "Registration Confirmed | Salsa Candela",
      description: "Your registration has been confirmed.",
    },
  },

  confirmacionEmail: {
    noindex: true,
    es: {
      title: "Confirmación de Correo | Salsa Candela",
      description: "Confirma tu dirección de correo electrónico.",
    },
    en: {
      title: "Email Confirmation | Salsa Candela",
      description: "Confirm your email address.",
    },
  },

  cambiarContrasena: {
    noindex: true,
    es: {
      title: "Cambiar Contraseña | Salsa Candela",
      description: "Restablece la contraseña de tu cuenta.",
    },
    en: {
      title: "Reset Password | Salsa Candela",
      description: "Reset your account password.",
    },
  },

  notFound: {
    noindex: true,
    es: {
      title: "Página no encontrada | Salsa Candela",
      description: "La página que buscas no existe o cambió de dirección.",
    },
    en: {
      title: "Page Not Found | Salsa Candela",
      description: "The page you are looking for does not exist or has moved.",
    },
  },
};

// Resolve a page key and language into the flat object store_head.ejs renders.
// Falls back to the home entry so an unknown key degrades to the previous
// site-wide default rather than rendering an empty <title>.
function getSeo(pageKey, lang) {
  const entry = seoMeta[pageKey] || seoMeta.home;
  const language = lang === "en" ? "en" : "es";
  return {
    title: entry[language].title,
    description: entry[language].description,
    noindex: entry.noindex === true,
  };
}

module.exports = { seoMeta, getSeo };
