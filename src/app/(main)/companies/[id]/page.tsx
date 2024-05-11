// Local components
import CompanyHeader from './_components/company-header';
import CompanyTabs from './_components/company-tabs';
// Services
import { getCompanyById } from '@/db/company';
// Types
import type { Metadata } from 'next';
import type { Company } from '@/types/company';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = await getCompanyById(params.id);
  return {
    title: company.name,
    description: company.aboutUs,
  };
}

export default async function Company({ params }: Props) {
  const company = await getCompanyById(params.id);
  return (
    <section className="space-y-8 py-12">
      <CompanyHeader company={company} />
      <CompanyTabs company={company} />
    </section>
  );
}
