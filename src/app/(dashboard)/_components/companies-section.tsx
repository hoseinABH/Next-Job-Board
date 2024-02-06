// Common components
import TopCompanyCard from '@/components/top-company-card';
// Configs
import { appData, landingCompanies } from '@/config/app';

export default function CompaniesSection() {
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
        {landingCompanies.map((company) => (
          <TopCompanyCard key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
}
