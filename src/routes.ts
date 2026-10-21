export interface Route {
  path: string;
  label: string;
  pageFile: string;
}

export const routes: Route[] = [
  { path: '/', label: 'Home', pageFile: 'HomePage' },
  { path: '/ciftci-towers', label: 'Ciftci Towers', pageFile: 'CiftciTowersPage' },
];
