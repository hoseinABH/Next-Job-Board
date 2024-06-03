// Common components
import TopCompanyCard from '@/components/top-company-card';
import LandingSection from '@/components/landing-section';
// Actions
import { getAllCompanies } from '@/actions/company';
// Configs
import { appData } from '@/config/app';
import * as Routes from '@/config/routes';

export default async function TopCompanies() {
  const bestCompanies = await getAllCompanies({ page: '1' });
  return (
    <LandingSection
      title={`استخدام شرکت های برتر در ${appData.appName}`}
      subTitle="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده"
    >
      <div className="mt-10 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {bestCompanies.map((company) => (
          <TopCompanyCard
            key={company.id}
            company={company}
            href={`${Routes.COMPANIES}/${company.id}`}
          />
        ))}
      </div>
    </LandingSection>
  );
}
