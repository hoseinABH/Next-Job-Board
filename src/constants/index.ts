import type {
  EducationDegree,
  MilitaryStatus,
  LanguageLevel,
  MaritalStatus,
  Gender,
} from '@/types/user';

export const mapEducationLevel: Record<EducationDegree, string> = {
  Bachelor: 'کارشناسی',
  Doctoral: 'دکترا',
  Master: 'کارشناسی‌ارشد',
  MiddleSchoolDiploma: 'دیپلم',
  Associate: 'فوق دیپلم',
  Professional: 'پرفسورا',
};

export const mapLanguageLevel: Record<LanguageLevel, string> = {
  Beginner: 'مبتدی',
  Intermediate: 'متوسط',
  Expert: 'متخصص',
  Advanced: 'حرفه ای',
};

interface MilitaryStatusOption {
  value: MilitaryStatus;
  title: string;
}
export const militaryStatusOptions: MilitaryStatusOption[] = [
  {
    value: 'EducationalExemption',
    title: 'معافیت تحصیلی',
  },
  {
    value: 'ActiveService',
    title: 'درحال انجام',
  },
  {
    value: 'ExemptionCard',
    title: 'معافیت دائم',
  },
  {
    value: 'ServiceCompletionCard',
    title: 'پایان خدمت',
  },
  {
    value: 'Absent',
    title: 'غایب',
  },
];

interface LanguageLevelOption {
  value: LanguageLevel;
  title: string;
}
export const levelOptions: LanguageLevelOption[] = [
  {
    value: 'Beginner',
    title: 'مبتدی',
  },
  {
    value: 'Intermediate',
    title: 'متوسط',
  },
  {
    value: 'Advanced',
    title: 'پیشرفته',
  },
  {
    value: 'Expert',
    title: 'حرفه ای',
  },
];

interface EducationDegreeOption {
  value: EducationDegree;
  title: string;
}
export const educationDegreeOptions: EducationDegreeOption[] = [
  { title: 'کارشناسی', value: 'Bachelor' },
  { title: 'کارشناسی ارشد', value: 'Master' },
  { title: 'دکترا', value: 'Doctoral' },
  { title: 'فوق دیپلم', value: 'Associate' },
  { title: 'دیپلم', value: 'MiddleSchoolDiploma' },
  { title: 'پرفسورا', value: 'Professional' },
];

export const mapMaritalStatus: Record<MaritalStatus, string> = {
  single: 'مجرد',
  married: 'متاهل',
  unknown: 'نا مشخص',
};
export const mapGenderTitle: Record<Gender, string> = {
  male: 'آقا',
  female: 'خانم',
  other: 'دیگر',
};

export const mapMilitaryStatus: Record<MilitaryStatus, string> = {
  EducationalExemption: 'معافیت تحصیلی',
  ActiveService: 'درحال انجام',
  ExemptionCard: 'معافیت دائم',
  ServiceCompletionCard: 'پایان خدمت',
  Absent: 'غایب',
};

export const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
