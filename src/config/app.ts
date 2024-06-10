import * as Routes from './routes';

export const appData = {
  appName: 'کاریوا',
  appDescription: 'کاریوا بهترین راه ارتباطی کارجویان و کارفرمایان',
};

export const userNavigationLinks = [
  {
    name: 'فرصت‌های کارآموزی',
    href: Routes.INTERNSHIPS,
  },
  {
    name: 'شرکت‌ها',
    href: Routes.COMPANIES,
  },
  {
    name: 'رزومه ساز',
    href: Routes.CV_MAKER,
  },
];
export const companyNavigationLinks = [
  {
    name: 'فرصت‌های کارآموزی',
    href: Routes.INTERNSHIPS,
  },
  {
    name: 'شرکت‌ها',
    href: Routes.COMPANIES,
  },
];

export const userDropdownMenu = [
  {
    title: 'درخواست های من',
    key: 'ApplicationRequest',
    disabled: false,
  },
  {
    title: 'حساب کاربری',
    key: 'Account',
    disabled: true,
  },
  {
    title: 'رزومه من',
    key: 'Resume',
    disabled: false,
  },
  {
    title: 'خروج',
    key: 'Logout',
    disabled: false,
  },
];
export const companyDropdownMenu = [
  {
    title: 'درخواست‌های کارآموزی',
    key: 'DashboardApplications',
    disabled: false,
  },
  {
    title: 'موقعیت‌های کارآموزی',
    key: 'DashboardPositions',
    disabled: false,
  },
  {
    title: 'داشبورد شرکت',
    key: 'Dashboard',
    disabled: false,
  },
  {
    title: 'خروج',
    key: 'Logout',
    disabled: false,
  },
];

export const footerLinks = [
  {
    id: 1,
    title: 'کارجویان',
    items: [
      {
        id: 1,
        name: 'سوالات متداول کارجویان',
        href: '/',
      },
      {
        id: 2,
        name: 'قوانین و مقررات کارجویان',
        href: '/',
      },
      {
        id: 3,
        name: 'لیست مشاغل',
        href: '/',
      },
      {
        id: 4,
        name: 'آگهی‌های استخدام',
        href: '/',
      },
    ],
  },
  {
    id: 2,
    title: 'کارفرمایان',
    items: [
      {
        id: 1,
        name: 'سوالات متداول کارفرمایان',
        href: '/',
      },
      {
        id: 2,
        name: 'درج آگهی استخدام',
        href: '/',
      },
      {
        id: 3,
        name: 'تعرفه‌ی انتشار آگهی',
        href: '/',
      },
      {
        id: 4,
        name: 'ورود به بخش کارفرمایان',
        href: '/',
      },
    ],
  },
  {
    id: 3,
    title: appData.appName,
    items: [
      {
        id: 1,
        name: 'تماس با ما',
        href: '/',
      },
      {
        id: 2,
        name: 'رسانه ها',
        href: '/',
      },
      {
        id: 3,
        name: 'راهنمای استفاده برای کارجویان',
        href: '/',
      },
      {
        id: 4,
        name: 'وبلاگ',
        href: '/',
      },
    ],
  },
] as const;

export const footerDescription =
  'پلتفرم کاریوا، برای اجرای موثر فرآیند جذب و استخدام در مقیاس بزرگ طراحی شده است. در این پلتفرم برای هر شرکت یک فرآیند منحصر به فرد و شخصی سازی شده طراحی می گردد.';
export const socials = [
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/',
  },
  {
    key: 'instagram',
    href: 'https://www.instagram.com/',
  },
] as const;
