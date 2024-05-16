import type { Nullable } from '@/types/common';

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
