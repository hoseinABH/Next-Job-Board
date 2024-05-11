import Link from 'next/link';
// Common components
import FeaturedJobCard from '@/components/featured-job-card';
import { buttonVariants } from '@/components/ui/button';
// Services
import { getFeaturedJobs } from '@/db/positions';
// Configs
import * as Routes from '@/config/routes';

export default async function FeaturedJobs() {
  const featuredJobs = await getFeaturedJobs();
  return (
    <section className="my-12 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl ">
          تازه‌ترین آگهی‌های شغلی برای شما{' '}
          <span className="absolute ml-2 h-2 w-2 animate-pulse rounded-full bg-primary"></span>
        </h1>
        <p className="text-muted-foreground">
          ارزش خود را بدانید و شغلی را پیدا کنید که شرایط زندگی شما را فراهم کند
        </p>
      </div>
      <div className="mt-10 grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {featuredJobs.map((job) => (
          <FeaturedJobCard key={job.title} job={job} href={`${Routes.JOBS}/${job.id}`} />
        ))}
      </div>
      <Link
        className={buttonVariants({ variant: 'outline', className: 'mt-14' })}
        href={Routes.JOBS}
      >
        مشاهده همه
      </Link>
    </section>
  );
}
