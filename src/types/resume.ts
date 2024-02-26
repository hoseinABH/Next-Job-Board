export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  date: {
    from: string;
    to: string;
  };
  description: string;
}
export interface Education {
  id: string;
  school: string;
  field: string;
  location: string;
  level: EducationDegree;
  date: {
    from: string;
    to: string;
  };
}
export type SkillLevel = 'mid' | 'junior' | 'intern' | 'senior';
export interface Skill {
  id: string;
  name: string;
  level: SkillLevel;
}
export interface Language {
  id: string;
  name: string;
  level: LanguageLevel;
}
export type ModalKeys =
  | 'aboutMe'
  | 'personalInfo'
  | 'workExperience'
  | 'education'
  | 'language'
  | 'skill';
export type ResumeModals = Record<ModalKeys, boolean>;
export type LoadingKeys =
  | 'updatePersonal'
  | 'createExperience'
  | 'createEducation'
  | 'createLanguage'
  | 'createSkill'
  | 'removeEntity';
export type ResumeLoading = Record<LoadingKeys, boolean>;

export interface DeleteAlertData {
  key: ModalKeys;
  title: string;
  message: string;
  model: {
    id: string;
    entity: Exclude<ModalKeys, 'aboutMe' | 'personalInfo'>;
  };
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

export type EducationDegree =
  | 'Bachelor'
  | 'Master'
  | 'Doctoral'
  | 'MiddleSchoolDiploma'
  | 'Associate'
  | 'Professional';

export interface CreateEducationDto {
  institution: string;
  degree: EducationDegree;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  currentlyEnrolled: boolean;
}

export interface CreateExperienceDto {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  isCurrent: boolean;
}

export type LanguageLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface CreateLanguageDto {
  name: string;
  level: LanguageLevel;
}
export interface CreateSkillDto extends CreateLanguageDto {}
