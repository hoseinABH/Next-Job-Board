import * as Routes from './routes';
import type { Company } from '@/types/company';
import type { Job } from '@/types/job';

export const appData = {
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
    name: 'رده‌بندی شرکت‌ها',
    href: Routes.TOP_COMPANIES,
  },
  {
    id: 3,
    name: 'رزومه ساز',
    href: Routes.CV_MAKER,
  },
] as const;

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

export const landingCompanies: Company[] = [
  {
    name: 'ایرانسل',
    location: 'تهران',
    image: '/companies/1.webp',
    openPosition: 22,
  },
  {
    name: 'همراه اول',
    location: 'کرج',
    image: '/companies/2.webp',
    openPosition: 12,
  },
  {
    name: 'اسنپ',
    location: 'تهران',
    image: '/companies/3.webp',
    openPosition: 12,
  },
  {
    name: 'دیجیکالا',
    location: 'تهران',
    image: '/companies/4.webp',
    openPosition: 28,
  },
  {
    name: 'تپسی',
    location: 'تهران',
    image: '/companies/5.webp',
    openPosition: 8,
  },
];

export const landingJobs: Job[] = [
  {
    title: 'توسعه دهنده فرانت اند',
    salary: 'توافقی',
    company: landingCompanies[1],
    jobType: 'full-time',
    isUrgent: true,
  },
  {
    title: 'بازاریابی',
    salary: 'توافقی',
    company: landingCompanies[1],
    jobType: 'full-time',
    isUrgent: true,
  },
  {
    title: 'توسعه دهنده بک اند',
    salary: 'توافقی',
    company: landingCompanies[0],
    jobType: 'full-time',
    isUrgent: false,
  },
  {
    title: 'مالک محصول',
    salary: 'توافقی',
    company: landingCompanies[1],
    jobType: 'full-time',
    isUrgent: true,
  },
  {
    title: 'طراح محصول',
    salary: 'توافقی',
    company: landingCompanies[2],
    jobType: 'full-time',
    isUrgent: true,
  },
  {
    title: 'مدیر محصول',
    salary: 'توافقی',
    company: landingCompanies[3],
    jobType: 'full-time',
    isUrgent: false,
  },
  {
    title: 'مدیر فنی',
    salary: '۱۶,۰۰۰,۰۰۰ تومان',
    company: landingCompanies[4],
    jobType: 'full-time',
    isUrgent: true,
  },
  {
    title: 'کارشناس زیرساخت',
    salary: 'توافقی',
    company: landingCompanies[1],
    jobType: 'full-time',
    isUrgent: true,
  },
];
