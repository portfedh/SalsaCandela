// Home Controllers
// ****************

// Exports
// *******
module.exports = {
  // Store
  getStoreIndex: (req, res) => {
    res.render("store_index.ejs");
  },
  // Temp
  getStoreIndex2: (req, res) => {
    res.render("store_index2.ejs");
  },

  getStoreSalsa: (req, res) => {
    res.render("store_salsa.ejs");
  },

  getStoreIndividual: (req, res) => {
    res.render("store_individual.ejs");
  },

  getStoreBachata: (req, res) => {
    res.render("store_bachata.ejs");
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

  // Serve party registration
  getParty: (req, res) => {
    res.render("party_signup.ejs");
  },
};
