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
export interface Language {
  id: number;
  name: string;
  level: SeniorityLevel;
}
export type ModalKeys =
  | 'aboutMe'
  | 'personalInfo'
  | 'workExperience'
  | 'education'
  | 'language'
  | 'skill';
export type ResumeModals = Record<ModalKeys, boolean>;
export type LoadingKeys = 'updatePersonal' | 'createExperience';
export type ResumeLoading = Record<LoadingKeys, boolean>;

export interface DeleteAlertData {
  key: ModalKeys;
  title: string;
  message: string;
  model: unknown;
}

export type MaritalStatus = 'single' | 'married' | 'unknown';
export type Gender = 'female' | 'male' | 'other';
export type MilitaryStatus =
  | 'EducationalExemption'
  | 'ActiveService'
  | 'ExemptionCard'
  | 'ServiceCompletionCard'
  | 'Absent';
export interface UpdatePersonalDto {
  firstName: string;
  lastName: string;
  photo: {
    id: string;
  };
  maritalStatus: MaritalStatus;
  gender: Gender;
  militaryStatus: MilitaryStatus;
  address: string;
  birthDate: string;
  phone: string;
  aboutMe: string;
}

export interface CreateEducationDto {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface CreateExperienceDto {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  isCurrent: boolean;
}

export type SeniorityLevel =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Expert';

export interface CreateLanguageDto {
  name: string;
  level: SeniorityLevel;
}
export interface CreateSkillDto extends CreateLanguageDto {}
