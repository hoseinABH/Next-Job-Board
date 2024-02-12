// Common components
// Local components
import CompanyHeader from './_components/company-header';
// Types
import type { Metadata } from 'next';
// Configs
import { landingCompanies } from '@/config/app';
import CompanyTabs from './_components/company-tabs';

interface Props {
  params: {
    id: string;
  };
}

export function generateMetadata({ params }: Props): Metadata {
  const company = landingCompanies.find((company) => company.id === params.id);
  return {
    title: company?.name,
  };
}

export default function Company({ params }: Props) {
  const company = landingCompanies.find((company) => company.id === params.id)!;
  return (
    <section className="py-12 space-y-8">
      <CompanyHeader company={company} />
      <CompanyTabs company={company} />
    </section>
  );
}