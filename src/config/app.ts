import * as Routes from './routes';
import type { Company } from '@/types/company';
import type { Job } from '@/types/jobs';

export const appData = {
  appName: 'اسم اپلیکیشن',
  appDescription: 'اسم اپلیکیشن بهترین راه ارتباطی کارجویان و کارفرمایان',
};

export const navigationLinks = [
  {
    name: 'فرصت‌های شغلی',
    href: Routes.JOBS,
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
    id: '1',
    name: 'ایرانسل',
    location: 'تهران',
    openPosition: 22,
    details: {
      size: 500,
      address: 'طهران، میدان ولیعصر، روبروی بانک صادرات',
      tel: '02134342020',
      email: 'company@info.com',
      category: 'فناوری اطلاعات و کامپیوتر',
      about: footerDescription,
    },
  },
  {
    id: '2',
    name: 'همراه اول',
    location: 'کرج',
    openPosition: 12,
    details: {
      size: 500,
      address: 'طهران، میدان ولیعصر، روبروی بانک صادرات',
      tel: '02134342020',
      email: 'company@info.com',
      category: 'فناوری اطلاعات و کامپیوتر',
      about: footerDescription,
    },
  },
  {
    id: '3',
    name: 'اسنپ',
    location: 'تهران',
    openPosition: 12,
    details: {
      size: 500,
      address: 'طهران، میدان ولیعصر، روبروی بانک صادرات',
      tel: '02134342020',
      email: 'company@info.com',
      category: 'فناوری اطلاعات و کامپیوتر',
      about: footerDescription,
    },
  },
  {
    id: '4',
    name: 'دیجیکالا',
    location: 'تهران',
    openPosition: 28,
    details: {
      size: 500,
      address: 'طهران، میدان ولیعصر، روبروی بانک صادرات',
      tel: '02134342020',
      email: 'company@info.com',
      category: 'فناوری اطلاعات و کامپیوتر',
      about: footerDescription,
    },
  },
  {
    id: '5',
    name: 'تپسی',
    location: 'تهران',
    openPosition: 8,

    details: {
      size: 500,
      address: 'طهران، میدان ولیعصر، روبروی بانک صادرات',
      tel: '02134342020',
      email: 'company@info.com',
      category: 'فناوری اطلاعات و کامپیوتر',
      about: footerDescription,
    },
  },
];

const content = [
  {
    id: '1',
    title: 'توضیح اجمالی از موقعیت:',
    items: ['پیاده‌سازی سیاست‌های منابع انسانی در حوزه تجاری'],
  },
  {
    id: '2',
    title: 'آنچه در طی دوره از شما انتظار می‌رود:',
    items: [
      'کمک به پیاده‌سازی فرایند‌های منابع انسانی در معاونت بازاریابی فروش',
      'سازماندهی و پیگیری درخواست‌های منابع انسانی معاونت بازاریابی و فروش',
      'مشارکت در فرایند آموزش و توسعه در معاونت بازاریابی و فروش',
    ],
  },
  {
    id: '3',
    title: 'در مقطع کارشناسی، اولویت با رشته‌های زیر است:',
    items: [
      'روان‌شناسی صنعتی, مدیریت بازرگانی, مدیریت دولتی, مدیریت صنعتی, مدیریت منابع انسانی, مهندسی صنایع',
    ],
  },
  {
    id: '4',
    title: 'توجه:',
    items: [
      'تنها فارغ‌التحصیلان مقطع کارشناسی و یا دانشجویان/فارغ التحصیلان مقاطع بالاتر امکان حضور در این موقعیت را دارند.',
    ],
  },
  {
    id: '5',
    title: 'سطح تسلط به زبان انگلیسی:',
    items: ['درک مطلب، پیشرفته', 'مکالمه، پیشرفته'],
  },
  {
    id: '6',
    title: 'الزامات موقعیت:',
    items: [
      'آشنایی با ICDL',
      'آشنایی با فرایند‌های منابع انسانی',
      'مهارت ارتباط مؤثر',
      'تفکر تحلیلی',
      'روحیه نتیجه‌گرایی',
    ],
  },
  {
    id: '7',
    title: 'ترجیحات موقعیت:',
    items: ['علاقه‌مندی به یادگیری', 'کنجکاو', 'تفکر انتقادی'],
  },
];

export const landingJobs: Job[] = [
  {
    id: '1',
    title: 'توسعه دهنده فرانت اند',
    salary: 'توافقی',
    company: landingCompanies[1],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '2',
    title: 'بازاریابی',
    salary: 'توافقی',
    company: landingCompanies[1],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '3',
    title: 'توسعه دهنده بک اند',
    salary: 'توافقی',
    company: landingCompanies[0],
    isUrgent: false,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '4',
    title: 'مالک محصول',
    salary: 'توافقی',
    company: landingCompanies[1],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '5',
    title: 'طراح محصول',
    salary: 'توافقی',
    company: landingCompanies[2],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '6',
    title: 'مدیر محصول',
    salary: 'توافقی',
    company: landingCompanies[3],
    isUrgent: false,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '7',
    title: 'مدیر فنی',
    salary: '۱۶,۰۰۰,۰۰۰ تومان',
    company: landingCompanies[4],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
  {
    id: '8',
    title: 'کارشناس زیرساخت',
    salary: 'توافقی',
    company: landingCompanies[1],
    isUrgent: true,
    content,
    level: 'Bachelor',
    major: [
      'روان‌شناسی صنعتی',
      ' مدیریت بازرگانی',
      'مهندسی صنایع',
      ' مدیریت منابع انسانی',
    ],
  },
];
