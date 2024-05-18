import type { BaseApiResponse } from '@/types/http';

export async function mutate<T, F = null>(
  url: string,
  method: string,
  data: T,
): Promise<BaseApiResponse<F>> {
  const result = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await result.json();
}
