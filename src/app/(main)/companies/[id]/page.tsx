// Local components
// Services
// Types

interface Props {
  params: {
    id: string;
  };
}

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const company = await getCompanyById(params.id);
//   return {
//     title: company.name,
//     description: company.aboutUs,
//   };
// }

export default async function Company({ params }: Props) {
  return (
    <section className="space-y-8 py-12">
      {/* <CompanyHeader company={company} />
      <CompanyTabs company={company} /> */}
    </section>
  );
}
