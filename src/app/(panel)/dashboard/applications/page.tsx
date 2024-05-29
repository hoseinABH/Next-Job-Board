// Local components
import ApplicationsTable from './_components/applications-table';
// Actions
import { getCompanyInternshipRequests } from '@/actions/company';

export default async function DashboardApplicationsPage() {
  const response = await getCompanyInternshipRequests({ page: '1' });
  return <ApplicationsTable applications={response.data} />;
}
