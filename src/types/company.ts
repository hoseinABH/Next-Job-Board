export type LoadingKeys = 'getAllCompanies' | 'getCompanyById';

export type CompanyLoading = Record<LoadingKeys, boolean>;

export interface Company {
  id: string;
  name: string;
  aboutUs: string;
  city: string;
  website: string;
  image: string;
}

export interface GetCompanyDashboardResponse {}
