// Common components
import TopCompanyCard from '@/components/top-company-card';
// Actions
import { getAllCompanies } from '@/actions/company';
// Configs
import { appData } from '@/config/app';
import * as Routes from '@/config/routes';

export default async function TopCompanies() {
  const bestCompanies = await getAllCompanies({ page: '1' });
  return (
    <div className="container flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-secondary md:text-3xl">
          استخدام شرکت های برتر در {appData.appName}
        </h1>
        <p className="text-muted-foreground">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        </p>
      </div>
      <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {bestCompanies.map((company) => (
          <TopCompanyCard
            key={company.id}
            company={company}
            href={`${Routes.COMPANIES}/${company.id}`}
          />
        ))}
      </div>
    </div>
  );
}
