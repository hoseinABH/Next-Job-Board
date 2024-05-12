import { useMemo } from 'react';
// UI Frameworks
import { User } from 'lucide-react';
// Common components
import { PersonalInfoModal } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Utilities
import { persianDate } from '@/lib/date';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/User/user.actions';
// Constants
import { mapGenderTitle, mapMaritalStatus, mapMilitaryStatus } from '@/constants';

export default function PersonalInfo() {
  const dispatch = useAppDispatch();
  const { userResume, loading } = useAppSelector((state) => state.resume);
  const personalInfo = userResume?.personalInfo;
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
        value: personalInfo?.birthDate ? persianDate(personalInfo?.birthDate) : '',
      },
      {
        title: 'شماره تلفن',
        value: personalInfo?.phone,
      },
    ],
    [personalInfo],
  );
  return (
    <>
      <SectionWrapper
        icon={User}
        actionType="edit"
        title="مشخصات فردی"
        id="personal-info"
        hasShowMore={!!personalInfo}
        actionHandler={openEditModal}
      >
        {!personalInfo?.firstName ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openEditModal}>
              ثبت اطلاعات فردی
            </Button>
          </div>
        ) : (
          <>
            {loading.getUserResume ? (
              <SkeletonLoading />
            ) : (
              <div className="flex flex-col gap-y-4">
                {infoRows.map((info) => (
                  <div key={info.title} className="flex items-center">
                    <p className="w-32 text-muted-foreground sm:w-52">{info.title}</p>
                    <p>{info.value}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </SectionWrapper>
      <PersonalInfoModal />
    </>
  );
}

function SkeletonLoading() {
  return (
    <div className="flex flex-col gap-y-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <div key={item} className="flex items-center">
          <Skeleton className="ml-16 h-4 w-32" />
          <Skeleton className="h-4 w-60" />
        </div>
      ))}
    </div>
  );
}
