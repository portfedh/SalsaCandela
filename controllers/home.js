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
      paymentMode: process.env.PAYMENT_MODE
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

  getStoreSalsa: renderViewWithDate("salsa"),

  getStoreBachata: renderViewWithDate("bachata"),

  getStoreSiguiente: (req, res) => {
    const activeLocationData = partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;
    const nextDate = getNextSaturdayDate();

    res.render("siguiente.ejs", {
      branches: classSchedules,
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getStoreIndividualClasses: renderView("individual_classes"),

  getStoreGuiaCodi: renderView("guia-codi"),

  getStoreParty: (req, res) => {
    const activeLocationData = partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;

    res.render("party.ejs", {
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getStoreFAQ: renderView("faq"),

  getStoreContact: renderView("contact"),

  getConfirmation: renderView("confirmation"),

  getAvisoPrivacidad: renderView("aviso-privacidad"),

  getSucursales: (req, res) => {
    res.render("sucursales.ejs", {
      branches: classSchedules,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getEmailConfirmation: renderView("email-confirmation"),

  getPasswordReset: renderView("cambiar-contrasena"),

  getPoliticaDevoluciones: renderView("politica-devoluciones"),

  // Redirects
  PartyRedirect: (req, res) => {
    const referralCode = req.params.referralCode;
    const paymentType = req.query.payment;

    let baseUrl = "https://admin.salsa-candela.com/fiesta/boletos";

    // Handle different payment types
    if (paymentType === "codi") {
      baseUrl = "https://admin.salsa-candela.com/fiesta/boletos-codi";
    } else if (paymentType === "tarjeta") {
      baseUrl = "https://admin.salsa-candela.com/fiesta/boletos-tarjeta";
    }

    const redirectUrl = referralCode ? `${baseUrl}/${referralCode}` : baseUrl;
    res.redirect(redirectUrl);
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
