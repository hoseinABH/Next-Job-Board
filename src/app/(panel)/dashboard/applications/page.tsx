// Local components
import ApplicationsTable from './_components/applications-table';
// Utilities
import { getPaginationDataFromResponse } from '@/lib/utils';
// Actions
import { getCompanyInternshipRequests } from '@/actions/company';

interface SearchParams {
  searchParams: {
    p?: string;
  };
}
export default async function DashboardApplicationsPage({ searchParams }: SearchParams) {
  const response = await getCompanyInternshipRequests({ page: searchParams.p ?? '1' });
  const paginationData = getPaginationDataFromResponse(response);
  return <ApplicationsTable applications={response.data} paginationData={paginationData} />;
}
