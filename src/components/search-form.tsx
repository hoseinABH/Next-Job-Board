'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
// Common components
import { MapPin, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
// Utilities
import { cn } from '@/lib/utils';
import { isNumber } from '@/lib/common';
// hooks
import { useRouter, useSearchParams } from 'next/navigation';
import { Skeleton } from './ui/skeleton';

interface Props {
  className?: string;
  targetRoute: string;
  count?: number;
  searchedData?: string;
}
export default function SearchForm({ className, targetRoute, count, searchedData }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultValues = {
    query: searchParams.get('q') ?? '',
    location: searchParams.get('l') ?? '',
  };
  const [searchValues, setSearchValues] = useState(defaultValues);
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`${targetRoute}?q=${searchValues.query}&l=${searchValues.location}`);
  }
  return (
    <div className={cn('w-full max-w-2xl space-y-2', className)}>
      <Card>
        <CardContent className="flex w-full p-6">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center gap-2 md:flex-row"
          >
            <div className="relative w-full">
              <Search className="right-input-adornment" />
              <input
                type="text"
                name="query"
                placeholder="عنوان شغلی یا شرکت..."
                className="search-input"
                onChange={handleChange}
                value={searchValues.query}
              />
            </div>
            <div className="relative w-full">
              <MapPin className="right-input-adornment" />
              <input
                type="text"
                name="location"
                placeholder="شهر"
                className="search-input"
                onChange={handleChange}
                value={searchValues.location}
              />
            </div>
            <Button type="submit" className="mt-4 w-full md:mt-0 md:w-auto">
              جستجو در مشاغل
            </Button>
          </form>
        </CardContent>
      </Card>
      {isNumber(count) ? (
        <p className="text-sm text-muted-foreground">
          <span className="ml-1 font-semibold">{count}</span> {searchedData} یافت شد
        </p>
      ) : null}
    </div>
  );
}

export function SearchFormSkeleton() {
  return (
    <div className="w-full max-w-2xl space-y-2">
      <Card>
        <CardContent className="flex w-full p-6">
          <div className="flex w-full flex-col items-center gap-2 md:flex-row">
            <Skeleton className="h-12 w-full rounded-md sm:w-64" />
            <Skeleton className="h-12 w-full rounded-md sm:w-64" />
            <Skeleton className="mt-4 h-12 w-full sm:w-36 md:mt-0" />
          </div>
        </CardContent>
      </Card>
      <Skeleton className="h-4 w-36" />
    </div>
  );
}
