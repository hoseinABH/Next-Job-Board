import type {
  EducationLevel,
  MilitaryStatus,
  SeniorityLevel,
  SkillLevel,
} from '@/types/resume';

export const mapEducationLevel: Record<EducationLevel, string> = {
  bachelor: 'کارشناسی',
  doctoral: 'دکتری',
  master: 'کارشناسی‌ارشد',
};

export const mapLanguageLevel: Record<SeniorityLevel, string> = {
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
