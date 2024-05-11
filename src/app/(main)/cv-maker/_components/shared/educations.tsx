// UI Frameworks
import { GraduationCap } from 'lucide-react';
// Common components
import EducationCard from '@/components/education-card';
import { EducationModal } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/User/user.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { Education } from '@/types/user';

export default function Educations() {
  const dispatch = useAppDispatch();
  const { resumeData, loading } = useAppSelector((state) => state.resume);
  const educations = resumeData?.education;
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'education'));
  }
  function handleDeleteEducation(education: Education) {
    dispatch(
      ResumeActions.setDialogData({
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
        {!educations?.length ? (
          <div className="flex items-center justify-center h-28">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن تجربه تحصیلی
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6">
            {loading.getMyResume ? (
              <>
                {[1, 2].map((item) => (
                  <SkeletonLoading key={item} />
                ))}
              </>
            ) : (
              <>
                {educations?.map((education) => (
                  <EducationCard
                    key={education.educationId}
                    education={education}
                    onDelete={() => handleDeleteEducation(education)}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </SectionWrapper>
      <EducationModal />
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[140px]" />
      <Skeleton className="h-3 w-[120px]" />
      <Skeleton className="h-3 w-[140px]" />
    </div>
  );
}
