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
import { isRedirectError } from 'next/dist/client/components/redirect';
// Actions
import { getSession } from '@/actions/cookie';
// Constants
import { HttpStatus } from '@/constants/http-status';
// Schema
import { AboutMeFormSchema } from '@/schema/user';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { UpdateAboutMeDto, UserMinimalProfile, UserProfile } from '@/types/user';

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
  } as UpdateAboutMeDto;
  try {
    const data = AboutMeFormSchema.parse(updateAboutMeDto);
    const response = await mutate<UpdateAboutMeDto>(`${endpoint}/save-about-me`, 'POST', data);
    if (response.status !== HttpStatus.OK) {
      generateErrorFormState();
    }
    generateSuccessFormState();
  } catch (error) {
    /** This Condition Resolve Redirect issue **/
    if (isRedirectError(error)) {
      throw error;
    }
    return fromErrorToFormState(error);
  }
}

export { getUserMinimalProfile, getUserProfile, updateAboutMe };
