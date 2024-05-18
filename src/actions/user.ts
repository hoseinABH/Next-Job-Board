'use server';
// Utilities
import { getBaseApiUrl } from '@/lib/common';
// Actions
import { getSession } from '@/actions/cookie';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { UserMinimalProfile, UserProfile } from '@/types/user';

const prefix = 'user';
const endpointUrl = `${getBaseApiUrl()}/${prefix}`;

async function getUserMinimalProfile() {
  const token = await getSession();
  if (!token) return;
  const result = await fetch(`${endpointUrl}/get-minimal-profile`, {
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
  const result = await fetch(`${endpointUrl}/get-profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<UserProfile> = await result.json();
  return response.data;
}

export { getUserMinimalProfile, getUserProfile };
