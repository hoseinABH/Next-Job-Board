// Local components
import Statistics from './_components/statistics';
// Actions
import { getCompanyDashboard } from '@/actions/company';

export default async function DashboardPage() {
  const data = await getCompanyDashboard();
  return <Statistics dashboardData={data} />;
}
