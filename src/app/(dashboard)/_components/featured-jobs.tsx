"use client"
// Common components
import FeaturedJobCard from '@/components/featured-job-card';
import { Button } from '@/components/ui/button';
// Hooks
import { useRouter } from 'next/navigation';
// Configs
import { landingJobs } from '@/config/app';
import * as Routes from '@/config/routes';

export default function FeaturedJobs() {
  const router = useRouter()

  function navigateToJobs() {
      router.push(Routes.JOBS)
  }
  return (
    <section className="flex flex-col justify-center items-center my-12">
      <div className="text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 ">
          تازه‌ترین آگهی‌های شغلی برای شما{' '}
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse ml-2 absolute"></span>
        </h1>
        <p className="text-muted-foreground">
          ارزش خود را بدانید و شغلی را پیدا کنید که شرایط زندگی شما را فراهم کند
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-8 mt-10">
        {landingJobs.map((job) => (
          <FeaturedJobCard key={job.title} job={job} />
        ))}
      </div>
      <Button variant="outline" className="mt-14" onClick={navigateToJobs}>
        مشاهده همه
      </Button>
    </section>
  );
}
