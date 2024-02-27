'use client';
import { useEffect } from 'react';
// Common components
import { ConfirmDeleteDialog } from '@/components/modal';
// Shared Components
import AboutSection from './shared/about-section';
import PersonalInfo from './shared/personal-info';
import WorkExperience from './shared/work-experience';
import Educations from './shared/educations';
import Skills from './shared/skills';
import Languages from './shared/languages';
// Utilities
import { cn } from '@/lib/utils';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';

interface Props {
  className?: string;
}
export default function ResumeContent({ className }: Props) {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.common);
  const { deleteAlertData, loading } = useAppSelector((state) => state.resume);

  function submitDeleteAction(id: string) {
    dispatch(ResumeActions.removeField(id));
  }
  useEffect(() => {
    dispatch(ResumeActions.fillResumeData(null, { sagas: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={cn('flex flex-col gap-y-4', className)}>
        <AboutSection />
        <PersonalInfo />
        <WorkExperience />
        <Educations />
        <Skills />
        <Languages />
      </div>
      <ConfirmDeleteDialog
        open={modals.confirmDelete}
        title={deleteAlertData?.title}
        onSubmit={() => submitDeleteAction(deleteAlertData?.model.id!)}
        loading={loading.removeEntity}
      >
        {deleteAlertData?.message ?? ''}
      </ConfirmDeleteDialog>
    </>
  );
}
