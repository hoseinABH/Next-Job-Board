// Common components
import FeaturedJobCard from '@/components/featured-job-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// Actions
import { getAllPositions } from '@/actions/internship';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { Company } from '@/types/company';

interface Props {
  company: Company;
  companyId: string;
}
export default async function CompanyTabs({ company, companyId }: Props) {
  const response = await getAllPositions({ page: '1', companyId });
  return (
    <Tabs defaultValue="about" className="w-full">
      <TabsList className="mx-auto flex max-w-lg">
        <TabsTrigger value="about">معرفی شرکت</TabsTrigger>
        <TabsTrigger value="positions">فرصت‌های کارآموزی</TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <div className="px-4 py-4 sm:px-0">
          <p className="text-md text-center leading-8 sm:text-justify">
            {company.description ?? '-'}
          </p>
        </div>
      </TabsContent>
      <TabsContent value="positions">
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-4">
          {response.data.map((position) => (
            <FeaturedJobCard
              key={position.id}
              position={position}
              href={`${Routes.INTERNSHIPS}/${position.id}`}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
