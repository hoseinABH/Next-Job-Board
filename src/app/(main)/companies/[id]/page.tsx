// Local components
import CompanyHeader from './_components/company-header';
import CompanyTabs from './_components/company-tabs';
// Types
import type { Company } from '@/types/company';

interface Props {
  params: {
    id: string;
  };
}

export default async function Company({ params }: Props) {
  const data = await fetch(
    `${process.env.API_URL}/api/v1/company/${params.id}`,
    {
      cache: 'no-cache',
    }
  );
  const response = await data.json();
  const company: Company = response.data;
  return (
    <section className="py-12 space-y-8">
      <CompanyHeader company={company} />
      <CompanyTabs company={company} />
    </section>
  );
}
