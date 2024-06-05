'use server';
// Utilities
import { fetcher } from '@/lib/client';
// Types
import type {
  Company,
  GetCompaniesQueries,
  GetCompaniesResponse,
  GetCompanyDashboardResponse,
  GetCompanyInternshipRequestsResponse,
  GetCompanyPositionsResponse,
  GetUserResumeResponse,
} from '@/types/company';

const route = 'company';

async function getCompanyProfile() {
  const path = `${route}/get-profile`;
  const response = await fetcher<Company>(path, 'no-cache');
  return response.data;
}

async function getAllCompanies({ page, city, keyword }: GetCompaniesQueries) {
  const query = new URLSearchParams(`page=${page}`);
  if (city) {
    query.append('city', city);
  }
  if (keyword) {
    query.append('keyword', keyword);
  }
  const path = `${route}/get-all-companies?${query.toString()}`;
  const response = await fetcher<GetCompaniesResponse>(path, 'no-cache');
  return response.data.data;
}
async function getCompanyById(companyId: string) {
  const path = `${route}/get-company-details?companyId=${companyId}`;
  const response = await fetcher<Company>(path, 'no-cache');
  return response.data;
}
async function getCompanyDashboard() {
  const path = `${route}/get-company-dashboard`;
  const response = await fetcher<GetCompanyDashboardResponse>(path, 'no-cache');
  return response.data;
}
async function getCompanyPositions({ page }: { page: string }) {
  const query = new URLSearchParams(`page=${page}`);
  const path = `${route}/get-company-internship-positions?${query.toString()}`;
  const response = await fetcher<GetCompanyPositionsResponse>(path, 'no-cache');
  return response.data;
}
async function getCompanyInternshipRequests({ page }: { page: string }) {
  const query = new URLSearchParams(`page=${page}`);
  const path = `${route}/get-company-internship-requests?${query.toString()}`;
  const response = await fetcher<GetCompanyInternshipRequestsResponse>(path, 'no-cache');
  return response.data;
}
async function getUserResume(profileId: string) {
  const path = `${route}/get-user-profile-for-company?profileId=${profileId}`;
  const response = await fetcher<GetUserResumeResponse>(path, 'no-cache');
  return response.data;
}
export {
  getAllCompanies,
  getCompanyById,
  getCompanyDashboard,
  getCompanyInternshipRequests,
  getCompanyPositions,
  getUserResume,
  getCompanyProfile,
};
