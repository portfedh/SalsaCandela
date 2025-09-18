const branches = [
  {
    id: 'xola',
    name: 'Xola',
    lat: 19.391,
    lng: -99.155,
    address: 'Estafetas 99, Col Postal Benito Juarez, 0100, CDMX',
    googleMapsUrl: 'https://maps.app.goo.gl/fAZm3CfnKvEzDinFA',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5078611231734!2d-99.14293909999999!3d19.390450899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fefe8b9903ad%3A0x4fe4113243e29a80!2sEstafetas%2099%2C%20Postal%2C%20Benito%20Ju%C3%A1rez%2C%2003410%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1703724175073!5m2!1ses-419!2smx',
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
    googleMapsUrl: 'https://maps.app.goo.gl/2J2DWTJArTgAUVZH9',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.9273605566686!2d-99.1738906!3d19.3722977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9a07ea6d93%3A0x984de2ae6b224902!2sF%C3%A9lix%20Cuevas%20407%2C%20Col%20del%20Valle%20Sur%2C%20Benito%20Ju%C3%A1rez%2C%2003104%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1703724558230!5m2!1ses-419!2smx',
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
    googleMapsUrl: 'https://maps.app.goo.gl/dMdciVVjrQxDUvrT9',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.1765622070075!2d-99.2441764!3d19.4910381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2031a6b736345%3A0xbce4ed058e944674!2sBlvd.%20de%20la%20Sta.%20Cruz%20142%2C%20Altavista%2C%2003910%20Acatl%C3%A1n%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1703724745453!5m2!1ses-419!2smx',
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
    googleMapsUrl: 'https://maps.app.goo.gl/V2TdhxTJCvMEk1s56',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.813823212397!2d-99.1824858!3d19.4635922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f89b091bdcd5%3A0xfcafed2927bdd9a7!2sPalestina%2010%2C%20Claveria%2C%20Azcapotzalco%2C%2002080%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1703724856034!5m2!1ses-419!2smx',
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
    googleMapsUrl: 'https://maps.app.goo.gl/KMpUjs6kUTNAE8ca6',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.822058144884!2d-99.119535!3d19.2901029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0175b6627251%3A0x72c03df48ec6f443!2sCalz%20Acoxpa%20885%2C%20Coapa%2C%20Coapa%20Super%204%2C%20Tlalpan%2C%2014390%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1703724927960!5m2!1ses-419!2smx',
    salsaSchedule: [
        { days: ['Martes', 'Jueves'], time: '8:00pm - 9:30pm' },
    ],
    bachataSchedule: [
        { days: ['Martes', 'Jueves'], time: '9:30pm - 10:30pm' },
    ]
  }
];

module.exports = branches;
