'use client';
// UI frameworks
import { FileText } from 'lucide-react';
// Common components
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';

const resumeSections = [
  {
    name: 'درباره من',
    href: '#about-me',
  },
  {
    name: 'مشخصات فردی',
    href: '#personal-info',
  },
  {
    name: 'سوابق شغلی',
    href: '#work-experience',
  },
  {
    name: 'سوابق تحصیلی',
    href: '#educations',
  },
  {
    name: 'مهارت ها',
    href: '#skills',
  },
  {
    name: 'زبان ها',
    href: '#languages',
  },
];

interface Props {
  className?: string;
}
export default function ContentSidebar({ className }: Props) {
  return (
    <div
      className={cn('rounded-md bg-card dark:bg-secondary/30 p-6', className)}
    >
      <div className="flex items-center gap-x-2">
        <FileText className="text-primary" />
        <p className="font-semibold">محتوای رزومه شما</p>
      </div>
      <Separator className="mt-6" />
      <ul className="flex flex-col">
        {resumeSections.map((section) => (
          <li key={section.name} className="h-12 flex items-center px-2">
            <a href={section.href} className="hover:text-primary">
              {section.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
