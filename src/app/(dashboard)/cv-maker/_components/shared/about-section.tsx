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

export default function AboutSection() {
  const dispatch = useAppDispatch();
  const personalInfo = useAppSelector(
    (state) => state.resume.resumeData?.personalInfo
  );
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
      </SectionWrapper>
      <AboutMeModal />
    </>
  );
}
