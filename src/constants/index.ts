export const mapEducationLevel: Record<number, string> = {
  1: 'کارشناسی',
  2: 'دکترا',
  3: 'کارشناسی‌ارشد',
  5: 'دیپلم',
  4: 'فوق دیپلم',
  0: 'پرفسورا',
};

export const mapLanguageLevel: Record<number, string> = {
  1: 'مبتدی',
  2: 'متوسط',
  3: 'کارشناس',
  4: 'متخصص',
  5: 'حرفه ای',
};

interface MilitaryStatusOption {
  value: number;
  title: string;
}
export const militaryStatusOptions: MilitaryStatusOption[] = [
  {
    value: 1,
    title: 'معافیت تحصیلی',
  },
  {
    value: 2,
    title: 'درحال انجام',
  },
  {
    value: 3,
    title: 'معافیت دائم',
  },
  {
    value: 4,
    title: 'پایان خدمت',
  },
  {
    value: 5,
    title: 'غایب',
  },
];

interface LanguageLevelOption {
  value: number;
  title: string;
}
export const levelOptions: LanguageLevelOption[] = [
  {
    value: 1,
    title: 'مبتدی',
  },
  {
    value: 2,
    title: 'متوسط',
  },
  {
    value: 3,
    title: 'پیشرفته',
  },
  {
    value: 4,
    title: 'حرفه ای',
  },
];

interface EducationDegreeOption {
  value: number;
  title: string;
}
export const educationDegreeOptions: EducationDegreeOption[] = [
  { title: 'کارشناسی', value: 1 },
  { title: 'کارشناسی ارشد', value: 2 },
  { title: 'دکترا', value: 3 },
  { title: 'فوق دیپلم', value: 4 },
  { title: 'دیپلم', value: 5 },
  { title: 'پرفسورا', value: 6 },
];

export const mapMaritalStatus: Record<number, string> = {
  1: 'مجرد',
  2: 'متاهل',
};
export const mapGenderTitle: Record<number, string> = {
  0: 'آقا',
  1: 'خانم',
};

export const mapMilitaryStatus: Record<number, string> = {
  1: 'معافیت تحصیلی',
  2: 'درحال انجام',
  3: 'معافیت دائم',
  4: 'پایان خدمت',
  5: 'غایب',
};

export const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
