// Local components
import ApplicationsTable from './_components/applications-table';
// Data
import { applications } from './data';

export default function DashboardApplicationsPage() {
  return (
    <>
      <ApplicationsTable applications={applications} />
    </>
  );
}
