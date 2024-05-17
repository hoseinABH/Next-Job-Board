import ContentSidebar from './_components/content-sidebar';
import SectionWrapper from './_components/shared/section-wrapper';
import { Skeleton } from '@/components/ui/skeleton';

export default function CvMakerLoading() {
  return (
    <div className="py-4 lg:py-12">
      <div className="relative grid grid-cols-12 gap-6">
        <ContentSidebar className="sticky top-[100px] col-span-3 hidden h-max lg:block" />
        <div className="col-span-12 flex flex-col gap-y-4 lg:col-span-9">
          <SectionWrapper id="about-me" title="درباره من" loading>
            <div className="space-y-2">
              <Skeleton className="h-5 w-56" />
              <Skeleton className="h-4 w-44" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-[70%]" />
              </div>
            </div>
          </SectionWrapper>
          <SectionWrapper id="personal-info" title="مشخصات فردی" loading>
            <div className="flex flex-col gap-y-4">
              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} className="flex items-center gap-x-8 sm:gap-x-16">
                  <Skeleton className="h-5 w-full sm:w-24" />
                  <Skeleton className="h-5 w-full  sm:w-28" />
                </div>
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper id="work-experience" title="سوابق شغلی" loading>
            <div className="space-y-3">
              <Skeleton className="h-4 w-[140px]" />
              <Skeleton className="h-3 w-[120px]" />
              <Skeleton className="h-3 w-[140px]" />
              <Skeleton className="h-3 w-[80%]" />
              <Skeleton className="h-3 w-[70%]" />
            </div>
          </SectionWrapper>
          <SectionWrapper id="educations" title="سوابق تحصیلی" loading>
            <div className="space-y-3">
              <Skeleton className="h-4 w-[140px]" />
              <Skeleton className="h-3 w-[120px]" />
              <Skeleton className="h-3 w-[140px]" />
              <Skeleton className="h-3 w-[80%]" />
              <Skeleton className="h-3 w-[70%]" />
            </div>
          </SectionWrapper>
          <SectionWrapper id="skills" title="مهارت ها" loading>
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
              {[1, 2].map((skeleton) => (
                <Skeleton key={skeleton} className="h-14 w-full" />
              ))}
            </div>
          </SectionWrapper>
          <SectionWrapper id="languages" title="زبان ها" loading>
            <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
              {[1, 2].map((skeleton) => (
                <Skeleton key={skeleton} className="h-14 w-full" />
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
