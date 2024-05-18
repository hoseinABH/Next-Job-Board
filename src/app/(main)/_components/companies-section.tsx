// Common components
import CompanyCard from '@/components/company-card';
// Actions
import { getAllCompanies } from '@/actions/company';
// Configs
import { appData } from '@/config/app';
import * as Routes from '@/config/routes';

export default async function CompaniesSection() {
  const bestCompanies = await getAllCompanies({ page: 1 });
  return (
    <div className="my-12 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4  text-2xl font-bold md:text-3xl">
          استخدام شرکت های برتر در <span className="">{appData.appName}</span>
        </h1>
        <p className="text-muted-foreground">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        </p>
      </div>
      {/* Companies Section */}
      <div className="mt-10 grid w-full grid-cols-1 gap-2 lg:grid-cols-2">
        {bestCompanies.map((company) => (
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
