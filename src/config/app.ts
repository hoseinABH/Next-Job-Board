import * as Routes from './routes';

const appConfig = {
  appName: 'جاب اونجا',
  appDescription: 'جاب اونجا بهترین راه ارتباطی کارجویان و کارفرمایان',
};

export const navigationLinks = [
  {
    id: 1,
    name: 'فرصت‌های شغلی',
    href: Routes.JOBS,
  },
  {
    id: 2,
    name: 'محصولات',
    href: Routes.PRODUCTS,
  },
  {
    id: 3,
    name: 'رده‌بندی شرکت‌ها',
    href: Routes.TOP_COMPANIES,
  },
  {
    id: 4,
    name: 'رزومه ساز',
    href: Routes.CV_MAKER,
  },
] as const;

export default appConfig;
