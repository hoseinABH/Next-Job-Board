// Local components
import HeroSection from './_components/hero';
import CompaniesSection from './_components/top-companies';
import FeaturedJobs from './_components/featured-jobs';
import FrequentlyAskedQuestions from './_components/frequently-asked-questions';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <FeaturedJobs />
      <FrequentlyAskedQuestions />
    </>
  );
}
