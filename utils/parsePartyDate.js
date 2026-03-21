// Parse party date string from MongoDB into structured date object
// Input format: "Viernes 30 de enero 2026"
// ******************************************

// Spanish to English month translations
const monthTranslations = {
  enero: "January",
  febrero: "February",
  marzo: "March",
  abril: "April",
  mayo: "May",
  junio: "June",
  julio: "July",
  agosto: "August",
  septiembre: "September",
  octubre: "October",
  noviembre: "November",
  diciembre: "December",
};

// Spanish to English day-of-week translations
const dayOfWeekTranslations = {
  lunes: "Monday",
  martes: "Tuesday",
  "miércoles": "Wednesday",
  jueves: "Thursday",
  viernes: "Friday",
  "sábado": "Saturday",
  domingo: "Sunday",
};

// Fallback date object when parsing fails
const FALLBACK_DATE = {
  day: 0,
  month: "TBA",
  year: "",
  fullMonth: "TBA",
  dayOfWeek: "",
  en: {
    month: "TBA",
    fullMonth: "TBA",
    dayOfWeek: "",
  },
};

// Parse "Viernes 30 de enero 2026" into a structured date object
// Returns null if parsing fails
function parseNextPartyDate(dateString) {
  if (!dateString || typeof dateString !== "string") {
    return null;
  }

  // Match: DayOfWeek Day de Month Year
  // Uses \S+ to handle accented characters (Miércoles, Sábado)
  const match = dateString.trim().match(
    /^(\S+)\s+(\d{1,2})\s+de\s+(\S+)\s+(\d{4})$/i
  );

  if (!match) {
    return null;
  }

  const [, dayOfWeekEs, dayStr, monthEs, yearStr] = match;
  const day = parseInt(dayStr, 10);
  const year = parseInt(yearStr, 10);

  // Normalize month to lowercase for lookup
  const monthKey = monthEs.toLowerCase();
  const englishMonth = monthTranslations[monthKey];
  if (!englishMonth) {
    return null;
  }

  // Normalize day of week to lowercase for lookup
  const dayOfWeekKey = dayOfWeekEs.toLowerCase();
  const englishDayOfWeek = dayOfWeekTranslations[dayOfWeekKey];
  if (!englishDayOfWeek) {
    return null;
  }

  // Capitalize Spanish month: "enero" -> "Enero"
  const fullMonthEs = monthKey.charAt(0).toUpperCase() + monthKey.slice(1);

  // Short month codes (first 3 chars, uppercased)
  const shortMonthEs = fullMonthEs.substring(0, 3).toUpperCase();
  const shortMonthEn = englishMonth.substring(0, 3).toUpperCase();

  return {
    day: day,
    month: shortMonthEs,
    year: year,
    fullMonth: fullMonthEs,
    dayOfWeek: dayOfWeekEs.charAt(0).toUpperCase() + dayOfWeekEs.slice(1).toLowerCase(),
    en: {
      month: shortMonthEn,
      fullMonth: englishMonth,
      dayOfWeek: englishDayOfWeek,
    },
  };
}

module.exports = { parseNextPartyDate, FALLBACK_DATE };
