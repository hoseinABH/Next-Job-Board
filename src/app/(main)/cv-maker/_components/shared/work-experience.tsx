// UI Frameworks
import { Briefcase } from 'lucide-react';
// Common components
import WorkExperienceCard from '@/components/work-experience-card';
import { WorkExperienceModal } from '@/components/modal';
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
import type { Experience } from '@/types/user';

export default function WorkExperience() {
  const dispatch = useAppDispatch();
  const { userResume, loading } = useAppSelector((state) => state.resume);
  const workExperiences = userResume?.workExperience;
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'workExperience'));
  }
  function handleDeleteWorkExperience(experience: Experience) {
    dispatch(
      ResumeActions.setDialogData({
        title: 'حذف تجربه کاری',
        message: `آیا از حذف تجربه کاری خود در ${experience.companyName} مطمئن هستید؟`,
        model: {
          id: experience.experienceId,
          entity: 'workExperience',
        },
      }),
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        hasShowMore={workExperiences?.length ? workExperiences.length > 1 : false}
        icon={Briefcase}
        title="سوابق شغلی"
        id="work-experience"
        actionHandler={openCreateModal}
      >
        {!workExperiences?.length ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن تجربه شغلی
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6">
            {loading.getUserResume ? (
              <>
                {[1, 2].map((item) => (
                  <SkeletonLoading key={item} />
                ))}
              </>
            ) : (
              <>
                {workExperiences?.map((experience) => (
                  <WorkExperienceCard
                    key={experience.companyName}
                    experience={experience}
                    onDelete={() => handleDeleteWorkExperience(experience)}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </SectionWrapper>
      <WorkExperienceModal />
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-4 w-[140px]" />
      <Skeleton className="h-3 w-[120px]" />
      <Skeleton className="h-3 w-[140px]" />
      <Skeleton className="h-3 w-[80%]" />
      <Skeleton className="h-3 w-[70%]" />
    </div>
  );
}
