// Common components
import CompanyCard from '@/components/company-card';
// Configs
import { appData, landingCompanies } from '@/config/app';

export default function CompaniesSection() {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          استخدام شرکت های برتر در{' '}
          <span className="text-primary">{appData.appName}</span>
        </h1>
        <p className="text-muted-foreground">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </p>
      </div>
      {/* Companies Section */}
      <div className="grid grid-cols-1 w-full gap-8 mt-10 lg:grid-cols-2">
        {landingCompanies.map((company) => (
          <CompanyCard key={company.name} company={company} />
        ))}
      </div>
    </div>
  );
}
