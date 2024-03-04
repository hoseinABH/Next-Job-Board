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
      <div className="grid grid-cols-12 gap-6 relative">
        <ContentSidebar className="col-span-3 sticky top-[100px] h-max hidden lg:block" />
        <ResumeContent className="col-span-12 lg:col-span-9" />
      </div>
    </div>
  );
}
