import { useMemo } from 'react';
// UI Frameworks
import { User } from 'lucide-react';
// Common components
import { PersonalInfoModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Utilities
import { persianDate } from '@/lib/date';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Constants
import {
  mapGenderTitle,
  mapMaritalStatus,
  mapMilitaryStatus,
} from '@/constants';

export default function PersonalInfo() {
  const dispatch = useAppDispatch();
  const personalInfo = useAppSelector(
    (state) => state.resume.resumeData?.personalInfo
  );
  function openEditModal() {
    dispatch(ResumeActions.setModalOpen(true, 'personalInfo'));
  }
  const infoRows = useMemo(
    () => [
      {
        title: 'نام و نام خانوادگی',
        value: `${personalInfo?.firstName} ${personalInfo?.lastName}`,
      },
      {
        title: 'وضعیت تاهل',
        value: mapMaritalStatus[personalInfo?.maritalStatus!],
      },
      {
        title: 'جنسیت',
        value: mapGenderTitle[personalInfo?.gender!],
      },
      {
        title: 'وضعیت نظام وظیفه',
        value: mapMilitaryStatus[personalInfo?.militaryStatus!],
      },
      {
        title: 'محل سکونت',
        value: personalInfo?.address,
      },
      {
        title: 'تاریخ تولد',
        value: personalInfo?.birthDate
          ? persianDate(personalInfo?.birthDate)
          : '',
      },
      {
        title: 'شماره تلفن',
        value: personalInfo?.phone,
      },
    ],
    [personalInfo]
  );
  return (
    <>
      <SectionWrapper
        icon={User}
        actionType="edit"
        title="مشخصات فردی"
        id="personal-info"
        hasShowMore
        actionHandler={openEditModal}
      >
        <div className="flex flex-col gap-y-4">
          {infoRows.map((info) => (
            <div key={info.title} className="flex items-center">
              <p className="text-muted-foreground w-32 sm:w-52">{info.title}</p>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <PersonalInfoModal />
    </>
  );
}
