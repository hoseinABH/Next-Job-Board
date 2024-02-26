import type {
  EducationDegree,
  MilitaryStatus,
  LanguageLevel,
  SkillLevel,
} from '@/types/resume';

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
  Expert: 'در حد زبان مادری',
  Advanced: 'حرفه ای',
};

export const mapSkillLevel: Record<SkillLevel, string> = {
  mid: 'کارشناس',
  senior: 'کارشناس ارشد',
  intern: 'کارآموز',
  junior: 'تازه کار',
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
