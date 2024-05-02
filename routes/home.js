// Home Routes
// ===========

// Imports
// *******
// Import express
const express = require("express");
// Create a router object
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
router.post("/checkout", homeCtrl.StripeClassRedirect);
router.post("/particulares", homeCtrl.getStoreIndividualClasses);
// Redirects
router.get("/boletos-stripe", homeCtrl.StripePartyRedirect);
router.get("/boletos-fiesta", homeCtrl.StripePartyRedirect);
router.get("/inscripcion-clases", homeCtrl.StripeClassRedirect);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Exports
// *******
module.exports = router;
