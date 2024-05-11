import type { DialogData } from './common';

export interface Skill {
  skillId: string;
  name: string;
  level: LanguageLevel;
}
export interface Language {
  languageId: string;
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
  | 'removeEntity'
  | 'getMyResume';
export type ResumeLoading = Record<LoadingKeys, boolean>;

export type DeleteDialogData = DialogData<
  Exclude<ModalKeys, 'aboutMe' | 'personalInfo'>
>;

export type MaritalStatus = 'single' | 'married' | 'unknown';
export type Gender = 'female' | 'male' | 'other';
export type MilitaryStatus =
  | 'EducationalExemption'
  | 'ActiveService'
  | 'ExemptionCard'
  | 'ServiceCompletionCard'
  | 'Absent';
export interface PersonalInfo {
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
  jobTitle: string;
}
export interface UpdatePersonalDto extends PersonalInfo {}
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

export interface Education extends CreateEducationDto {
  educationId: string;
}

export interface Experience extends CreateExperienceDto {
  experienceId: string;
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

export interface ResumeData {
  id: string;
  personalInfo: PersonalInfo;
  education: Education[];
  workExperience: Experience[];
  skills: Skill[];
  languages: Language[];
}
