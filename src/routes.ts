export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/ciftci-towers', label: 'Ciftci Towers', pageFile: 'CiftciTowersPage' },
  { path: '/properties/ciftci-towers', label: 'Çiftçi Towers', pageFile: 'CiftciTowersPage' },
  { path: '/properties/casa-del-sol', label: 'Casa del Sol', pageFile: 'CiftciTowersPage' },
  { path: '/properties/villa-andaluc-a', label: 'Villa Andalucía', pageFile: 'CiftciTowersPage' },
  { path: '/properties/the-meridian', label: 'The Meridian', pageFile: 'CiftciTowersPage' },
  { path: '/properties/villa-blanca', label: 'Villa Blanca', pageFile: 'CiftciTowersPage' },
  { path: '/properties/casa-dorada', label: 'Casa Dorada', pageFile: 'CiftciTowersPage' },
];
