'use server';
// Utilities
import { fetcher, mutate } from '@/lib/client';
import {
  fromErrorToFormState,
  generateErrorFormState,
  generateSuccessFormState,
  type FormState,
} from '@/lib/error';
import { revalidatePath } from 'next/cache';
// Actions
import { getSession } from './cookie';
// Constants
import * as Routes from '@/config/routes';
import { HttpStatus } from '@/constants/http-status';
import { mapEntityToEndpoint } from '@/constants/user';
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
import type {
  CreateEducationDto,
  CreateLanguageDto,
  CreateSkillDto,
  CreateWorkExperienceDto,
  GetUserApplyRequestResponse,
  RemoveEntityDto,
  UpdateAboutMeDto,
  UpdatePersonalDto,
  UserMinimalProfile,
  UserProfile,
} from '@/types/user';

const route = 'user';
async function getUserMinimalProfile() {
  const session = await getSession();
  if (!Boolean(session)) return;
  const path = `${route}/get-minimal-profile`;
  const response = await fetcher<UserMinimalProfile>(path, 'no-cache');
  return response.data;
}
async function getUserApplyRequests({ page }: { page: string }) {
  const params = new URLSearchParams(`page=${page}`);
  const path = `${route}/get-user-internship-requests?${params.toString()}`;
  const response = await fetcher<GetUserApplyRequestResponse>(path, 'no-cache');
  return response.data.data;
}
async function getUserProfile() {
  const path = `${route}/get-profile`;
  const response = await fetcher<UserProfile>(path, 'no-cache');
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
    const response = await mutate<UpdateAboutMeDto>(`${route}/save-about-me`, 'POST', data);
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
      `${route}/save-personal-info`,
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
      `${route}/save-work-experience`,
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
      `${route}/save-education`,
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
    const response = await mutate<CreateSkillDto>(`${route}/save-skill`, 'POST', normalizedDto);
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
      `${route}/save-language`,
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
async function removeEntity(removeEntityDto: RemoveEntityDto) {
  try {
    const entityUrl = `${route}/${mapEntityToEndpoint[removeEntityDto.entityType]}=${removeEntityDto.id}`;
    const response = await mutate(entityUrl, 'DELETE');
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
  createEducation,
  createLanguage,
  createSkill,
  createWorkExperience,
  getUserMinimalProfile,
  getUserProfile,
  removeEntity,
  updateAboutMe,
  updatePersonalInfo,
  getUserApplyRequests,
};
