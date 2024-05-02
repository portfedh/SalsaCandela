// Home Controllers
// ****************

function renderView(viewName) {
  return (req, res) => {
    res.render(`store_${viewName}.ejs`);
  };
}

module.exports = {
  getStoreIndex: renderView("index"),

  getStoreSalsa: renderView("salsa"),

  getStoreBachata: renderView("bachata"),

  getStoreIndividualClasses: renderView("individual_classes"),

  getStoreParty: renderView("party"),

  getStoreFAQ: renderView("faq"),

  getStoreContact: renderView("contact"),

  // Redirects
  StripePartyRedirect: (req, res) => {
    res.redirect("https://admin.salsa-candela.com/boletos-stripe");
  },

  StripeClassRedirect: (req, res) => {
    res.redirect("https://admin.salsa-candela.com/classstripeform");
  },
};
