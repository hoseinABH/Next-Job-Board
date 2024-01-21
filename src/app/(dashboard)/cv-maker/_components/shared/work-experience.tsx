// UI Frameworks
import { Briefcase } from 'lucide-react';
// Common components
import WorkExperienceCard from '@/components/work-experience-card';
// Local components
import SectionWrapper from './section-wrapper';
// Types
import type { WorkExperience } from '@/types/job-seeker';

const workExperiences: WorkExperience[] = [
  {
    id: 1,
    position: 'توسعه دهنده نرم افزار',
    company: 'حصین',
    location: 'تهران',
    date: {
      from: 'آبان 98',
      to: 'اکنون',
    },
    description:
      'ما روی پروژه های مالی زیادی کار می کنیم. به‌عنوان یک توسعه‌دهنده سطح متوسط، من مسئول توسعه و نگهداری برنامه‌های کاربردی خود به تمیزترین روش هستم.',
  },
];

export default function WorkExperience() {
  return (
    <SectionWrapper
      hasShowMore={workExperiences.length > 1}
      icon={Briefcase}
      title="سوابق شغلی"
      id="work-experience"
    >
      <div className="flex flex-col gap-y-6">
        {workExperiences.map((experience) => (
          <WorkExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </SectionWrapper>
  );
}
