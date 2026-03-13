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

  // Pricing (prices are fetched from MongoDB party_configs collection)
  pricing: {
    presale: {
      label: "Preventa",
      labelEn: "Presale",
    },
    door: {
      label: "En taquilla",
      labelEn: "At the door",
    },
  },

  // Event Details
  eventTime: "8:30 PM - 3:00 AM",
  genres: ["Salsa", "Timba", "Bachata"],
};

module.exports = partyConfig;
