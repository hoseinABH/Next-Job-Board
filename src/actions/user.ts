'use server';
// Utilities
import { mutate } from '@/lib/client';
import { getBaseApiUrl } from '@/lib/common';
import {
  fromErrorToFormState,
  generateErrorFormState,
  generateSuccessFormState,
  type FormState,
} from '@/lib/error';
import { revalidatePath } from 'next/cache';
// Actions
import { getSession } from '@/actions/cookie';
// Constants
import * as Routes from '@/config/routes';
import { HttpStatus } from '@/constants/http-status';
import * as messages from '@/constants/messages';
// Schema
import {
  AboutMeFormSchema,
  EducationFormSchema,
  LanguageFormSchema,
  PersonalInfoFormSchema,
  SkillFormSchema,
  WorkExperienceFormSchema,
} from '@/schema/user';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  CreateEducationDto,
  CreateLanguageDto,
  CreateSkillDto,
  CreateWorkExperienceDto,
  UpdateAboutMeDto,
  UpdatePersonalDto,
  UserMinimalProfile,
  UserProfile,
} from '@/types/user';

const prefix = 'user';
const endpoint = `${getBaseApiUrl()}/${prefix}`;

async function getUserMinimalProfile() {
  const token = await getSession();
  if (!token) return;
  const result = await fetch(`${endpoint}/get-minimal-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<UserMinimalProfile> = await result.json();
  return response.data;
}
async function getUserProfile() {
  const token = await getSession();
  if (!token) return;
  const result = await fetch(`${endpoint}/get-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-cache',
  });
  const response: BaseApiResponse<UserProfile> = await result.json();
  return response.data;
}
async function updateAboutMe(_: any, formData: FormData): Promise<FormState | undefined> {
  const title = formData.get('title');
  const aboutMe = formData.get('aboutMe');
  const updateAboutMeDto = {
    title,
    aboutMe,
  };
  try {
    const data = AboutMeFormSchema.parse(updateAboutMeDto);
    const response = await mutate<UpdateAboutMeDto>(`${endpoint}/save-about-me`, 'POST', data);
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
async function updatePersonalInfo(_: any, formData: FormData): Promise<FormState | undefined> {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const gender = formData.get('gender');
  const maritalStatus = formData.get('maritalStatus');
  const militaryService = formData.get('militaryService');
  const city = formData.get('city');
  const phoneNumber = formData.get('phoneNumber');
  const updateAboutMeDto = {
    firstName,
    lastName,
    gender,
    maritalStatus,
    militaryService,
    city,
    phoneNumber,
  };
  try {
    const data = PersonalInfoFormSchema.parse(updateAboutMeDto);
    const normalizedDto = {
      ...data,
      gender: parseInt(data.gender),
      maritalStatus: parseInt(data.maritalStatus),
      militaryService: parseInt(data.militaryService),
    } as UpdatePersonalDto;
    const response = await mutate<UpdatePersonalDto>(
      `${endpoint}/save-personal-info`,
      'POST',
      normalizedDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
async function createWorkExperience(_: any, formData: FormData): Promise<FormState | undefined> {
  const title = formData.get('title');
  const companyName = formData.get('companyName');
  const startDate = formData.get('startDate');
  const endDate = formData.get('endDate');
  const stillWorking = formData.get('stillWorking');
  const description = formData.get('description');
  const createWorkExperienceDto = {
    title,
    companyName,
    startDate,
    endDate,
    stillWorking: Boolean(stillWorking),
    description,
  };
  try {
    const data = WorkExperienceFormSchema.parse(createWorkExperienceDto);
    const normalizedDto = {
      ...data,
      endDate: data.endDate?.length ? data.endDate : null,
    } as CreateWorkExperienceDto;
    const response = await mutate<CreateWorkExperienceDto>(
      `${endpoint}/save-work-experience`,
      'POST',
      normalizedDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
async function createEducation(_: any, formData: FormData): Promise<FormState | undefined> {
  const fieldOfEducation = formData.get('fieldOfEducation');
  const educationalInstitution = formData.get('educationalInstitution');
  const grade = formData.get('grade');
  const startDate = formData.get('startDate');
  const endDate = formData.get('endDate');
  const stillEducating = formData.get('stillEducating');
  const createEducationDto = {
    fieldOfEducation,
    educationalInstitution,
    grade,
    startDate,
    endDate,
    stillEducating: Boolean(stillEducating),
  };
  try {
    const data = EducationFormSchema.parse(createEducationDto);
    const normalizedDto = {
      ...data,
      endDate: data.endDate?.length ? data.endDate : null,
      grade: parseInt(data.grade),
    } as CreateEducationDto;
    const response = await mutate<CreateEducationDto>(
      `${endpoint}/save-education`,
      'POST',
      normalizedDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
async function createSkill(_: any, formData: FormData): Promise<FormState | undefined> {
  const name = formData.get('name');
  const level = formData.get('level');
  const createSkillDto = {
    name,
    level,
  };
  try {
    const data = SkillFormSchema.parse(createSkillDto);
    const normalizedDto = {
      ...data,
      level: parseInt(data.level),
    } as CreateSkillDto;
    const response = await mutate<CreateSkillDto>(`${endpoint}/save-skill`, 'POST', normalizedDto);
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
async function createLanguage(_: any, formData: FormData): Promise<FormState | undefined> {
  const name = formData.get('name');
  const level = formData.get('level');
  const createLanguageDto = {
    name,
    level,
  };
  try {
    const data = LanguageFormSchema.parse(createLanguageDto);
    const normalizedDto = {
      ...data,
      level: parseInt(data.level),
    } as CreateLanguageDto;
    const response = await mutate<CreateLanguageDto>(
      `${endpoint}/save-language`,
      'POST',
      normalizedDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.CV_MAKER);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}

export {
  getUserMinimalProfile,
  getUserProfile,
  updateAboutMe,
  updatePersonalInfo,
  createWorkExperience,
  createEducation,
  createLanguage,
  createSkill,
};
