// Home Controllers
// ****************

function renderView(viewName) {
  return (req, res) => {
    res.render(`store_${viewName}.ejs`);
  };
}

module.exports = {
  getStoreIndex: renderView("index"),

  getStoreIndex2: renderView("index2"),

  getStoreSalsa: renderView("salsa"),

  getStoreBachata: renderView("bachata"),

  getStoreIndividualClasses: renderView("individual_classes"),

  getStoreParty: renderView("party"),

  getStoreFAQ: renderView("faq"),

  getStoreContact: renderView("contact"),

  postStoreCheckout: (req, res) => {
    res.redirect("https://salsa-candela-admin.cyclic.app/classstripeform");
  },

  StripePartyRedirect: (req, res) => {
    res.redirect("https://admin.salsa-candela.com/boletos-stripe");
  },
};
