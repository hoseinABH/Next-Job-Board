import type { Company } from './company';
import type { UserRole } from './user';

export interface GetAllPositionsQueries {
  page: number;
  query?: string;
  companyId?: number;
  sortType?: string;
  sortByField?: string;
  city?: string;
}

export interface Position extends PositionItem {
  grade: number;
  submissionDeadline: Date;
  description: string;
  companyProfileId: number;
  internshipRequests: unknown;
  userRole: UserRole;
  updatedDate: Date;
}

export interface PositionItem {
  id: number;
  companyProfile: Company;
  title: string;
  salary: string;
  createdDate: Date;
  immediateRecruitment: boolean;
}

export interface GetAllPositionsResponse {
  totalCount: number;
  currentPage: number;
  countPerPage: number;
  data: PositionItem[];
}

export type ModalKeys = 'filter' | 'internshipApplication';

export type InternshipsModal = Record<ModalKeys, boolean>;

export interface CreatePositionDto {
  title: string;
  grade: number;
  submissionDeadline: Date;
  salary: string;
  description: string;
  userRole: UserRole;
  immediateRecruitment: true;
}
export interface CreatePositionResponse {}

export interface ApplicationDto {
  positionId: number;
  description: string;
}

export interface ApplicationResponse {}

export interface UpdatePositionStatusDto {
  reqId: number;
  requestStatus: number;
}
export interface UpdatePositionStatusResponse {}
