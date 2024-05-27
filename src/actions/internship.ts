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
  Answer,
  ApplicationDto,
  CreatePositionDto,
  GetAllPositionsQueries,
  GetAllPositionsResponse,
  Position,
  PositionActivationDto,
  Question,
  Test,
  UpdatePositionDto,
  UpdatePositionStatusDto,
} from '@/types/internship';
// Constants
import * as Routes from '@/config/routes';
// Schema
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
      return generateSuccessFormState();
    }
    generateErrorFormState();
  } catch (error) {
    return fromErrorToFormState(error);
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
async function updatePosition(_: any, formData: FormData): Promise<FormState | undefined> {
  const id = formData.get('id') as string;
  const title = formData.get('title');
  const grade = formData.get('grade');
  const submissionDeadline = formData.get('submissionDeadline');
  const salary = formData.get('salary');
  const description = formData.get('description');
  const userRole = formData.get('userRole');
  const immediateRecruitment = formData.get('immediateRecruitment');
  const createEducationDto = {
    id,
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
      id: parseInt(id),
      grade: parseInt(data.grade),
    } as UpdatePositionDto;
    const response = await mutate<UpdatePositionDto>(
      `${route}/update-position`,
      'PUT',
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
async function updateActivation(activationDto: PositionActivationDto) {
  try {
    const response = await mutate<PositionActivationDto>(
      `${route}/deactivate-position`,
      'PUT',
      activationDto,
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
async function getRequiredTests() {
  const path = `${route}/get-request-tests`;
  const response = await fetcher<Test[]>(path, 'no-cache');
  return response.data;
}
async function getTestAnswers(testId: string) {
  const path = `${route}/get-test-answers?testId=${testId}`;
  const response = await fetcher<Answer[]>(path, 'no-cache');
  return response.data;
}
async function getTestQuestions(testId: string) {
  const path = `${route}/get-test-questions?testId=${testId}`;
  const response = await fetcher<Question[]>(path, 'no-cache');
  return response.data;
}
export {
  apply,
  createPosition,
  getAllPositions,
  getPositionById,
  updateActivation,
  updatePosition,
  updateRequestStatus,
  getRequiredTests,
  getTestAnswers,
  getTestQuestions,
};
