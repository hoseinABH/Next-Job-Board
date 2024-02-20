import type {
  EducationDegree,
  MilitaryStatus,
  LanguageLevel,
  SkillLevel,
} from '@/types/resume';

export const mapEducationLevel: Record<EducationDegree, string> = {
  bachelor: 'کارشناسی',
  doctoral: 'دکتری',
  master: 'کارشناسی‌ارشد',
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
