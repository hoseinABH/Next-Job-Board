'use server';
// Utilities
import { mutate } from '@/lib/client';
import { getBaseApiUrl } from '@/lib/common';
import { fromErrorToFormState, generateErrorFormState, type FormState } from '@/lib/error';
import { revalidatePath } from 'next/cache';
// Actions
import { getSession } from '@/actions/cookie';
// Constants
import * as Routes from '@/config/routes';
import { HttpStatus } from '@/constants/http-status';
import * as messages from '@/constants/messages';
// Schema
import { AboutMeFormSchema, PersonalInfoFormSchema } from '@/schema/user';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
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
    if (response.status !== HttpStatus.OK) {
      generateErrorFormState();
    }
    revalidatePath(Routes.CV_MAKER);
    return {
      status: 'SUCCESS',
      message: messages.commonSuccess,
      fieldErrors: {},
      timestamp: Date.now(),
    };
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
  const updateAboutMeDto = {
    firstName,
    lastName,
    gender,
    maritalStatus,
    militaryService,
    city,
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
    if (response.status !== HttpStatus.OK) {
      generateErrorFormState();
    }
    revalidatePath(Routes.CV_MAKER);
    return {
      status: 'SUCCESS',
      message: messages.commonSuccess,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } catch (error) {
    return fromErrorToFormState(error);
  }
}

export { getUserMinimalProfile, getUserProfile, updateAboutMe, updatePersonalInfo };
