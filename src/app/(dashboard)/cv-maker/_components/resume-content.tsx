'use client';
// Utilities
import { cn } from '@/lib/utils';
// Shared Components
import AboutSection from './shared/about-section';
import PersonalInfo from './shared/personal-info';
import WorkExperience from './shared/work-experience';
import Educations from './shared/educations';
import Skills from './shared/skills';
import Languages from './shared/languages';

interface Props {
  className?: string;
}
export default function ResumeContent({ className }: Props) {
  return (
    <div className={cn('flex flex-col gap-y-4', className)}>
      <AboutSection />
      <PersonalInfo />
      <WorkExperience />
      <Educations />
      <Skills />
      <Languages />
    </div>
  );
}
