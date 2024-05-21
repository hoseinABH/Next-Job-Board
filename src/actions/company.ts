'use server';
// Utilities
import { getBaseApiUrl } from '@/lib/common';
// Actions
import { getSession } from './cookie';
// Types
import type {
  Company,
  GetCompaniesQueries,
  GetCompaniesResponse,
  GetCompanyDashboardResponse,
} from '@/types/company';
import type { BaseApiResponse } from '@/types/http';

const prefix = 'company';
const endpointUrl = `${getBaseApiUrl()}/${prefix}`;

async function getAllCompanies({ page, city }: GetCompaniesQueries) {
  const query = new URLSearchParams(`page=${page}`);
  if (city) {
    query.append('city', city);
  }
  const result = await fetch(`${endpointUrl}/get-all-companies?${query.toString()}`);
  const response: BaseApiResponse<GetCompaniesResponse> = await result.json();
  return response.data.data;
}
async function getCompanyById(companyId: string) {
  const result = await fetch(`${endpointUrl}/get-company-details?companyId=${companyId}`);
  const response: BaseApiResponse<Company> = await result.json();
  return response.data;
}
async function getCompanyDashboard() {
  const token = await getSession();
  const result = await fetch(`${endpointUrl}/get-company-dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<GetCompanyDashboardResponse> = await result.json();
  return response.data;
}

export { getAllCompanies, getCompanyById, getCompanyDashboard };
