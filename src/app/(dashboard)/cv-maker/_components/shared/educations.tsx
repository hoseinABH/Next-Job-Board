// UI Frameworks
import { GraduationCap } from 'lucide-react';
// Common components
import EducationCard from '@/components/education-card';
import { EducationModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { Education } from '@/types/resume';

const educations: Education[] = [
  {
    id: 1,
    field: 'کامپیوتر و فناوری اطلاعات - مهندسی نرم افزار',
    school: 'هاروارد تهران جنوب',
    location: 'تهران',
    level: 'bachelor',
    date: {
      from: '95',
      to: '99',
    },
  },
];

export default function Educations() {
  const dispatch = useAppDispatch();
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'education'));
  }
  function handleDeleteEducation() {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'education',
        title: 'حذف تجربه تحصیلی',
        message:
          'آیا از حذف تجربه تحصیلی خود در دانشگاه هاروارد-تهران جنوب مطمئن هستید؟',
        model: {},
      })
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        hasShowMore={educations.length > 1}
        icon={GraduationCap}
        title="سوابق تحصیلی"
        id="educations"
        actionHandler={openCreateModal}
      >
        <div className="flex flex-col gap-y-6">
          {educations.map((education) => (
            <EducationCard
              key={education.id}
              education={education}
              onDelete={handleDeleteEducation}
            />
          ))}
        </div>
      </SectionWrapper>
      <EducationModal />
    </>
  );
}
