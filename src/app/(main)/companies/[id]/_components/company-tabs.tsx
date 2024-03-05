// Common components
import FeaturedJobCard from '@/components/featured-job-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { landingJobs } from '@/config/app';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
}
export default function CompanyTabs({ company }: Props) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="flex max-w-lg mx-auto">
        <TabsTrigger value="about">معرفی شرکت</TabsTrigger>
        <TabsTrigger value="positions">فرصت‌های کارآموزی</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <div className="py-4 px-4 sm:px-0">
          <p className="text-md leading-8 text-center sm:text-justify">
            {company.aboutUs}
          </p>
        </div>
      </TabsContent>
      <TabsContent value="positions">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
          {landingJobs.map((job) => (
            <FeaturedJobCard
              key={job.id}
              job={job}
              href={`${Routes.JOBS}/${job.id}`}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
