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
router.get("/index2", homeCtrl.getStoreIndex2);
router.get("/salsa", homeCtrl.getStoreSalsa);
router.get("/bachata", homeCtrl.getStoreBachata);
router.get("/particulares", homeCtrl.getStoreIndividualClasses);
router.get("/fiesta", homeCtrl.getStoreParty);
router.get("/faq", homeCtrl.getStoreFAQ);
router.get("/contacto", homeCtrl.getStoreContact);
router.post("/checkout", homeCtrl.postStoreCheckout);
router.post("/particulares", homeCtrl.getStoreIndividualClasses);
router.get("/boletos-stripe", homeCtrl.StripePartyRedirect);
router.get("/boletos-fiesta", homeCtrl.StripePartyRedirect);

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Exports
// *******
module.exports = router;
