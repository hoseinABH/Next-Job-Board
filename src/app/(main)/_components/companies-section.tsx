// Common components
import CompanyCard from '@/components/company-card';
// Services
import { getCompanies } from '@/db/company';
// Configs
import { appData } from '@/config/app';
import * as Routes from '@/config/routes';

export default async function CompaniesSection() {
  const companies = await getCompanies();
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="text-center">
        <h1 className="text-2xl  md:text-3xl font-bold mb-4">
          استخدام شرکت های برتر در <span className="">{appData.appName}</span>
        </h1>
        <p className="text-muted-foreground">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        </p>
      </div>
      {/* Companies Section */}
      <div className="grid grid-cols-1 w-full gap-2 mt-10 lg:grid-cols-2">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            href={`${Routes.COMPANIES}/${company.id}`}
            visibleOpenPositions
          />
        ))}
      </div>
    </div>
  );
}

// export function SkeletonLoading() {
//   return [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
//     <Skeleton key={item} className="w-full h-[120px]" />
//   ));
// }
