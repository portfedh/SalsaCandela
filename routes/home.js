// Home Routes
// ===========

// Imports
// *******
// Express
const express = require("express");
// Create router object
const router = express.Router();
// Controllers
const homeCtrl = require("../controllers/home");

// Routes
// ******
router.get("/", homeCtrl.getStoreIndex);
router.get("/salsa", homeCtrl.getStoreSalsa);
router.get("/bachata", homeCtrl.getStoreBachata);
router.get("/particulares", homeCtrl.getStoreIndividualClasses);
router.get("/fiesta", homeCtrl.getStoreParty);
router.get("/faq", homeCtrl.getStoreFAQ);
router.get("/contacto", homeCtrl.getStoreContact);
router.post("/particulares", homeCtrl.getStoreIndividualClasses);

// Redirects
// *********
// Fiesta
router.get("/boletos", homeCtrl.PartyRedirect);
// Clases Grl
router.post("/checkout", homeCtrl.ClassRedirect);
// Clases Salsa
router.post("/checkout-salsa", homeCtrl.ClassSalsaRedirect);
router.get("/checkout-salsa-xola", homeCtrl.ClassSalsaXolaRedirect);
router.get("/checkout-salsa-claveria", homeCtrl.ClassSalsaClaveriaRedirect);
router.get("/checkout-salsa-valle", homeCtrl.ClassSalsaValleRedirect);
router.get("/checkout-salsa-coapa", homeCtrl.ClassSalsaCoapaRedirect);
router.get("/checkout-salsa-satelite", homeCtrl.ClassSalsaSateliteRedirect);
// Clases bachata
router.post("/checkout-bachata", homeCtrl.ClassBachataRedirect);
router.get("/checkout-bachata-xola", homeCtrl.ClassBachataXolaRedirect);
router.get("/checkout-bachata-claveria", homeCtrl.ClassBachataClaveriaRedirect);
router.get("/checkout-bachata-valle", homeCtrl.ClassBachataValleRedirect);
router.get("/checkout-bachata-coapa", homeCtrl.ClassBachataCoapaRedirect);
router.get("/checkout-bachata-satelite", homeCtrl.ClassBachataSateliteRedirect);

router.get("/inscripcion-clases", homeCtrl.ClassRedirect);
router.post("/info-particulares", homeCtrl.infoParticulares);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Apple Pay
router.get(
  "/.well-known/apple-developer-merchantid-domain-association",
  homeCtrl.renderApplePay
);

// Sitemap route
router.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "../sitemap.xml"));
});

// Exports
// *******
module.exports = router;
