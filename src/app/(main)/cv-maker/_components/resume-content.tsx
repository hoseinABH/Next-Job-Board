// Common components
import { ConfirmDeleteDialog } from '@/components/modal';
// Local Components
import AboutSection from './shared/about-section';
import Educations from './shared/educations';
import Languages from './shared/languages';
import PersonalInfo from './shared/personal-info';
import Skills from './shared/skills';
import WorkExperience from './shared/work-experience';
// Utilities
import { cn } from '@/lib/utils';
import { normalizeProfileData } from './utils';
// Actions
import { getUserProfile } from '@/actions/user';

interface Props {
  className?: string;
}

export default async function ResumeContent({ className }: Props) {
  const userProfile = await getUserProfile();
  const { aboutData, personalData, workExperiences, educations, skills, languages } =
    normalizeProfileData(userProfile)!;
  return (
    <div className={cn('flex flex-col gap-y-4', className)}>
      <AboutSection aboutData={aboutData} />
      <PersonalInfo personalData={personalData} />
      <WorkExperience workExperiences={workExperiences} />
      <Educations educations={educations} />
      <Skills skills={skills} />
      <Languages languages={languages} />
      <ConfirmDeleteDialog />
    </div>
  );
}
