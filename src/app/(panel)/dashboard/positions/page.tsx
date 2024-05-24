import { Fragment } from 'react';
// Local components
import PositionsTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Actions
import { getCompanyPositions } from '@/actions/company';

export default async function DashboardPositionsPage() {
  const response = await getCompanyPositions({ page: '1' });
  return (
    <Fragment>
      <PositionsTable positions={response.data} />
      <CreatePositionModal />
    </Fragment>
  );
}
