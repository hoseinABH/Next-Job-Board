'use client';
import { Fragment } from 'react';
// UI Frameworks
import { Briefcase } from 'lucide-react';
// Common components
import { WorkExperienceModal } from '@/components/modal';
import { Button } from '@/components/ui/button';
import WorkExperienceCard from '@/components/work-experience-card';
// Local components
import SectionWrapper from './section-wrapper';
// Types
import type { WorkExperience } from '@/types/user';

interface Props {
  workExperiences: WorkExperience[];
}

export default function WorkExperience({ workExperiences }: Props) {
  function openCreateModal() {
    // dispatch(UserActions.setModalOpen(true, 'workExperience'));
  }
  function handleDeleteWorkExperience(experience: WorkExperience) {
    // dispatch(
    //   UserActions.setDialogData({
    //     title: 'حذف تجربه کاری',
    //     message: `آیا از حذف تجربه کاری خود در ${experience.companyTitle} مطمئن هستید؟`,
    //     model: {
    //       id: String(experience.id),
    //       entity: 'workExperience',
    //     },
    //   }),
    // );
    // dispatch(UserActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <Fragment>
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
            {workExperiences?.map((experience) => (
              <WorkExperienceCard
                key={experience.id}
                experience={experience}
                onDelete={() => handleDeleteWorkExperience(experience)}
              />
            ))}
          </div>
        )}
      </SectionWrapper>
      <WorkExperienceModal />
    </Fragment>
  );
}
