// Common components
import BackButton from '@/components/back-button';
import { JobApplicationModal } from '@/components/modal/jobs/job-application';
// Local components
import PositionContent from './_components/position-content';
import PositionDescription from './_components/position-description';
// Services
import { getPositionById } from '@/db/positions';
// Types
import type { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const job = await getPositionById(params.id);
  return {
    title: job.title,
    description: job.description,
  };
}

export default async function Job({ params }: Props) {
  const job = await getPositionById(params.id);
  return (
    <>
      <section className="py-12">
        <BackButton>بازگشت به موقعیت‌ها</BackButton>
        <h1 className="my-4 text-2xl font-bold">{job.title}</h1>
        <div className="relative flex flex-col-reverse gap-6 lg:flex-row">
          <PositionContent job={job} className="flex-1" />
          <PositionDescription
            job={job}
            className="relative top-auto col-span-3 h-fit w-full lg:sticky lg:top-[100px] lg:w-[300px]"
          />
        </div>
      </section>
      <JobApplicationModal />
    </>
  );
}
