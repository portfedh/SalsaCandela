const partyConfig = {
  // Party Information
  title: "Noche Sensual", // Noche Sensual ||  Salsatelite
  description: "Una noche llena de Salsa, Bachata y buena vibra",

  // Date Information
  date: {
    day: 14,
    month: "NOV", // Short format for badge
    year: 2025,
    fullMonth: "Noviembre", // Full month name for full date
    dayOfWeek: "Viernes",
  },

  // Images (relative to /public/img/party/)
  images: {
    desktop: "fiesta_2025_11_14.jpeg",
    mobile: "fiesta_2025_11_14b.jpeg",
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
    },
    door: {
      price: 150,
      label: "En taquilla",
    },
  },

  // Event Details
  eventTime: "8:30 PM - 3:00 AM",
  genres: ["Salsa", "Timba", "Bachata"],
};

module.exports = partyConfig;
