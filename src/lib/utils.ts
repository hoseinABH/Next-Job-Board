import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { PaginationData } from '@/types/common';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPaginationDataFromResponse(response: PaginationData) {
  const paginationData: PaginationData = {
    countPerPage: response.countPerPage,
    currentPage: response.currentPage,
    totalCount: response.totalCount,
  };
  return paginationData;
}
