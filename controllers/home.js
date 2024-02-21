// Home Controllers
// ****************

module.exports = {
  getStoreIndex: (req, res) => {
    res.render("store_index.ejs");
  },
  getStoreIndex2: (req, res) => {
    res.render("store_index2.ejs");
  },

  getStoreSalsa: (req, res) => {
    res.render("store_salsa.ejs");
  },

  getStoreBachata: (req, res) => {
    res.render("store_bachata.ejs");
  },

  getStoreIndividualClasses: (req, res) => {
    res.render("store_individual_classes.ejs");
  },

  getStoreParty: (req, res) => {
    res.render("store_party.ejs");
  },

  getStoreFAQ: (req, res) => {
    res.render("store_faq.ejs");
  },

  getStoreContact: (req, res) => {
    res.render("store_contact.ejs");
  },
  postStoreCheckout: (req, res) => {
    res.redirect("https://noche-sensual.cyclic.app/classstripeform");
  },
};
