// Environment variables
// =====================
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config/.env") });

// Database
// ========
const connectDB = require("./config/database");
connectDB();

// Express
// =======
// Import express
const express = require("express");
const compression = require("compression");
const { getSeo } = require("./config/seoMeta");
const app = express();
// Set template engine EJS. The views path is absolute so the app starts
// correctly regardless of the working directory it is launched from.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Gzip HTML, CSS and JS responses before sending them to the browser.
// Registered before the static handler so it covers static assets too.
app.use(compression());
// Serve static files from the 'public' directory. Assets are cached for a
// week by the browser; ETags still force a revalidation when a file changes.
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: "7d",
  })
);
// Enable reading JSON data
app.use(express.json());
// Enable reading from html elements
app.use(express.urlencoded({ extended: true }));

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
  // Default SEO tags. Controllers override this by passing their own `seo`
  // local to res.render, which takes precedence over res.locals.
  res.locals.seo = getSeo("home", isEnglish ? "en" : "es");
  next();
});

// Routes:
// =======
const homeRoutes = require("./routes/home");

// Listening routes
app.use("/", homeRoutes);

// 404 handler. Registered after every route so it only runs when nothing
// above matched. Serves the localized page based on the requested prefix.
app.use((req, res) => {
  const isEnglish = req.path === "/en" || req.path.startsWith("/en/");
  const lang = isEnglish ? "en" : "es";
  res.status(404).render(isEnglish ? "404-en.ejs" : "404.ejs", {
    lang: lang,
    seo: getSeo("notFound", lang),
    paymentMode: process.env.PAYMENT_MODE,
  });
});

// Server Port
// ===========
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
