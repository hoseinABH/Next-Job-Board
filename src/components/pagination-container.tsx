'use client';
// Common components
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
// Hooks
import usePagination from '@/hooks/use-pagination';
// Types
import type { PaginationData } from '@/types/common';

interface Props {
  paginationData: PaginationData;
}

export default function PaginationContainer({ paginationData }: Props) {
  const { prevUrl, nextUrl, currentPage, paginationNumbers } = usePagination(paginationData);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={prevUrl} />
        </PaginationItem>
        {paginationNumbers.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink isActive={page === currentPage} href={`?p=${page}`}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href={nextUrl} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
