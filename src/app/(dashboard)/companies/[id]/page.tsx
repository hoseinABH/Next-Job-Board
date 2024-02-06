// Common components
import BackButton from '@/components/back-button';
// Local components
import PositionContent from './_components/position-content';
import PositionDescription from './_components/position-description';
// Types
import type { Metadata } from 'next';
// Configs
import { landingJobs } from '@/config/app';

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
      <BackButton>بازگشت به شرکت‌ها</BackButton>
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
