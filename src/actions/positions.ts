'use server';
import { HttpStatus } from '@/constants/http-status';
// Utilities
import { mutate } from '@/lib/client';
import { getBaseApiUrl } from '@/lib/common';
import { FormState, fromErrorToFormState, generateErrorFormState } from '@/lib/error';
// Types
import type { BaseApiResponse } from '@/types/http';
import type {
  ApplicationDto,
  GetAllPositionsQueries,
  GetAllPositionsResponse,
  Position,
} from '@/types/internship';

const prefix = 'internship';
const endpoint = `${getBaseApiUrl()}/${prefix}`;

async function getAllPositions({ page, companyId }: GetAllPositionsQueries) {
  const query = new URLSearchParams(`page=${page}`);
  if (companyId) {
    query.append('companyId', String(companyId));
  }
  const result = await fetch(`${endpoint}/get-all-positions?${query.toString()}`);
  const response: BaseApiResponse<GetAllPositionsResponse> = await result.json();
  return response.data.data;
}
async function getPositionById(positionId: string) {
  const result = await fetch(`${endpoint}/get-position-details?id=${positionId}`);
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
    if (response.status !== HttpStatus.OK) {
      generateErrorFormState();
    }
    return {
      status: 'SUCCESS',
      message: `درخواست کارآموزی شما با موفقیت ارسال شد`,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } catch (error) {
    return fromErrorToFormState(error);
  }
}

export { getAllPositions, getPositionById, apply };
