export interface Application {
  applicant: string;
  position: string;
  requestDate: Date;
}

export const applications: Application[] = [
  {
    position: 'برنامه نویس',
    requestDate: new Date(),
    applicant: 'محمد علوی',
  },
  {
    position: 'منابع انسانی',
    requestDate: new Date(),
    applicant: 'سهراب سپهری',
  },
  {
    position: 'تحلیلگر',
    requestDate: new Date(),
    applicant: 'نیما یوشیج',
  },
  {
    position: 'برنامه نویس',
    requestDate: new Date(),
    applicant: 'علیرضا قربانی',
  },
  {
    position: 'تست نویس',
    requestDate: new Date(),
    applicant: 'همایون شجریان',
  },
  {
    position: 'بازاریابی',
    requestDate: new Date(),
    applicant: 'محسن یگانه',
  },
  {
    position: 'مدیریت',
    requestDate: new Date(),
    applicant: 'علی مردانی',
  },
];
