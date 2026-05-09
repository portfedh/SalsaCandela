// Environment variables
// =====================
require("dotenv").config({ path: "./config/.env" });

// Database
// ========
const connectDB = require("./config/database");
connectDB();

// Express
// =======
// Import express
const express = require("express");
const app = express();
// Set template engine EJS
app.set("view engine", "ejs");
// Serve static files from the 'public' directory
app.use(express.static("public"));
// Enable reading JSON data
app.use(express.json());
// Enable reading from html elements
app.use(express.urlencoded({ extended: true }));
// Enable access to public folder
app.use(express.static("public"));

// Language path mapping for the language switcher and hreflang tags.
// Routes whose Spanish and English slugs differ must be listed here so
// switching languages lands on the matching localized page instead of 404ing.
const esToEnPath = {
  "/": "/",
  "/salsa": "/salsa",
  "/bachata": "/bachata",
  "/particulares": "/private-classes",
  "/siguiente": "/next",
  "/fiesta": "/party",
  "/faq": "/faq",
  "/confirmacion": "/confirmation",
  "/aviso-privacidad": "/privacy-policy",
  "/sucursales": "/branches",
  "/confirmacion-email": "/email-confirmation",
  "/cambiar-contrasena": "/reset-password",
  "/guia-codi": "/codi-guide",
  "/politica-devoluciones": "/refund-policy",
};
const enToEsPath = Object.fromEntries(
  Object.entries(esToEnPath).map(([es, en]) => [en, es])
);

app.use((req, res, next) => {
  const isEnglish = req.path === "/en" || req.path.startsWith("/en/");
  const basePath = isEnglish
    ? req.path.replace(/^\/en/, "") || "/"
    : req.path;

  let esPath;
  let enPath;
  if (isEnglish) {
    enPath = basePath;
    esPath = enToEsPath[basePath] || basePath;
  } else {
    esPath = basePath;
    enPath = esToEnPath[basePath] || basePath;
  }

  res.locals.esPath = esPath;
  res.locals.enPath = enPath;
  res.locals.enHref = enPath === "/" ? "/en" : `/en${enPath}`;
  next();
});

// Routes:
// =======
const homeRoutes = require("./routes/home");

// Listening routes
app.use("/", homeRoutes);

// Server Port
// ===========
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
