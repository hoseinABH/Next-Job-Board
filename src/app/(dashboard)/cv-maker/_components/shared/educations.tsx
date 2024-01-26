// UI Frameworks
import { GraduationCap } from 'lucide-react';
// Common components
import EducationCard from '@/components/education-card';
// Local components
import SectionWrapper from './section-wrapper';
// Types
import type { Education } from '@/types/resume';

const educations: Education[] = [
  {
    id: 1,
    field: 'کامپیوتر و فناوری اطلاعات - مهندسی نرم افزار',
    school: 'هاروارد تهران جنوب',
    location: 'تهران',
    level: 'bachelor',
    date: {
      from: '95',
      to: '99',
    },
  },
];

export default function Educations() {
  return (
    <SectionWrapper
      hasShowMore={educations.length > 1}
      icon={GraduationCap}
      title="سوابق تحصیلی"
      id="educations"
    >
      <div className="flex flex-col gap-y-6">
        {educations.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </SectionWrapper>
  );
}
