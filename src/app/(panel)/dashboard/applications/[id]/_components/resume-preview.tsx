'use client';
// Common components
import BackButton from '@/components/back-button';
import EducationCard from '@/components/education-card';
import SkillBox from '@/components/skill-box';
import WorkExperienceCard from '@/components/work-experience-card';
// Local components
import Heading from './heading';
import ResumeRow from './resume-row';
// Utilities
import { persianDate } from '@/lib/date';
// Constants
import {
  mapGender,
  mapMaritalStatus,
  mapMilitaryService,
  mapSeniorityLevel,
} from '@/constants/user';
// Types
import type { GetUserResumeResponse } from '@/types/company';

interface Props {
  resume: GetUserResumeResponse;
}

export default function ResumePreview({ resume }: Props) {
  const fullName = `${resume.userProfile.firstName} ${resume.userProfile.lastName}`;
  const personalValues = [
    {
      label: 'محل سکونت',
      value: resume.userProfile.city,
    },
    {
      label: 'تاریخ تولد',
      value: persianDate(resume.userProfile.birthDate),
    },
    {
      label: 'شماره موبایل',
      value: resume.phoneNumber,
    },
    {
      label: 'وضعیت تاهل',
      value: mapMaritalStatus[resume.userProfile.maritalStatus],
    },
    {
      label: 'جنسیت',
      value: mapGender[resume.userProfile.gender],
    },
    {
      label: 'وضیعت نظام وظیفه',
      value: mapMilitaryService[resume.userProfile.militaryService],
    },
  ];
  return (
    <div className="rounded-md bg-card p-2 sm:p-6">
      <div className="flex w-full items-baseline justify-between">
        <h1 className="text-2xl font-bold">{fullName}</h1>
        <BackButton>بازگشت به درخواست ها</BackButton>
      </div>
      <p className="my-4 text-justify text-muted-foreground">{resume.userProfile.aboutMe}</p>
      <div className="space-y-8 py-8">
        <div className="space-y-8">
          <Heading>اطلاعات شخصی</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {personalValues.map((item) => (
              <ResumeRow label={item.label} key={item.label}>
                {item.value}
              </ResumeRow>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>سوابق شغلی</Heading>
          <div className="space-y-6">
            {resume.userProfile.workExperiences.map((experience) => (
              <WorkExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>سوابق تحصیلی</Heading>
          <div className="space-y-6">
            {resume.userProfile.educations.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>مهارت‌ها</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resume.userProfile.skills.map((skill) => (
              <SkillBox key={skill.id} level={mapSeniorityLevel[skill.level]}>
                {skill.title}
              </SkillBox>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <Heading>زبان‌ها</Heading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resume.userProfile.languages.map((lang) => (
              <SkillBox key={lang.id} level={mapSeniorityLevel[lang.level]}>
                {lang.title}
              </SkillBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
