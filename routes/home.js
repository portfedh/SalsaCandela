// Home Routes
// ===========

// Imports
// *******
// Express
const express = require("express");
// Create router object
const router = express.Router();
const path = require("path");
// Controllers
const homeCtrl = require("../controllers/home");

// Routes
// ******
router.get("/", homeCtrl.getStoreIndex);
router.get("/salsa", homeCtrl.getStoreSalsa);
router.get("/bachata", homeCtrl.getStoreBachata);
router.get("/particulares", homeCtrl.getStoreIndividualClasses);
router.get("/siguiente", homeCtrl.getStoreSiguiente);
router.get("/fiesta", homeCtrl.getStoreParty);
router.get("/faq", homeCtrl.getStoreFAQ);
router.post("/particulares", homeCtrl.getStoreIndividualClasses);
router.get("/confirmacion", homeCtrl.getConfirmation);
router.get("/aviso-privacidad", homeCtrl.getAvisoPrivacidad);
router.get("/sucursales", homeCtrl.getSucursales);
router.get("/confirmacion-email", homeCtrl.getEmailConfirmation);
router.get("/cambiar-contrasena", homeCtrl.getPasswordReset);
router.get("/guia-codi", homeCtrl.getStoreGuiaCodi);
router.get("/politica-devoluciones", homeCtrl.getPoliticaDevoluciones);

// Redirects
// *********
// Fiesta
router.get("/boletos/:referralCode?", homeCtrl.PartyRedirect);
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

// English Routes
// **************
router.get("/en", homeCtrl.getStoreIndexEnglish);
router.get("/en/salsa", homeCtrl.getStoreSalsaEnglish);
router.get("/en/bachata", homeCtrl.getStoreBachataEnglish);
router.get("/en/private-classes", homeCtrl.getStoreIndividualClassesEnglish);
router.get("/en/next", homeCtrl.getStoreSiguienteEnglish);
router.get("/en/party", homeCtrl.getStorePartyEnglish);
router.get("/en/faq", homeCtrl.getStoreFAQEnglish);
router.post("/en/private-classes", homeCtrl.getStoreIndividualClassesEnglish);
router.get("/en/confirmation", homeCtrl.getConfirmationEnglish);
router.get("/en/privacy-policy", homeCtrl.getAvisoPrivacidadEnglish);
router.get("/en/branches", homeCtrl.getSucursalesEnglish);
router.get("/en/email-confirmation", homeCtrl.getEmailConfirmationEnglish);
router.get("/en/reset-password", homeCtrl.getPasswordResetEnglish);
router.get("/en/codi-guide", homeCtrl.getStoreGuiaCodiEnglish);
router.get("/en/refund-policy", homeCtrl.getPoliticaDevolucionesEnglish);

// English Redirects
// *****************
// Fiesta
router.get("/en/tickets/:referralCode?", homeCtrl.PartyRedirect);
// Clases Grl
router.post("/en/checkout", homeCtrl.ClassRedirect);
// Clases Salsa
router.post("/en/checkout-salsa", homeCtrl.ClassSalsaRedirect);
router.get("/en/checkout-salsa-xola", homeCtrl.ClassSalsaXolaRedirect);
router.get("/en/checkout-salsa-claveria", homeCtrl.ClassSalsaClaveriaRedirect);
router.get("/en/checkout-salsa-valle", homeCtrl.ClassSalsaValleRedirect);
router.get("/en/checkout-salsa-coapa", homeCtrl.ClassSalsaCoapaRedirect);
router.get("/en/checkout-salsa-satelite", homeCtrl.ClassSalsaSateliteRedirect);
// Clases bachata
router.post("/en/checkout-bachata", homeCtrl.ClassBachataRedirect);
router.get("/en/checkout-bachata-xola", homeCtrl.ClassBachataXolaRedirect);
router.get("/en/checkout-bachata-claveria", homeCtrl.ClassBachataClaveriaRedirect);
router.get("/en/checkout-bachata-valle", homeCtrl.ClassBachataValleRedirect);
router.get("/en/checkout-bachata-coapa", homeCtrl.ClassBachataCoapaRedirect);
router.get("/en/checkout-bachata-satelite", homeCtrl.ClassBachataSateliteRedirect);

router.get("/en/register-classes", homeCtrl.ClassRedirect);
router.post("/en/info-private-classes", homeCtrl.infoParticulares);

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
