// Local components
import CompanyHeader from './_components/company-header';
import CompanyTabs from './_components/company-tabs';
// Actions
import { getCompanyById } from '@/actions/company';
// Types
import type { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = await getCompanyById(params.id);
  return {
    title: company.title,
    description: company.description,
  };
}

export default async function Company({ params }: Props) {
  const company = await getCompanyById(params.id);
  return (
    <section className="space-y-8 py-12">
      <CompanyHeader company={company} />
      <CompanyTabs companyId={params.id} company={company} />
    </section>
  );
}
