import { Fragment } from 'react';
// Common components
import ResumePreview from '@/components/modal/panel/resume-preview';
// Local components
import ApplicationsTable from './_components/applications-table';
// Actions
import { getCompanyInternshipRequests } from '@/actions/company';

export default async function DashboardApplicationsPage() {
  const response = await getCompanyInternshipRequests({ page: 1 });
  return (
    <Fragment>
      <ApplicationsTable applications={response.data} />
      <ResumePreview />
    </Fragment>
  );
}
