import type {
  EducationLevel,
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
