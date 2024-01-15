// Configs
import { appData, landingCompanies } from '@/config/app';

export default function CompaniesSection() {
  return (
    <section className="flex w-full justify-center items-center h-[40vh] flex-col">
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
      <div></div>
    </section>
  );
}
