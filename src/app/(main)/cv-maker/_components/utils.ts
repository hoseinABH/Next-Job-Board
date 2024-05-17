import type {
  AboutData,
  Education,
  Language,
  PersonalData,
  Skill,
  UserProfile,
  WorkExperience,
} from '@/types/user';

export interface NormalizedProfileData {
  aboutData: AboutData;
  personalData: PersonalData;
  skills: Skill[];
  educations: Education[];
  workExperiences: WorkExperience[];
  languages: Language[];
}

export function normalizeProfileData(userProfile?: UserProfile): NormalizedProfileData | undefined {
  if (!userProfile) return;
  const {
    aboutMe,
    title,
    firstName,
    lastName,
    militaryService,
    maritalStatus,
    city,
    skills,
    workExperiences,
    educations,
    gender,
    languages,
  } = userProfile;
  const aboutData = {
    aboutMe,
    title,
    firstName,
    lastName,
  };
  const personalData = { firstName, lastName, maritalStatus, militaryService, gender, city };
  return { aboutData, personalData, skills, workExperiences, educations, languages };
}
