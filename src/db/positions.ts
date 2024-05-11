import type { Job } from '@/types/jobs';
// data
import { positions } from '@/data';

export async function getAllPositions(): Promise<Job[]> {
  return positions;
}

export async function getPositionById(id: string): Promise<Job> {
  const position = positions.find((position) => position.id === id);
  if (position) return position;
  return positions[0];
}

export async function getFeaturedJobs(): Promise<Job[]> {
  let featuredPositions: Job[] = [];
  for (let i = 0; i < 4; i++) {
    featuredPositions.push(positions[i]);
  }
  return featuredPositions;
}

export async function getPositionsByCompanyId(companyId: string): Promise<Job[]> {
  const companyPositions = positions.filter((position) => position.company.id === companyId);
  return companyPositions;
}
