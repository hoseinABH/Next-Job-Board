'use client';
import { Fragment } from 'react';
// UI Frameworks
import { GraduationCap } from 'lucide-react';
// Common components
import EducationCard from '@/components/education-card';
import { EducationModal } from '@/components/modal';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Types
import type { Education } from '@/types/user';

interface Props {
  educations: Education[];
}

export default function Educations({ educations }: Props) {
  const { openModal } = useUserStore();
  function openCreateModal() {
    openModal(true, 'education');
  }
  function removeEducation(education: Education) {
    openModal(true, 'removeConfirm', {
      title: 'حذف تجربه تحصیلی',
      message: `آیا از حذف تجربه تحصیلی خود در ${education.educationalInstitution} مطمئن هستید؟`,
      id: education.id,
      entityType: 'education',
    });
  }
  return (
    <Fragment>
      <SectionWrapper
        hasShowMore={educations?.length ? educations?.length > 1 : false}
        icon={GraduationCap}
        title="سوابق تحصیلی"
        id="educations"
        actionHandler={openCreateModal}
      >
        {!educations?.length ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن تجربه تحصیلی
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-6">
            {educations?.map((education) => (
              <EducationCard
                key={education.id}
                education={education}
                onDelete={() => removeEducation(education)}
              />
            ))}
          </div>
        )}
      </SectionWrapper>
      <EducationModal />
    </Fragment>
  );
}
