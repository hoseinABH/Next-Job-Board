import type { Position } from '@/types/internship';
// data
import { positions } from '@/data';

export async function getAllPositions(): Promise<Position[]> {
  return positions;
}

export async function getPositionById(id: string): Promise<Position> {
  const position = positions.find((position) => position.id === id);
  if (position) return position;
  return positions[0];
}

export async function getFeaturedJobs(): Promise<Position[]> {
  let featuredPositions: Position[] = [];
  for (let i = 0; i < 4; i++) {
    featuredPositions.push(positions[i]);
  }
  return featuredPositions;
}

export async function getPositionsByCompanyId(companyId: string): Promise<Position[]> {
  const companyPositions = positions.filter((position) => position.company.id === companyId);
  return companyPositions;
}
