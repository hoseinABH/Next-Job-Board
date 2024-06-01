// Local components
import HeroSection from './_components/hero';
import CompaniesSection from './_components/top-companies';
import FeaturedJobs from './_components/featured-jobs';
import FrequentlyAskedQuestions from './_components/frequently-asked-questions';
import Roadmap from './_components/roadmap';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="space-y-20 py-20">
        <CompaniesSection />
        <Roadmap />
        <FeaturedJobs />
        <FrequentlyAskedQuestions />
      </div>
    </>
  );
}
