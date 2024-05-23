// Actions
import { getSession } from '@/actions/cookie';
// Utilities
import { getBaseApiUrl } from './common';
// Types
import type { BaseApiResponse } from '@/types/http';

export async function mutate<T = null, F = null>(
  path: string,
  method: string,
  data?: T,
): Promise<BaseApiResponse<F>> {
  const token = await getSession();
  const result = await fetch(`${getBaseApiUrl()}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}

export async function fetcher<T>(path: string, cache?: RequestCache): Promise<BaseApiResponse<T>> {
  const token = await getSession();
  const result = await fetch(`${getBaseApiUrl()}/${path}`, {
    headers: {
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
    cache: cache ?? 'default',
  });
  return await result.json();
}
