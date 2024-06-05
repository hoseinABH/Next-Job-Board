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
  'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.';

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

export const requestTests = [
  {
    key: 1,
    name: 'تست شخصیتی',
  },
  {
    key: 2,
    name: 'تست فنی اول',
  },
];
