// Home Controllers
// ****************

const path = require("path");
const courseData = require("../config/courseData");
const classSchedules = require("../config/classSchedules");
const partyConfig = require("../config/partyConfig");

function getNextSaturdayDate() {
  const now = new Date();
  const saturdayDates = [];

  // Extract all Saturday dates from courseData
  Object.values(courseData).forEach((course) => {
    if (course.startDates && course.startDates.saturday) {
      saturdayDates.push(new Date(course.startDates.saturday));
    }
  });

  // Filter dates that are after current date and sort them
  const futureSaturdays = saturdayDates
    .filter((date) => date > now)
    .sort((a, b) => a - b);

  if (futureSaturdays.length === 0) {
    return "TBA"; // To Be Announced if no future dates
  }

  // Get the first (earliest) future Saturday
  const nextSaturday = futureSaturdays[0];

  // Format date to Spanish format: "27 de Junio 2025"
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const day = nextSaturday.getDate();
  const month = months[nextSaturday.getMonth()];
  const year = nextSaturday.getFullYear();

  return `${day} de ${month} ${year}`;
}

function renderView(viewName) {
  return (req, res) => {
    res.render(`${viewName}.ejs`, { paymentMode: process.env.PAYMENT_MODE });
  };
}

function renderViewWithDate(viewName) {
  return (req, res) => {
    const nextDate = getNextSaturdayDate();
    res.render(`${viewName}.ejs`, {
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  };
}

module.exports = {
  renderApplePay: (req, res) => {
    const certPath = path.join(
      __dirname,
      "../public/.well-known/apple-developer-merchantid-domain-association"
    );
    res.sendFile(certPath);
  },

  getStoreIndex: renderView("index"),

  getStoreSalsa: (req, res) => {
    const nextDate = getNextSaturdayDate();
    res.render("salsa.ejs", {
      pageHeader: {
        title: "Clases de Salsa",
        subtitle: "Aprende a bailar salsa cubana y estilo LA",
      },
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreBachata: (req, res) => {
    const nextDate = getNextSaturdayDate();
    res.render("bachata.ejs", {
      pageHeader: {
        title: "Clases de Bachata",
        subtitle: "Descubre el ritmo de la bachata",
      },
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreSiguiente: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;
    const nextDate = getNextSaturdayDate();

    res.render("siguiente.ejs", {
      branches: classSchedules,
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreIndividualClasses: (req, res) => {
    res.render("individual_classes.ejs", {
      pageHeader: {
        title: "Clases Particulares",
        subtitle: "Atención personalizada para tu aprendizaje",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreGuiaCodi: (req, res) => {
    res.render("guia-codi.ejs", {
      pageHeader: {
        title: 'Guía CoDi<span class="reg-symbol">®</span>',
        subtitle: "Tu guía completa para pagos digitales instantáneos",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreParty: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;

    res.render("party.ejs", {
      pageHeader: {
        title: "Fiesta",
        subtitle: "Baila Salsa y Bachata con nosotros",
      },
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreFAQ: (req, res) => {
    res.render("faq.ejs", {
      pageHeader: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas a tus dudas sobre nuestras clases",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getConfirmation: renderView("confirmation"),

  getAvisoPrivacidad: renderView("aviso-privacidad"),

  getSucursales: (req, res) => {
    res.render("sucursales.ejs", {
      pageHeader: {
        title: "Nuestras Sucursales",
        subtitle: "Encuentra la sucursal más cercana a ti",
      },
      branches: classSchedules,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getEmailConfirmation: renderView("email-confirmation"),

  getPasswordReset: renderView("cambiar-contrasena"),

  getPoliticaDevoluciones: renderView("politica-devoluciones"),

  // Redirects
  PartyRedirect: (req, res) => {
    const referralCode = req.params.referralCode || "";
    res.render("boletos", {
      referralCode: referralCode,
      paymentMode: "modal",
    });
  },

  ClassRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?regKey=zG9xKmF3"
    );
  },

  ClassSalsaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&regKey=zG9xKmF3"
    );
  },

  ClassSalsaXolaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&sucursal=xola&regKey=zG9xKmF3"
    );
  },

  ClassSalsaClaveriaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&sucursal=claveria&regKey=zG9xKmF3"
    );
  },

  ClassSalsaValleRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&sucursal=valle&regKey=zG9xKmF3"
    );
  },

  ClassSalsaCoapaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&sucursal=coapa&regKey=zG9xKmF3"
    );
  },

  ClassSalsaSateliteRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=salsa&sucursal=satelite&regKey=zG9xKmF3"
    );
  },
  // Bachata
  ClassBachataRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&regKey=zG9xKmF3"
    );
  },

  ClassBachataXolaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&sucursal=xola"
    );
  },

  ClassBachataClaveriaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&sucursal=claveria&regKey=zG9xKmF3"
    );
  },

  ClassBachataValleRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&sucursal=valle&regKey=zG9xKmF3"
    );
  },

  ClassBachataCoapaRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&sucursal=coapa&regKey=zG9xKmF3"
    );
  },

  ClassBachataSateliteRedirect: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/classstripeform?curso=bachata&sucursal=satelite&regKey=zG9xKmF3"
    );
  },

  infoParticulares: (req, res) => {
    res.redirect(
      "https://admin.salsa-candela.com/clases-particulares/inscripcion-stripe"
    );
  },
};
