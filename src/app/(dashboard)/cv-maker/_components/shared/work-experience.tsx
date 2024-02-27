// UI Frameworks
import { Briefcase } from 'lucide-react';
// Common components
import WorkExperienceCard from '@/components/work-experience-card';
import { WorkExperienceModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { Experience } from '@/types/resume';

export default function WorkExperience() {
  const dispatch = useAppDispatch();
  const workExperiences = useAppSelector(
    (state) => state.resume.resumeData?.workExperience
  );
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'workExperience'));
  }
  function handleDeleteWorkExperience(experience: Experience) {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'workExperience',
        title: 'حذف تجربه کاری',
        message: `آیا از حذف تجربه کاری خود در ${experience.companyName} مطمئن هستید؟`,
        model: {
          id: experience.companyName,
          entity: 'workExperience',
        },
      })
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        hasShowMore={
          workExperiences?.length ? workExperiences.length > 1 : false
        }
        icon={Briefcase}
        title="سوابق شغلی"
        id="work-experience"
        actionHandler={openCreateModal}
      >
        <div className="flex flex-col gap-y-6">
          {workExperiences?.map((experience) => (
            <WorkExperienceCard
              key={experience.companyName}
              experience={experience}
              onDelete={() => handleDeleteWorkExperience(experience)}
            />
          ))}
        </div>
      </SectionWrapper>
      <WorkExperienceModal />
    </>
  );
}
