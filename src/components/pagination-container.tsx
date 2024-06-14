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
import Maybe from './maybe';
// Hooks
import usePagination from '@/hooks/use-pagination';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { PaginationData } from '@/types/common';

interface Props {
  paginationData: PaginationData;
  className?: string;
}

export default function PaginationContainer({ paginationData, className }: Props) {
  const { needPagination, prevUrl, nextUrl, currentPage, paginationNumbers } =
    usePagination(paginationData);
  return (
    <Maybe condition={needPagination}>
      <Pagination className={cn('', className)}>
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
    </Maybe>
  );
}
