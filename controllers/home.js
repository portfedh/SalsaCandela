// Home Controllers
// ****************

const path = require("path");
const courseData = require("../config/courseData");
const classSchedules = require("../config/classSchedules");
const partyConfig = require("../config/partyConfig");

function getNextSaturdayDate() {
  const now = new Date();
  const coursePeriods = [];

  // Extract all course periods with their start dates
  Object.values(courseData).forEach((course) => {
    if (course.startDates) {
      const allStartDates = [];

      // Collect all start dates for this course period
      if (course.startDates.saturday) allStartDates.push(new Date(course.startDates.saturday));
      if (course.startDates.sunday) allStartDates.push(new Date(course.startDates.sunday));
      if (course.startDates.monday) allStartDates.push(new Date(course.startDates.monday));
      if (course.startDates.tuesday) allStartDates.push(new Date(course.startDates.tuesday));

      // Find the latest (last) start date for this course period
      const latestStartDate = allStartDates.sort((a, b) => b - a)[0];

      // Store the course period with its Saturday date and latest start date
      if (course.startDates.saturday) {
        coursePeriods.push({
          saturdayDate: new Date(course.startDates.saturday),
          latestStartDate: latestStartDate
        });
      }
    }
  });

  // Filter for course periods where the latest start date is still in the future
  const availableCoursePeriods = coursePeriods
    .filter((period) => period.latestStartDate > now)
    .sort((a, b) => a.saturdayDate - b.saturdayDate);

  if (availableCoursePeriods.length === 0) {
    return "TBA"; // To Be Announced if no future dates
  }

  // Get the Saturday date of the first available course period
  const nextSaturday = availableCoursePeriods[0].saturdayDate;

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

function getNextSaturdayDateEnglish() {
  const now = new Date();
  const coursePeriods = [];

  // Extract all course periods with their start dates
  Object.values(courseData).forEach((course) => {
    if (course.startDates) {
      const allStartDates = [];

      // Collect all start dates for this course period
      if (course.startDates.saturday) allStartDates.push(new Date(course.startDates.saturday));
      if (course.startDates.sunday) allStartDates.push(new Date(course.startDates.sunday));
      if (course.startDates.monday) allStartDates.push(new Date(course.startDates.monday));
      if (course.startDates.tuesday) allStartDates.push(new Date(course.startDates.tuesday));

      // Find the latest (last) start date for this course period
      const latestStartDate = allStartDates.sort((a, b) => b - a)[0];

      // Store the course period with its Saturday date and latest start date
      if (course.startDates.saturday) {
        coursePeriods.push({
          saturdayDate: new Date(course.startDates.saturday),
          latestStartDate: latestStartDate
        });
      }
    }
  });

  // Filter for course periods where the latest start date is still in the future
  const availableCoursePeriods = coursePeriods
    .filter((period) => period.latestStartDate > now)
    .sort((a, b) => a.saturdayDate - b.saturdayDate);

  if (availableCoursePeriods.length === 0) {
    return "TBA"; // To Be Announced if no future dates
  }

  // Get the Saturday date of the first available course period
  const nextSaturday = availableCoursePeriods[0].saturdayDate;

  // Format date to English format: "June 27, 2025"
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = nextSaturday.getDate();
  const month = months[nextSaturday.getMonth()];
  const year = nextSaturday.getFullYear();

  return `${month} ${day}, ${year}`;
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

  getStoreIndex: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;

    res.render("index.ejs", {
      lang: 'es',
      currentPath: req.path,
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreSalsa: (req, res) => {
    const nextDate = getNextSaturdayDate();
    res.render("salsa.ejs", {
      lang: 'es',
      currentPath: req.path,
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
      lang: 'es',
      currentPath: req.path,
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
      lang: 'es',
      currentPath: req.path,
      branches: classSchedules,
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreIndividualClasses: (req, res) => {
    res.render("clases-individuales.ejs", {
      lang: 'es',
      currentPath: req.path,
      pageHeader: {
        title: "Clases Particulares",
        subtitle: "Atención personalizada para tu aprendizaje",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreGuiaCodi: (req, res) => {
    res.render("guia-codi.ejs", {
      lang: 'es',
      currentPath: req.path,
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

    res.render("fiesta.ejs", {
      lang: 'es',
      currentPath: req.path,
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
      lang: 'es',
      currentPath: req.path,
      pageHeader: {
        title: "Preguntas Frecuentes",
        subtitle: "Respuestas a tus dudas sobre nuestras clases",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getConfirmation: (req, res) => {
    res.render("confirmacion.ejs", {
      lang: 'es',
      currentPath: req.path,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getAvisoPrivacidad: (req, res) => {
    res.render("aviso-privacidad.ejs", {
      lang: 'es',
      currentPath: req.path,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getSucursales: (req, res) => {
    res.render("sucursales.ejs", {
      lang: 'es',
      currentPath: req.path,
      pageHeader: {
        title: "Nuestras Sucursales",
        subtitle: "Encuentra la sucursal más cercana a ti",
      },
      branches: classSchedules,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getEmailConfirmation: (req, res) => {
    res.render("confirmacion-email.ejs", {
      lang: 'es',
      currentPath: req.path,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getPasswordReset: (req, res) => {
    res.render("cambiar-contrasena.ejs", {
      lang: 'es',
      currentPath: req.path,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getPoliticaDevoluciones: (req, res) => {
    res.render("politica-devoluciones.ejs", {
      lang: 'es',
      currentPath: req.path,
      paymentMode: process.env.PAYMENT_MODE
    });
  },

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

  // English Controllers
  // *******************

  getStoreIndexEnglish: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;

    res.render("index-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreSalsaEnglish: (req, res) => {
    const nextDate = getNextSaturdayDateEnglish();
    res.render("salsa-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Salsa Classes",
        subtitle: "Learn to dance Cuban salsa and LA style",
      },
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreBachataEnglish: (req, res) => {
    const nextDate = getNextSaturdayDateEnglish();
    res.render("bachata-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Bachata Classes",
        subtitle: "Discover the rhythm of bachata",
      },
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreSiguienteEnglish: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;
    const nextDate = getNextSaturdayDateEnglish();

    res.render("siguiente-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      branches: classSchedules,
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      nextSaturdayDate: nextDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreIndividualClassesEnglish: (req, res) => {
    res.render("clases-individuales-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Private Classes",
        subtitle: "Personalized attention for your learning",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreGuiaCodiEnglish: (req, res) => {
    res.render("guia-codi-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: 'CoDi Guide<span class="reg-symbol">®</span>',
        subtitle: "Your complete guide for instant digital payments",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStorePartyEnglish: (req, res) => {
    const activeLocationData =
      partyConfig.locations[partyConfig.activeLocation];
    const fullDate = `${partyConfig.date.dayOfWeek}, ${partyConfig.date.day} de ${partyConfig.date.fullMonth} ${partyConfig.date.year}`;

    res.render("fiesta-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Party",
        subtitle: "Dance Salsa and Bachata with us",
      },
      party: partyConfig,
      activeLocation: activeLocationData,
      fullDate: fullDate,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getStoreFAQEnglish: (req, res) => {
    res.render("faq-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Frequently Asked Questions",
        subtitle: "Answers to your questions about our classes",
      },
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getConfirmationEnglish: (req, res) => {
    res.render("confirmacion-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getAvisoPrivacidadEnglish: (req, res) => {
    res.render("aviso-privacidad-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getSucursalesEnglish: (req, res) => {
    res.render("sucursales-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      pageHeader: {
        title: "Our Branches",
        subtitle: "Find the branch closest to you",
      },
      branches: classSchedules,
      paymentMode: process.env.PAYMENT_MODE,
    });
  },

  getEmailConfirmationEnglish: (req, res) => {
    res.render("confirmacion-email-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getPasswordResetEnglish: (req, res) => {
    res.render("cambiar-contrasena-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      paymentMode: process.env.PAYMENT_MODE
    });
  },

  getPoliticaDevolucionesEnglish: (req, res) => {
    res.render("politica-devoluciones-en.ejs", {
      lang: 'en',
      currentPath: req.path.replace('/en', ''),
      paymentMode: process.env.PAYMENT_MODE
    });
  },
};
