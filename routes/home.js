// Home Routes
// ===========

// Imports
// *******
// Express & create a router object
const express = require("express");
const router = express.Router();
// Multer
const upload = require("../middleware/multer");
// Controllers
const homeCtrl = require("../controllers/home");
const authCtrl = require("../controllers/auth");
const stripeCtrl = require("../controllers/stripe");

// Routes
// ******
// Stripe Checkout
router.post("/checkout", stripeCtrl.createTestCheckout);
router.post("/webhook", stripeCtrl.stripeWebhook);
router.get("/success", stripeCtrl.stripeSuccess);
router.get("/cancel", stripeCtrl.stripeCancel);
router.get("/order-info", stripeCtrl.getOrderInfo);

// Store Routes
// ************
// Home
router.get("/", homeCtrl.getStoreIndex);
router.get("/salsa", homeCtrl.getStoreSalsa);
router.get("/bachata", homeCtrl.getStoreBachata);
router.get("/particulares", homeCtrl.getStoreIndividual);
router.get("/fiesta", homeCtrl.getStoreParty);
router.get("/faq", homeCtrl.getStoreFAQ);
router.get("/contacto", homeCtrl.getStoreContact);

// Admin Routes
// *************
// Party routes
router.get("/party", homeCtrl.getParty);
router.post("/partySignup", upload.single("file"), homeCtrl.createPartyRecord);
// Classes routes
router.post("/enroll", upload.single("file"), homeCtrl.createRecord);
// Authentication routes
router.get("/login", authCtrl.getLogin);
router.post("/login", authCtrl.postLogin);
router.get("/logout", authCtrl.logout);
router.get("/signup", authCtrl.getSignup);
router.post("/signup", authCtrl.postSignup);

// Exports
// *******
module.exports = router;
