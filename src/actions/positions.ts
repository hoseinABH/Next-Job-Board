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
  CreatePositionDto,
  GetAllPositionsQueries,
  GetAllPositionsResponse,
  Position,
  UpdatePositionStatusDto,
} from '@/types/internship';
// Constants
import * as Routes from '@/config/routes';
import { CreatePositionFormSchema } from '@/schema/internship';

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
async function updateRequestStatus(updateRequestStatusDto: UpdatePositionStatusDto) {
  try {
    const response = await mutate<UpdatePositionStatusDto>(
      `${route}/update-request-status`,
      'PUT',
      updateRequestStatusDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.DASHBOARD_APPLICATIONS);
    }
  } catch (error) {
    console.log(error);
  }
}
async function createPosition(_: any, formData: FormData): Promise<FormState | undefined> {
  const title = formData.get('title');
  const grade = formData.get('grade');
  const submissionDeadline = formData.get('submissionDeadline');
  const salary = formData.get('salary');
  const description = formData.get('description');
  const userRole = formData.get('userRole');
  const immediateRecruitment = formData.get('immediateRecruitment');
  const createEducationDto = {
    title,
    grade,
    submissionDeadline,
    salary,
    description,
    userRole,
    immediateRecruitment: Boolean(immediateRecruitment),
  };
  try {
    const data = CreatePositionFormSchema.parse(createEducationDto);
    const normalizedDto = {
      ...data,
      grade: parseInt(data.grade),
    } as CreatePositionDto;
    const response = await mutate<CreatePositionDto>(
      `${route}/create-position`,
      'POST',
      normalizedDto,
    );
    if (response.status === HttpStatus.OK) {
      revalidatePath(Routes.DASHBOARD_POSITIONS);
      return generateSuccessFormState();
    }
    return generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
  }
}
export { apply, getAllPositions, getPositionById, updateRequestStatus, createPosition };
