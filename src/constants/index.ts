import type { EducationLevel, LanguageLevel, SkillLevel } from '@/types/resume';

export const mapEducationLevel: Record<EducationLevel, string> = {
  bachelor: 'کارشناسی',
  doctoral: 'دکتری',
  master: 'کارشناسی‌ارشد',
};

export const mapLanguageLevel: Record<LanguageLevel, string> = {
  beginner: 'مبتدی',
  intermediate: 'متوسط',
  fluent: 'در حد زبان مادری',
  expert: 'حرفه ای',
};

export const mapSkillLevel: Record<SkillLevel, string> = {
  mid: 'کارشناس',
  senior: 'کارشناس ارشد',
  intern: 'کارآموز',
  junior: 'تازه کار',
};
