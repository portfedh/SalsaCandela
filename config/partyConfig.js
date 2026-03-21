const partyConfig = {
  // Party Information
  title: "Noche Sensual", // Noche Sensual ||  Salsatelite
  description: "Una noche llena de Salsa, Bachata y buena vibra",

  // Date is derived dynamically from MongoDB party_configs.nextPartyDate
  // See utils/parsePartyDate.js for parsing logic

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
