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
        <h1 className="text-2xl font-bold my-4">{job.title}</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-6 relative">
          <PositionContent job={job} className="flex-1" />
          <PositionDescription
            job={job}
            className="col-span-3 relative top-auto lg:sticky lg:top-[100px] w-full lg:w-[300px] h-fit"
          />
        </div>
      </section>
      <JobApplicationModal />
    </>
  );
}
