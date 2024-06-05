// Hooks
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
// Types
import type { PaginationData } from '@/types/common';

export default function usePagination(paginationData: PaginationData) {
  const searchParams = useSearchParams();
  const targetPage = searchParams.get('p');
  const pagination = useMemo(() => {
    const paginationNumbers: number[] = [];
    const currentPage = targetPage ? Number(targetPage) : paginationData.currentPage;
    const totalPages = Math.ceil(paginationData.totalCount / paginationData.countPerPage);
    for (let i = 1; i <= totalPages; i++) {
      paginationNumbers.push(i);
    }
    const nextDisabled = totalPages <= currentPage;
    const prevDisabled = currentPage <= 1;
    const defaultLink = `?p=${currentPage}`;
    const nextUrl = nextDisabled ? defaultLink : `?p=${currentPage + 1}`;
    const prevUrl = prevDisabled ? defaultLink : `?p=${currentPage - 1}`;
    const needPagination = totalPages > 1;
    return {
      paginationNumbers,
      nextUrl,
      prevUrl,
      currentPage,
      nextDisabled,
      prevDisabled,
      needPagination,
    };
  }, [paginationData, targetPage]);
  return pagination;
}
