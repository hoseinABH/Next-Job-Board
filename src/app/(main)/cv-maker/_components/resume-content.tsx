'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
// Configs
import * as Routes from '@/config/routes';
interface Props {
  className?: string;
}
export default function ResumeContent({ className }: Props) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { modals } = useAppSelector((state) => state.common);
  const { isLoggedIn } = useAppSelector((state) => state.user);
  const { dialogData, loading } = useAppSelector((state) => state.resume);

  function submitDeleteAction() {
    dispatch(ResumeActions.removeField());
  }
  useEffect(() => {
    if (!isLoggedIn) {
      router.push(Routes.LOGIN);
      return;
    }
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
        title={dialogData?.title}
        onSubmit={submitDeleteAction}
        loading={loading.removeEntity}
      >
        {dialogData?.message ?? ''}
      </ConfirmDeleteDialog>
    </>
  );
}
