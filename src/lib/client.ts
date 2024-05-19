import { getSession } from '@/actions/cookie';
import type { BaseApiResponse } from '@/types/http';

export async function mutate<T, F = null>(
  url: string,
  method: string,
  data: T,
): Promise<BaseApiResponse<F>> {
  const token = await getSession();
  const result = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}
