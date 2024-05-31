import Link from 'next/link';
// Common components
import { buttonVariants } from '@/components/ui/button';
import FeaturedJobCard from '@/components/featured-job-card';
// Actions
import { getAllPositions } from '@/actions/internship';
// Configs
import * as Routes from '@/config/routes';

export default async function FeaturedJobs() {
  const featuredPositions = await getAllPositions({ page: '1' });
  return (
    <section className="my-12 flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-xl font-bold text-secondary sm:text-2xl md:text-3xl ">
          تازه‌ترین موقعیت‌های کارآموزی برای شما{' '}
          <span className="absolute ml-2 h-2 w-2 animate-pulse rounded-full bg-primary"></span>
        </h1>
        <p className="text-muted-foreground">
          ارزش خود را بدانید و شغلی را پیدا کنید که شرایط زندگی شما را فراهم کند
        </p>
      </div>
      <div className="mt-10 grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {featuredPositions.map((position) => (
          <FeaturedJobCard
            key={position.id}
            position={position}
            href={`${Routes.INTERNSHIPS}/${position.id}`}
          />
        ))}
      </div>
      <Link
        className={buttonVariants({ variant: 'outline', className: 'mt-14' })}
        href={Routes.INTERNSHIPS}
      >
        مشاهده همه
      </Link>
    </section>
  );
}
