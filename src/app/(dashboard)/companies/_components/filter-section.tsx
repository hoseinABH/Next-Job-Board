'use client';
// UI Frameworks
import { MapPin, Search } from 'lucide-react';
// Common components
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SelectBox from '@/components/select-box';
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
        <form className="flex justify-between gap-4 items-center flex-col sm:flex-row">
          <div className="w-full gap-4 flex flex-col sm:flex-row flex-1 items-center">
            <div className="relative w-full sm:w-auto">
              <Search className={cn('right-input-adornment', 'w-4 h-4')} />
              <Input className="pr-8" placeholder="جستجو کلمات کلیدی" />
            </div>
            <div className="relative w-full sm:w-auto">
              <MapPin className={cn('right-input-adornment', 'w-4 h-4')} />
              <Input className="pr-8" placeholder="موقعیت مکانی" />
            </div>
            <SelectBox
              placeholder="دسته‌بندی شغلی"
              options={data}
              className="min-w-full sm:min-w-fit"
            />
          </div>
          <Button className="w-full sm:w-auto">جستجو شرکت</Button>
        </form>
      </CardContent>
    </Card>
  );
}
