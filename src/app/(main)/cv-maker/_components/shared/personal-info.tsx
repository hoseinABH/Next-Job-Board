'use client';
import { Fragment, useMemo } from 'react';
// UI Frameworks
import { User } from 'lucide-react';
// Common components
import { PersonalInfoModal } from '@/components/modal';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Constants
import { mapGender, mapMaritalStatus, mapMilitaryService } from '@/constants/user';
// Types
import type { PersonalData } from '@/types/user';

interface Props {
  personalData: PersonalData;
}

export default function PersonalInfo({ personalData }: Props) {
  const { firstName, lastName, maritalStatus, militaryService, gender, city, phoneNumber } =
    personalData;
  const { openModal } = useUserStore();
  function openEditModal() {
    openModal(true, 'personalInfo');
  }
  const { userData, isEmpty } = useMemo(() => {
    const userData = [
      {
        title: 'نام و نام خانوادگی',
        value: `${firstName} ${lastName}`,
      },
      {
        title: 'وضعیت تاهل',
        value: mapMaritalStatus[maritalStatus],
      },
      {
        title: 'جنسیت',
        value: mapGender[gender],
      },
      {
        title: 'وضعیت نظام وظیفه',
        value: mapMilitaryService[militaryService],
      },
      {
        title: 'محل سکونت',
        value: city ?? '-',
      },
      {
        title: 'شماره موبایل',
        value: phoneNumber ?? '-',
      },
    ];
    const isEmpty = !Boolean(
      city || firstName || gender || lastName || maritalStatus || militaryService,
    );
    return {
      userData,
      isEmpty,
    };
  }, [city, firstName, gender, lastName, maritalStatus, militaryService, phoneNumber]);

  return (
    <Fragment>
      <SectionWrapper
        icon={User}
        actionType="edit"
        title="مشخصات فردی"
        id="personal-info"
        hasShowMore={!isEmpty}
        actionHandler={openEditModal}
      >
        {isEmpty ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openEditModal}>
              ثبت اطلاعات فردی
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-4">
            {userData.map((row) => (
              <div key={row.title} className="flex items-center">
                <p className="w-32 text-muted-foreground sm:w-52">{row.title}</p>
                <p>{row.value}</p>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
      <PersonalInfoModal
        defaultValues={{
          firstName,
          lastName,
          maritalStatus,
          gender,
          militaryService,
          city,
          phoneNumber,
        }}
      />
    </Fragment>
  );
}
