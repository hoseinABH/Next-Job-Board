export interface WorkExperience {
  id: number;
  position: string;
  company: string;
  location: string;
  date: {
    from: string;
    to: string;
  };
  description: string;
}
export type EducationLevel = 'bachelor' | 'master' | 'doctoral';
export interface Education {
  id: number;
  school: string;
  field: string;
  location: string;
  level: EducationLevel;
  date: {
    from: string;
    to: string;
  };
}
export type SkillLevel = 'mid' | 'junior' | 'intern' | 'senior';
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
export type LanguageLevel = 'beginner' | 'intermediate' | 'expert' | 'fluent';
export interface Language {
  id: number;
  name: string;
  level: LanguageLevel;
}
export type ModalKeys = 'aboutMe';
export type ResumeModals = Record<ModalKeys, boolean>;
