// Utilities
import { getBaseApiUrl } from '@/lib/common';
// Actions
import { getSession } from '@/actions/cookie';
// Types
import type { GetCompaniesQueries, GetCompaniesResponse, Company } from '@/types/company';
import type { BaseApiResponse } from '@/types/http';

const prefix = 'company';
const endpointUrl = `${getBaseApiUrl()}/${prefix}`;

async function getAllCompanies({ page, city }: GetCompaniesQueries) {
  const token = await getSession();
  const query = new URLSearchParams(`page=${page}`);
  if (city) {
    query.append('city', city);
  }
  const result = await fetch(`${endpointUrl}/get-all-companies?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<GetCompaniesResponse> = await result.json();
  return response.data.data;
}
async function getCompanyById(companyId: string) {
  const token = await getSession();
  const result = await fetch(`${endpointUrl}/get-company-details?companyId=${companyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<Company> = await result.json();
  return response.data;
}

export { getAllCompanies, getCompanyById };
