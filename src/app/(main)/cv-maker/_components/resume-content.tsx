'use client';
import { useEffect } from 'react';
// Common components
import { ConfirmDeleteDialog } from '@/components/modal';
// Shared Components
import AboutSection from './shared/about-section';
import Educations from './shared/educations';
import Languages from './shared/languages';
import PersonalInfo from './shared/personal-info';
import Skills from './shared/skills';
import WorkExperience from './shared/work-experience';
// Utilities
import { cn } from '@/lib/utils';
// Actions
import ResumeActions from '@/store/User/user.actions';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';

interface Props {
  className?: string;
}
export default function ResumeContent({ className }: Props) {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.common);
  const { dialogData, loading } = useAppSelector((state) => state.user);

  function submitDeleteAction() {
    dispatch(ResumeActions.removeField());
  }
  useEffect(() => {
    dispatch(ResumeActions.prepareUserResume(null, { sagas: true }));
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
        title={dialogData?.title}
        onSubmit={submitDeleteAction}
        loading={loading.removeEntity}
      >
        {dialogData?.message ?? ''}
      </ConfirmDeleteDialog>
    </>
  );
}
