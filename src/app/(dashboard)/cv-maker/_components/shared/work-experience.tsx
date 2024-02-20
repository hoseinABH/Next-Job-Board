// UI Frameworks
import { Briefcase } from 'lucide-react';
// Common components
import WorkExperienceCard from '@/components/work-experience-card';
import { WorkExperienceModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { WorkExperience } from '@/types/resume';

const workExperiences: WorkExperience[] = [
  {
    id: '1',
    position: 'توسعه دهنده نرم افزار',
    company: 'حصین',
    location: 'تهران',
    date: {
      from: 'آبان 98',
      to: 'اکنون',
    },
    description:
      'ما روی پروژه های مالی زیادی کار می کنیم. به‌عنوان یک توسعه‌دهنده سطح متوسط، من مسئول توسعه و نگهداری برنامه‌های کاربردی خود به تمیزترین روش هستم.',
  },
];

export default function WorkExperience() {
  const dispatch = useAppDispatch();
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'workExperience'));
  }
  function handleDeleteWorkExperience(experience: WorkExperience) {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'workExperience',
        title: 'حذف تجربه کاری',
        message: `آیا از حذف تجربه کاری خود در ${experience.company} مطمئن هستید؟`,
        model: {
          id: experience.id,
          entity: 'workExperience',
        },
      })
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        hasShowMore={workExperiences.length > 1}
        icon={Briefcase}
        title="سوابق شغلی"
        id="work-experience"
        actionHandler={openCreateModal}
      >
        <div className="flex flex-col gap-y-6">
          {workExperiences.map((experience) => (
            <WorkExperienceCard
              key={experience.id}
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
