// Common components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Configs
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
}
export default async function CompanyTabs({ company }: Props) {
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="mx-auto flex max-w-lg">
        <TabsTrigger value="about">معرفی شرکت</TabsTrigger>
        <TabsTrigger value="positions">فرصت‌های کارآموزی</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <div className="px-4 py-4 sm:px-0">
          <p className="text-md text-center leading-8 sm:text-justify">{company.aboutUs}</p>
        </div>
      </TabsContent>
      <TabsContent value="positions">
        {/* <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
          {companyPositions.map((job) => (
            <FeaturedJobCard key={job.id} job={job} href={`${Routes.JOBS}/${job.id}`} />
          ))}
        </div> */}
      </TabsContent>
    </Tabs>
  );
}
