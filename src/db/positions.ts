// Utilities
import { getBaseApiUrl } from '@/lib/common';
// Actions
import { getSession } from '@/actions/cookie';
// Types
import type { BaseApiResponse } from '@/types/http';
import type { GetAllPositionsQueries, GetAllPositionsResponse, Position } from '@/types/internship';

const prefix = 'internship';
const endpointUrl = `${getBaseApiUrl()}/${prefix}`;

async function getAllPositions({ page, companyId }: GetAllPositionsQueries) {
  const token = await getSession();
  const query = new URLSearchParams(`page=${page}`);
  if (companyId) {
    query.append('companyId', companyId);
  }
  const result = await fetch(`${endpointUrl}/get-all-positions?${query.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<GetAllPositionsResponse> = await result.json();
  return response.data.data;
}

async function getPositionById(positionId: string) {
  const token = await getSession();
  const result = await fetch(`${endpointUrl}/get-position-details?id=${positionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const response: BaseApiResponse<Position> = await result.json();
  return response.data;
}

export { getAllPositions, getPositionById };
