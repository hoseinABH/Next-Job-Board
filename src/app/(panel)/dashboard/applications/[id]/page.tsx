// Local components
import ResumePreview from './_components/resume-preview';
// Actions
import { getUserResume } from '@/actions/company';
// Types
import type { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resume = await getUserResume(params.id);
  const fullName = `${resume.userProfile.firstName} ${resume.userProfile.lastName}`;
  return {
    title: fullName,
    description: resume.userProfile.aboutMe,
  };
}
export default async function ApplicationPage({ params }: Props) {
  const resume = await getUserResume(params.id);
  return <ResumePreview resume={resume} />;
}
