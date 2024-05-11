// Common components
import ContentSidebar from './_components/content-sidebar';
import ResumeContent from './_components/resume-content';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'رزومه من',
};

export default function CvMaker() {
  return (
    <div className="py-4 lg:py-12">
      <div className="relative grid grid-cols-12 gap-6">
        <ContentSidebar className="sticky top-[100px] col-span-3 hidden h-max lg:block" />
        <ResumeContent className="col-span-12 lg:col-span-9" />
      </div>
    </div>
  );
}
