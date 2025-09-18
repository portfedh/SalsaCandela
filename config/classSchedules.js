const branches = [
  {
    id: 'xola',
    name: 'Xola',
    lat: 19.391,
    lng: -99.155,
    address: 'Estafetas 99, Col Postal Benito Juarez, 0100, CDMX',
    salsaSchedule: [
      { days: ['Lunes', 'Miércoles'], time: '8:00pm - 9:30pm' },
      { days: ['Martes', 'Jueves'], time: '8:00pm - 9:30pm' },
      { days: ['Sábados'], time: '10:00am - 12:00pm' },
      { days: ['Domingos'], time: '4:00pm - 6:00pm' },
    ],
    bachataSchedule: [
      { days: ['Lunes', 'Miércoles'], time: '9:30pm - 10:30pm' },
      { days: ['Martes', 'Jueves'], time: '9:30pm - 10:30pm' },
      { days: ['Sábados'], time: '12:00am - 1:30pm' },
      { days: ['Domingos'], time: '6:00pm - 7:30pm' },
    ]
  },
  {
    id: 'valle',
    name: 'Valle',
    lat: 19.3675,
    lng: -99.1581,
    address: 'Félix Cuevas 407, Col del Valle, Benito Juárez, CDMX',
    salsaSchedule: [
      { days: ['Lunes', 'Miércoles'], time: '8:00pm - 9:30pm' },
      { days: ['Sábados'], time: '11:30am - 1:30pm' },
      { days: ['Domingos'], time: '11:30pm - 1:30pm' },
    ],
    bachataSchedule: [
      { days: ['Lunes', 'Miércoles'], time: '9:30pm - 10:30pm' },
      { days: ['Sábados'], time: '1:30pm - 3:00pm' },
      { days: ['Domingos'], time: '1:30pm - 3:00pm' },
    ]
  },
  {
    id: 'satelite',
    name: 'Satelite',
    lat: 19.5087,
    lng: -99.2395,
    address: 'Blvd de la Sta Cruz 142, Altavista, Acatlán, Edo Mex',
    salsaSchedule: [
        { days: ['Lunes', 'Miércoles'], time: '8:00pm - 9:30pm' },
        { days: ['Domingos'], time: '11:30pm - 1:30pm' },
    ],
    bachataSchedule: [
        { days: ['Lunes', 'Miércoles'], time: '9:30pm - 10:30pm' },
        { days: ['Domingos'], time: '1:30pm - 3:00pm' },
    ]
  },
  {
    id: 'claveria',
    name: 'Claveria',
    lat: 19.4515,
    lng: -99.1896,
    address: 'Palestina 10, Claveria, Azcapotzalco, CDMX',
    salsaSchedule: [
        { days: ['Martes', 'Jueves'], time: '8:00pm - 9:30pm' },
    ],
    bachataSchedule: [
        { days: ['Martes', 'Jueves'], time: '9:30pm - 10:30pm' },
    ]
  },
  {
    id: 'coapa',
    name: 'Coapa',
    lat: 19.2998,
    lng: -99.1386,
    address: 'Calz. Acoxpa 885, Coapa, Tlalpan, CDMX',
    salsaSchedule: [
        { days: ['Martes', 'Jueves'], time: '8:00pm - 9:30pm' },
    ],
    bachataSchedule: [
        { days: ['Martes', 'Jueves'], time: '9:30pm - 10:30pm' },
    ]
  }
];

module.exports = branches;