'use client';
// Common components
import BackButton from '@/components/back-button';
import { JobApplicationModal } from '@/components/modal/jobs/job-application';
// Local components
import PositionContent from './_components/position-content';
import PositionDescription from './_components/position-description';
// Actions
import JobsActions from '@/store/Jobs/jobs.actions';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Configs
import { landingJobs } from '@/config/app';

interface Props {
  params: {
    id: string;
  };
}

export default function Job({ params }: Props) {
  const dispatch = useAppDispatch();
  const job = landingJobs.find((job) => job.id === params.id)!;
  function applicationRequest() {
    dispatch(JobsActions.setModalOpen(true, 'jobApplication'));
  }
  return (
    <>
      <section className="py-12">
        <BackButton>بازگشت به موقعیت‌ها</BackButton>
        <h1 className="text-2xl font-bold my-4">{job?.title}</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-6 relative">
          <PositionContent job={job} className="flex-1" />
          <PositionDescription
            job={job}
            className="col-span-3 relative top-auto lg:sticky lg:top-[100px] w-full lg:w-[300px] h-fit"
            onRequestApplication={applicationRequest}
          />
        </div>
      </section>
      <JobApplicationModal />
    </>
  );
}
