import type { Company } from '@/types/company';

const baseUrl = `${process.env.API_URL}/api/v1/company`;

export async function getCompanies() {
  const data = await fetch(baseUrl, {
    cache: 'no-cache',
  });
  const response = await data.json();
  const companies: Company[] = response.data.data;
  return companies;
}

export async function getCompanyById(id: string) {
  const data = await fetch(`${baseUrl}/${id}`, {
    cache: 'no-cache',
  });
  const response = await data.json();
  const company: Company = response.data;
  return company;
}
