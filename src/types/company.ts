import type { Nullable } from '@/types/common';
import type { Grade } from './user';

export interface GetCompaniesQueries {
  page: number;
  keyword?: string;
  city?: string;
  category?: string;
}

export interface CompanyListItem {
  id: number;
  title: string;
  logo: Nullable<string>;
  city: Nullable<string>;
}

export interface GetCompaniesResponse {
  totalCount: number;
  currentPage: number;
  countPerPage: number;
  data: CompanyListItem[];
}

export interface Company extends CompanyListItem {
  userId: string;
  user: Nullable<string>;
  phoneNumber: Nullable<string>;
  website: Nullable<string>;
  category: string;
  description: Nullable<string>;
  profileVisit: number;
  workExperiences: Nullable<string>;
  internshipPositions: Nullable<string>;
  createdDate: Date;
  updatedDate: Date;
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
}
export interface GetCompanyPositionResponse {
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
