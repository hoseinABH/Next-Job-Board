import Link from 'next/link';
// UI Frameworks
import { ArrowRight } from 'lucide-react';
// Local components
import PositionContent from './_components/position-content';
import PositionDescription from './_components/position-description';
// Types
import type { Metadata } from 'next';
// Configs
import { landingJobs } from '@/config/app';
import * as Routes from '@/config/routes';

interface Props {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const job = landingJobs.find((job) => job.id === params.id);
  return {
    title: job?.title,
  };
}

export default function Job({ params }: Props) {
  const job = landingJobs.find((job) => job.id === params.id)!;
  return (
    <section className="py-12">
      <Link
        href={Routes.JOBS}
        className="text-muted-foreground flex items-center gap-x-px group w-max"
        scroll={false}
      >
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />{' '}
        بازگشت به موقعیت‌ها
      </Link>
      <h1 className="text-2xl font-bold my-4">{job?.title}</h1>
      <div className="flex flex-col-reverse lg:flex-row gap-6 relative">
        <PositionContent job={job} className="flex-1" />
        <PositionDescription
          job={job}
          className="col-span-3 relative top-auto lg:sticky lg:top-[100px] w-full lg:w-[300px] h-fit"
        />
      </div>
    </section>
  );
}
