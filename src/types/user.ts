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
export interface UpdateAboutMeDto {
  title: string;
  aboutMe: string;
}
export interface UpdatePersonalDto extends PersonalData {}

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
export interface UserResume {
  id: string;
  personalInfo: PersonalData;
  education: Education[];
  workExperience: WorkExperience[];
  skills: Skill[];
  languages: Language[];
}

export type ModalKeys = 'aboutMe';
export type UserModals = Record<ModalKeys, boolean>;
