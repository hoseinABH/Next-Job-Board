import type { Company } from '@/types/company';
// data
import { companies } from '@/data';

export async function getAllCompanies(): Promise<Company[]> {
  return companies;
}

export async function getCompanyById(id: string): Promise<Company> {
  const company = companies.find((company) => company.id === id);
  if (company) return company;
  return companies[0];
}
