import type { Nullable } from './common';

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
  maritalStatus: MaritalStatus;
  militaryService: MilitaryService;
  gender: Gender;
  city: string;
  skills: Skill[];
  languages: Language[];
  workExperiences: WorkExperience[];
  educations: Education[];
}

export type SeniorityLevel = 0 | 1 | 2 | 3 | 4 | 5;

export interface CreateSkillDto extends CreateLanguageDto {}

export interface CreateLanguageDto {
  name: string;
  level: SeniorityLevel;
}

export interface Skill extends Language {}
export interface Language {
  title: string;
  level: SeniorityLevel;
  userProfiles: unknown;
  id: number;
  createdDate: string;
  updatedDate: string;
}
export type MaritalStatus = 0 | 1;
export type MilitaryService = 0 | 1 | 2 | 3 | 4 | 5;
export type Gender = 0 | 1;
export type Grade = 0 | 1 | 2 | 3 | 4 | 5;
export interface PersonalData {
  firstName: string;
  lastName: string;
  maritalStatus: MaritalStatus;
  militaryService: MilitaryService;
  gender: Gender;
  city: string;
}
export interface AboutData {
  firstName: string;
  aboutMe: string;
  lastName: string;
  title: string;
}
export interface UpdateAboutMeDto {
  title: string;
  aboutMe: string;
}
export interface UpdatePersonalDto extends PersonalData {}

export interface CreateEducationDto {
  fieldOfEducation: string;
  educationalInstitution: string;
  grade: Grade;
  startDate: Date;
  endDate: Nullable<Date>;
  stillEducating: true;
  description: string;
}

export interface Education extends CreateEducationDto {
  userProfileId: number;
  userProfile: unknown;
  id: number;
  createdDate: Date;
  updatedDate: Date;
}

export interface CreateWorkExperienceDto {
  title: string;
  companyName: string;
  startDate: Date;
  endDate: Date;
  stillWorking: boolean;
  description: string;
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

export type ModalKeys =
  | 'aboutMe'
  | 'personalInfo'
  | 'workExperience'
  | 'education'
  | 'skill'
  | 'language';
export type UserModals = Record<ModalKeys, boolean>;
