'use server';
import { HttpStatus } from '@/constants/http-status';
// Utilities
import { fetcher, mutate } from '@/lib/client';
import {
  FormState,
  fromErrorToFormState,
  generateErrorFormState,
  generateSuccessFormState,
} from '@/lib/error';
import { revalidatePath } from 'next/cache';
// Types
import type {
  ApplicationDto,
  GetAllPositionsQueries,
  GetAllPositionsResponse,
  Position,
} from '@/types/internship';
// Constants
import * as Routes from '@/config/routes';

const route = 'internship';
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
  const path = `${route}/get-all-positions?${params.toString()}`;
  const response = await fetcher<GetAllPositionsResponse>(path, 'no-cache');
  return response.data.data;
}
async function getPositionById(positionId: string) {
  const path = `${route}/get-position-details?id=${positionId}`;
  const response = await fetcher<Position>(path, 'no-cache');
  return response.data;
}
async function apply(_: any, formData: FormData): Promise<FormState | undefined> {
  const description = formData.get('description') as string;
  const positionId = formData.get('positionId') as string;
  const applicationDto: ApplicationDto = { description, positionId: Number(positionId) };
  try {
    const response = await mutate<ApplicationDto>(
      `${route}/apply-for-position`,
      'POST',
      applicationDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(`${Routes.INTERNSHIPS}/${positionId}`);
      return generateSuccessFormState(`درخواست کارآموزی شما با موفقیت ارسال شد`);
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
export { apply, getAllPositions, getPositionById };
