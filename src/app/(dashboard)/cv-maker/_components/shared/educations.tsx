// UI Frameworks
import { GraduationCap } from 'lucide-react';
// Common components
import EducationCard from '@/components/education-card';
import { EducationModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { Education } from '@/types/resume';

export default function Educations() {
  const dispatch = useAppDispatch();
  const educations = useAppSelector(
    (state) => state.resume.resumeData?.education
  );
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'education'));
  }
  function handleDeleteEducation(education: Education) {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'education',
        title: 'حذف تجربه تحصیلی',
        message: `آیا از حذف تجربه تحصیلی خود در ${education.institution} مطمئن هستید؟`,
        model: {
          id: education.educationId,
          entity: 'education',
        },
      })
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        hasShowMore={educations?.length ? educations?.length > 1 : false}
        icon={GraduationCap}
        title="سوابق تحصیلی"
        id="educations"
        actionHandler={openCreateModal}
      >
        <div className="flex flex-col gap-y-6">
          {educations?.map((education) => (
            <EducationCard
              key={education.educationId}
              education={education}
              onDelete={() => handleDeleteEducation(education)}
            />
          ))}
        </div>
      </SectionWrapper>
      <EducationModal />
    </>
  );
}
