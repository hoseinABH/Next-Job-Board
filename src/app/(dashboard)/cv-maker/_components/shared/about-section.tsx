// UI Frameworks
import { ScanFace } from 'lucide-react';
// Common components
import { AboutMeModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function AboutSection() {
  const dispatch = useAppDispatch();
  const { resumeData, loading } = useAppSelector((state) => state.resume);
  const personalInfo = resumeData?.personalInfo;
  function openEditModal() {
    dispatch(ResumeActions.setModalOpen(true, 'aboutMe'));
  }
  return (
    <>
      <SectionWrapper
        id="about-me"
        title="درباره من"
        icon={ScanFace}
        actionType="edit"
        actionHandler={openEditModal}
      >
        {loading.getMyResume ? (
          <div className="flex flex-col items-center sm:items-start space-y-3">
            <Skeleton className="h-6 w-[140px]" />
            <Skeleton className="h-4 w-[120px]" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
          </div>
        ) : (
          <div className="flex flex-col items-center md:items-start">
            <p className="text-2xl mb-0">
              {personalInfo?.firstName} {personalInfo?.lastName}
            </p>
            <p className="flex items-center text-muted-foreground">
              {personalInfo?.jobTitle}
            </p>
            <p className="text-muted-foreground leading-8 text-center md:text-right mt-2">
              {personalInfo?.aboutMe}
            </p>
          </div>
        )}
      </SectionWrapper>
      <AboutMeModal />
    </>
  );
}
