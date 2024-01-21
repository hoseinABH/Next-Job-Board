'use client';
import Link from 'next/link';
// UI frameworks
import { FileText, Link as LucidLink } from 'lucide-react';
// Common components
import { Separator } from '@/components/ui/separator';
// Hooks
import useHashValue from '@/hooks/useHashValue';
// Utilities
import { cn } from '@/lib/utils';

const resumeSections = [
  {
    name: 'درباره من',
    hash: '#about-me',
  },
  {
    name: 'مشخصات فردی',
    hash: '#personal-info',
  },
  {
    name: 'سوابق شغلی',
    hash: '#work-experience',
  },
  {
    name: 'سوابق تحصیلی',
    hash: '#educations',
  },
  {
    name: 'مهارت ها',
    hash: '#skills',
  },
  {
    name: 'زبان ها',
    hash: '#languages',
  },
];

interface Props {
  className?: string;
}
export default function ContentSidebar({ className }: Props) {
  const urlHash = useHashValue();

  return (
    <div
      className={cn(
        'rounded-md bg-card shadow-md dark:bg-secondary/30 p-6',
        className
      )}
    >
      <div className="flex items-center gap-x-2">
        <FileText />
        <p className="font-semibold">محتوای رزومه شما</p>
      </div>
      <Separator className="mt-6" />
      <ul className="flex flex-col">
        {resumeSections.map((section) => (
          <li key={section.name} className="h-12 flex items-center px-2">
            <Link
              href={{ hash: section.hash }}
              className={cn('hover:text-primary flex items-center', {
                ['text-green-500 hover:text-green-500']:
                  urlHash === section.hash,
              })}
            >
              {urlHash === section.hash ? (
                <LucidLink className="w-5 h-5" />
              ) : null}
              <span
                className={cn('-translate-x-0 transition-all duration-300', {
                  ['-translate-x-2 duration-300']: urlHash === section.hash,
                })}
              >
                {section.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
