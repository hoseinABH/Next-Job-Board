'use server';
import { HttpStatus } from '@/constants/http-status';
// Utilities
import { mutate } from '@/lib/client';
import { getBaseApiUrl } from '@/lib/common';
import {
  FormState,
  fromErrorToFormState,
  generateErrorFormState,
  generateSuccessFormState,
} from '@/lib/error';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  ApplicationDto,
  GetAllPositionsQueries,
  GetAllPositionsResponse,
  Position,
} from '@/types/internship';
import { getSession } from './cookie';

const prefix = 'internship';
const endpoint = `${getBaseApiUrl()}/${prefix}`;

async function getAllPositions({ page, companyId, city, query }: GetAllPositionsQueries) {
  const params = new URLSearchParams(`page=${page}`);
  if (companyId) {
    params.append('companyId', companyId);
  }
  if (query) {
    params.append('query', query);
  }
  if (city) {
    params.append('city', city);
  }
  const result = await fetch(`${endpoint}/get-all-positions?${params.toString()}`, {
    cache: 'no-cache',
  });
  const response: BaseApiResponse<GetAllPositionsResponse> = await result.json();
  return response.data.data;
}
async function getPositionById(positionId: string) {
  const token = await getSession();
  const result = await fetch(`${endpoint}/get-position-details?id=${positionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<Position> = await result.json();
  return response.data;
}

async function apply(_: any, formData: FormData): Promise<FormState | undefined> {
  const description = formData.get('description') as string;
  const positionId = formData.get('positionId') as string;
  const applicationDto: ApplicationDto = { description, positionId: Number(positionId) };
  try {
    const response = await mutate<ApplicationDto>(
      `${endpoint}/apply-for-position`,
      'POST',
      applicationDto,
    );
    if (response.status === HttpStatus.OK) {
      return generateSuccessFormState(`درخواست کارآموزی شما با موفقیت ارسال شد`);
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}

export { getAllPositions, getPositionById, apply };
