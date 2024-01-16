import Image from 'next/image';
// Common components
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';
// Utilities
import { cn } from '@/lib/utils';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
  className?: string;
  onClick?: () => void;
}

export default function CompanyCard({ className, company }: Props) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row w-full items-center justify-between border rounded-md px-8 py-10 bg-background dark:bg-secondary/30 transition-all hover:drop-shadow-md',
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-center gap-x-2">
        <Image src={company.image} width={85} height={85} alt={company.name} />
        <div className="my-4 sm:my-0">
          <h4 className="font-semibold mb-2">{company.name}</h4>
          <span className="flex items-center  text-muted-foreground">
            <MapPin className="w-4 h-4 ml-1" /> {company.location}
          </span>
        </div>
      </div>
      <Button
        className="rounded-full transition-all bg-primary/10 text-primary font-normal hover:bg-primary/20 hover:text-primary"
        variant="outline"
      >
        {company.openPosition} موقعیت شغلی فعال
      </Button>
    </div>
  );
}
