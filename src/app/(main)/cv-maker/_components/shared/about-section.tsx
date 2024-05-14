// UI Frameworks
import { ScanFace } from 'lucide-react';
// Common components
import { AboutMeModal } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/User/user.actions';

export default function AboutSection() {
  const dispatch = useAppDispatch();
  const { userResume, loading } = useAppSelector((state) => state.resume);
  const personalInfo = userResume?.personalInfo;
  function openEditModal() {
    dispatch(ResumeActions.setModalOpen(true, 'aboutMe'));
  }
  const isEmpty = !Boolean(personalInfo?.aboutMe && personalInfo?.jobTitle);
  return (
    <>
      <SectionWrapper
        id="about-me"
        title="درباره من"
        icon={ScanFace}
        actionType="edit"
        actionHandler={openEditModal}
      >
        {isEmpty ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openEditModal}>
              ثبت درباره من
            </Button>
          </div>
        ) : (
          <>
            {loading.getUserResume ? (
              <SkeletonLoading />
            ) : (
              <div className="flex flex-col items-center md:items-start">
                <p className="mb-0 text-2xl">
                  {personalInfo?.firstName} {personalInfo?.lastName}
                </p>
                <p className="flex items-center text-muted-foreground">{personalInfo?.jobTitle}</p>
                <p className="mt-2 text-center text-sm leading-6 text-muted-foreground md:text-right">
                  {personalInfo?.aboutMe}
                </p>
              </div>
            )}
          </>
        )}
      </SectionWrapper>
      <AboutMeModal />
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="flex flex-col items-center space-y-3 sm:items-start">
      <Skeleton className="h-6 w-[140px]" />
      <Skeleton className="h-4 w-[120px]" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}
