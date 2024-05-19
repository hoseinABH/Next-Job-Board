'use client';
// UI Frameworks
import { MapPin, Search } from 'lucide-react';
// Common components
import SelectField from '@/components/select-field';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
// Utilities
import { cn } from '@/lib/utils';
// Data
import { data } from './filter-data';

interface Props {
  className?: string;
}
export default function FilterSection({ className }: Props) {
  return (
    <Card className={cn('', className)}>
      <CardContent className="p-6">
        <form className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex w-full flex-1 flex-col items-center gap-4 sm:flex-row">
            <div className="relative w-full sm:w-auto">
              <Search className={cn('right-input-adornment', 'h-4 w-4')} />
              <Input className="pr-8" placeholder="جستجو کلمات کلیدی" />
            </div>
            <div className="relative w-full sm:w-auto">
              <MapPin className={cn('right-input-adornment', 'h-4 w-4')} />
              <Input className="pr-8" placeholder="موقعیت مکانی" />
            </div>
            <SelectField
              placeholder="دسته‌بندی شغلی"
              options={data}
              containerClassName="min-w-full sm:min-w-fit"
              name="category"
            />
          </div>
          <Button className="w-full sm:w-auto">جستجو شرکت</Button>
        </form>
      </CardContent>
    </Card>
  );
}
