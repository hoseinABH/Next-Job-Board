'use client';
// Common components
import BackButton from '@/components/back-button';
import EducationCard from '@/components/education-card';
import SkillBox from '@/components/skill-box';
import WorkExperienceCard from '@/components/work-experience-card';
import { Briefcase, GraduationCap, LanguagesIcon, ScanFace, ShieldCheck, User } from 'lucide-react';
// Local components
import InfoCard from './info-card';
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
      <BackButton>بازگشت به درخواست ها</BackButton>
      <div className="space-y-8 py-8">
        <InfoCard title="درباره من" icon={ScanFace}>
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-0 text-2xl">{fullName ?? '-'}</p>
            <p className="flex items-center text-muted-foreground">{resume.userProfile.title}</p>
            <p className="mt-2 text-center text-sm leading-6 text-muted-foreground md:text-right">
              {resume.userProfile.aboutMe}
            </p>
          </div>
        </InfoCard>
        <InfoCard icon={User} title="مشخصات فردی">
          <div className="flex flex-col gap-y-4">
            {personalValues.map((row) => (
              <div key={row.label} className="flex items-center">
                <p className="w-32 text-muted-foreground sm:w-52">{row.label}</p>
                <p>{row.value}</p>
              </div>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          visible={Boolean(resume.userProfile.workExperiences.length)}
          icon={Briefcase}
          title="سوابق شغلی"
        >
          <div className="flex flex-col gap-y-6">
            {resume.userProfile.workExperiences?.map((experience) => (
              <WorkExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </InfoCard>
        <InfoCard
          visible={Boolean(resume.userProfile.educations.length)}
          icon={GraduationCap}
          title="سوابق تحصیلی"
        >
          <div className="flex flex-col gap-y-6">
            {resume.userProfile.educations?.map((education) => (
              <EducationCard key={education.id} education={education} />
            ))}
          </div>
        </InfoCard>
        <InfoCard
          visible={Boolean(resume.userProfile.skills.length)}
          icon={ShieldCheck}
          title="مهارت ها"
        >
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {resume.userProfile.skills?.map((skill) => (
              <SkillBox key={skill.id} level={mapSeniorityLevel[skill.level]}>
                {skill.title}
              </SkillBox>
            ))}
          </div>
        </InfoCard>
        <InfoCard
          visible={Boolean(resume.userProfile.languages.length)}
          icon={LanguagesIcon}
          title="زبان ها"
        >
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {resume.userProfile.languages?.map((lang) => (
              <SkillBox key={lang.id} level={mapSeniorityLevel[lang.level]}>
                {lang.title}
              </SkillBox>
            ))}
          </div>
        </InfoCard>
      </div>
    </div>
  );
}
