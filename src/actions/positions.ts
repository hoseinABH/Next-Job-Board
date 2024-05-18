'use server';
// Utilities
import { getBaseApiUrl } from '@/lib/common';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { GetAllPositionsQueries, GetAllPositionsResponse, Position } from '@/types/internship';

const prefix = 'internship';
const endpointUrl = `${getBaseApiUrl()}/${prefix}`;

async function getAllPositions({ page, companyId }: GetAllPositionsQueries) {
  const query = new URLSearchParams(`page=${page}`);
  if (companyId) {
    query.append('companyId', String(companyId));
  }
  const result = await fetch(`${endpointUrl}/get-all-positions?${query.toString()}`);
  const response: BaseApiResponse<GetAllPositionsResponse> = await result.json();
  return response.data.data;
}
async function getPositionById(positionId: string) {
  const result = await fetch(`${endpointUrl}/get-position-details?id=${positionId}`);
  const response: BaseApiResponse<Position> = await result.json();
  return response.data;
}

export { getAllPositions, getPositionById };
