export interface Application {
  applicant: string;
  position: string;
  requestDate: Date;
  status: 'reject' | 'confirm';
}

export const applications: Application[] = [
  {
    position: 'برنامه نویس',
    requestDate: new Date(),
    applicant: 'محمد علوی',
    status: 'reject',
  },
  {
    position: 'منابع انسانی',
    requestDate: new Date(),
    applicant: 'سهراب سپهری',
    status: 'confirm',
  },
  {
    position: 'تحلیلگر',
    requestDate: new Date(),
    applicant: 'نیما یوشیج',
    status: 'reject',
  },
  {
    position: 'برنامه نویس',
    requestDate: new Date(),
    applicant: 'علیرضا قربانی',
    status: 'confirm',
  },
  {
    position: 'تست نویس',
    requestDate: new Date(),
    applicant: 'همایون شجریان',
    status: 'confirm',
  },
  {
    position: 'بازاریابی',
    requestDate: new Date(),
    applicant: 'محسن یگانه',
    status: 'reject',
  },
  {
    position: 'مدیریت',
    requestDate: new Date(),
    applicant: 'علی مردانی',
    status: 'reject',
  },
];
