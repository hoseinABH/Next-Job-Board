import type { Job } from '@/types/jobs';

const baseUrl = `${process.env.API_URL}/api/v1/positions`;

export async function getAllPositions() {
  const data = await fetch(baseUrl, {
    cache: 'no-cache',
  });
  const response = await data.json();
  const positions: Job[] = response.data.data;
  return positions;
}

export async function getPositionById(id: string) {
  const data = await fetch(`${baseUrl}/${id}`, {
    cache: 'no-cache',
  });
  const response = await data.json();
  const position: Job = response.data;
  return position;
}
