import type { Nullable } from '@/types/common';
import type { Grade, UserProfile } from './user';

export interface GetCompaniesQueries {
  page: string;
  keyword?: string;
  city?: string;
  category?: string;
}

export interface CompanyListItem {
  id: number;
  title: string;
  logo: Nullable<string>;
  city: Nullable<string>;
  positionCount: number;
}

export interface GetCompaniesResponse {
  totalCount: number;
  currentPage: number;
  countPerPage: number;
  data: CompanyListItem[];
}

export interface Company {
  title: string;
  logo: string;
  city: string;
  phoneNumber: string;
  website: string;
  category: string;
  description: string;
}

export interface GetCompanyDashboardResponse {
  invitationsForInterviewCount: number;
  sentRequestsCount: number;
  profileVisitCount: number;
}

export interface InternshipItem {
  id: number;
  title: string;
  salary: string;
  grade: Grade;
  immediateRecruitment: boolean;
  submissionDeadline: string;
  description: string;
}
export interface GetCompanyPositionsResponse {
  totalCount: number;
  currentPage: number;
  countPerPage: number;
  data: InternshipItem[];
}

export type ApplicationStatus = 0 | 1 | 2 | 3;
export interface InternshipRequestItem {
  userProfileId: number;
  userProfileName: string;
  positionTitle: string;
  requestDate: string;
  status: ApplicationStatus;
}
export interface GetCompanyInternshipRequestsResponse {
  totalCount: number;
  currentPage: number;
  countPerPage: number;
  data: InternshipRequestItem[];
}

export interface GetUserResumeResponse {
  userProfile: UserProfile;
  phoneNumber: string;
  email: string;
}

export type ModalKeys = 'createPosition';
export type CompanyModals = Record<ModalKeys, boolean>;
export type ModalMetadata = Record<string, any> | null;
