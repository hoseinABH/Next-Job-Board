import type { PaginationData } from './common';
import type { ApplicationStatus, Company } from './company';
import type { Grade, UserRole } from './user';

export interface GetAllPositionsQueries {
  page: string;
  query?: string;
  companyId?: string;
  sortType?: string;
  sortByField?: string;
  city?: string;
}

export interface Position {
  companyProfile: Company;
  description: string;
  grade: Grade;
  immediateRecruitment: boolean;
  salary: string;
  submissionDeadline: string;
  title: string;
  userRole: UserRole;
  applied: boolean;
  positionId: number;
}

export interface PositionItem {
  id: number;
  companyProfile: Company;
  title: string;
  salary: string;
  createdDate: Date;
  immediateRecruitment: boolean;
}

export interface GetAllPositionsResponse extends PaginationData {
  data: PositionItem[];
}

export type ModalKeys = 'filter' | 'internshipApplication';

export type InternshipsModal = Record<ModalKeys, boolean>;

export interface CreatePositionDto {
  title: string;
  grade: Grade;
  submissionDeadline: string;
  salary: string;
  description: string;
  userRole: UserRole;
  immediateRecruitment: boolean;
}
export interface UpdatePositionDto {
  id: number;
  title: string;
  grade: Grade;
  submissionDeadline: string;
  salary: string;
  description: string;
  userRole: UserRole;
  immediateRecruitment: boolean;
}

export interface ApplicationDto {
  positionId: number;
  description: string;
}
export interface UpdatePositionStatusDto {
  reqId: number;
  requestStatus: ApplicationStatus;
}

export interface PositionActivationDto {
  positionId: number;
  isActive: boolean;
}

export interface Test {
  title: string;
  userRole: UserRole;
  type: boolean;
  id: number;
  isPassed: boolean;
}
export interface Question {
  id: number;
  question: string;
  answers: string[];
}
export interface GetTestByIdResponse {
  testTitle: string;
  questions: Question[];
}

export type AnswerIndex = number | 'unanswered';
export interface Answer {
  questionId: number;
  answerIndex: AnswerIndex;
}
