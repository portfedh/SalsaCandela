// Home Controllers
// ****************

const path = require("path");

function renderView(viewName) {
  return (req, res) => {
    res.render(`${viewName}.ejs`);
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

  getStoreSalsa: renderView("salsa"),

  getStoreBachata: renderView("bachata"),

  getStoreIndividualClasses: renderView("individual_classes"),

  getStoreParty: renderView("party"),

  getStoreFAQ: renderView("faq"),

  getStoreContact: renderView("contact"),

  getConfirmation: renderView("confirmation"),

  getAvisoPrivacidad: renderView("aviso-privacidad"),

  getSucursales: renderView("sucursales"),

  // Redirects
  PartyRedirect: (req, res) => {
    const referralCode = req.params.referralCode;
    const baseUrl = "https://admin.salsa-candela.com/fiesta/boletos";
    const redirectUrl = referralCode ? `${baseUrl}/${referralCode}` : baseUrl;
    res.redirect(redirectUrl);
  },

  ClassRedirect: (req, res) => {
    res.redirect("https://admin.salsa-candela.com/classstripeform?regKey=zG9xKmF3");
  },

  ClassSalsaRedirect: (req, res) => {
    res.redirect("https://admin.salsa-candela.com/classstripeform?curso=salsa&regKey=zG9xKmF3");
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
