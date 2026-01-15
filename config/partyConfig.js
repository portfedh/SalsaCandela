const partyConfig = {
  // Party Information
  title: "Noche Sensual", // Noche Sensual ||  Salsatelite
  description: "Una noche llena de Salsa, Bachata y buena vibra",

  // Date Information
  date: {
    day: 30,
    month: "ENE", // Short format for badge (Spanish)
    year: 2026,
    fullMonth: "Enero", // Full month name for full date (Spanish)
    dayOfWeek: "Viernes", // Day of week (Spanish)
    en: {
      month: "JAN", // Short format for badge (English)
      fullMonth: "January", // Full month name for full date (English)
      dayOfWeek: "Friday", // Day of week (English)
    },
  },

  // Images (relative to /public/img/party/)
  images: {
    desktop: "fiesta_2026_01_30.jpeg",
    mobile: "fiesta_2026_01_30b.jpeg",
  },

  // Location Options
  locations: {
    satelite: {
      name: "Satelite",
      address: "Lomas Verdes 896",
      city: "Naucalpan, EdoMex",
      googleMapsUrl: "https://maps.app.goo.gl/UCUzBQNYKzcnKaVKA",
    },
    xola: {
      name: "Xola",
      address: "Estafetas 99, Col Postal",
      city: "Benito Juarez, CDMX",
      googleMapsUrl: "https://maps.app.goo.gl/4oqG4D98TiVE1sLY9",
    },
    valle: {
      name: "Valle",
      address: "Félix Cuevas 407, Col del Valle",
      city: "Benito Juárez, CDMX",
      googleMapsUrl: "https://maps.app.goo.gl/h9w7R43tkuCNtULM8",
    },
  },

  // Active location (change this to switch venues)
  activeLocation: "xola",

  // Event Schedule
  schedule: [
    {
      time: "8:30 PM",
      activity: "Clase de Salsa",
      description: "Todos los niveles bienvenidos",
      featured: false,
    },
    {
      time: "9:00 PM",
      activity: "¡Inicia la Fiesta!",
      description: "Salsa, Timba y Bachata",
      featured: true,
    },
    {
      time: "3:00 AM",
      activity: "Cierre del Evento",
      description: "Hasta la próxima",
      featured: false,
    },
  ],

  // Pricing
  pricing: {
    presale: {
      price: 100,
      label: "Preventa",
      labelEn: "Presale",
    },
    door: {
      price: 150,
      label: "En taquilla",
      labelEn: "At the door",
    },
  },

  // Event Details
  eventTime: "8:30 PM - 3:00 AM",
  genres: ["Salsa", "Timba", "Bachata"],
};

module.exports = partyConfig;
