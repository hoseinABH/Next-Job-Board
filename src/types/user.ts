import type { DialogData, Nullable } from './common';

export type UserRole = 'OuterUser' | 'InnerUser' | 'Company';

export interface UserMinimalProfile {
  userId: string;
  profileId: number;
  firstName: string;
  lastName: string;
}

export interface UserProfile {
  title: string;
  aboutMe: string;
  firstName: string;
  lastName: string;
  maritalStatus: number;
  militaryService: number;
  gender: number;
  city: string;
  skills: Skill[];
  languages: Language[];
  workExperiences: WorkExperience[];
  educations: Education[];
}

export interface Skill extends Language {}
export interface Language {
  title: string;
  level: number;
  userProfiles: unknown;
  id: number;
  createdDate: string;
  updatedDate: string;
}
export type ModalKeys =
  | 'confirmDelete'
  | 'aboutMe'
  | 'personalInfo'
  | 'workExperience'
  | 'education'
  | 'language'
  | 'skill';
export type ResumeModals = Record<ModalKeys, boolean>;
export type LoadingKeys =
  | 'getUserResume'
  | 'updatePersonal'
  | 'createExperience'
  | 'createEducation'
  | 'createLanguage'
  | 'createSkill'
  | 'removeEntity';
export type ResumeLoading = Record<LoadingKeys, boolean>;

export type DeleteDialogData = DialogData<Exclude<ModalKeys, 'aboutMe' | 'personalInfo'>>;

export type MaritalStatus = 'single' | 'married' | 'unknown';
export type Gender = 'female' | 'male' | 'other';
export type MilitaryStatus =
  | 'EducationalExemption'
  | 'ActiveService'
  | 'ExemptionCard'
  | 'ServiceCompletionCard'
  | 'Absent';
export interface PersonalData {
  firstName: string;
  lastName: string;
  maritalStatus: number;
  militaryService: number;
  gender: number;
  city: string;
}
export interface AboutData {
  firstName: string;
  aboutMe: string;
  lastName: string;
  title: string;
}
export interface UpdatePersonalDto extends PersonalData {}
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

export interface Education {
  fieldOfEducation: string;
  educationalInstitution: string;
  grade: number;
  startDate: Date;
  endDate: Nullable<Date>;
  stillEducating: boolean;
  description: string;
  userProfileId: number;
  userProfile: unknown;
  id: number;
  createdDate: Date;
  updatedDate: Date;
}

export interface WorkExperience {
  title: string;
  companyTitle: string;
  companyProfileId: number;
  companyProfile: number;
  startDate: Date;
  endDate: Nullable<Date>;
  stillWorking: boolean;
  description: string;
  userProfileId: number;
  userProfile: unknown;
  id: number;
  createdDate: Date;
  updatedDate: Date;
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

export interface UserResume {
  id: string;
  personalInfo: PersonalData;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  languages: Language[];
}
