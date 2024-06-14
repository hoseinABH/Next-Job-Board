// Common components
import FeaturedJobCard from '@/components/featured-job-card';
import LandingSection from '@/components/landing-section';
// Actions
import { getAllPositions } from '@/actions/internship';
// Configs
import * as Routes from '@/config/routes';

export default async function FeaturedJobs() {
  const featuredPositions = await getAllPositions({ page: '1' });
  return (
    <LandingSection
      subTitle="ارزش خود را بدانید و شغلی را پیدا کنید که شرایط زندگی شما را فراهم کند"
      title="تازه‌ترین موقعیت‌های کارآموزی برای شما"
    >
      <div className="mt-10 grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {featuredPositions.map((position) => (
          <FeaturedJobCard
            key={position.id}
            position={position}
            href={`${Routes.INTERNSHIPS}/${position.id}`}
          />
        ))}
      </div>
    </LandingSection>
  );
}
