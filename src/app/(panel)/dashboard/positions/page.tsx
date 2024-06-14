import { Fragment } from 'react';
// Local components
import PositionsTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Utilities
import { getPaginationDataFromResponse } from '@/lib/utils';
// Actions
import { getCompanyPositions } from '@/actions/company';

interface SearchParams {
  searchParams: {
    p?: string;
  };
}

export default async function DashboardPositionsPage({ searchParams }: SearchParams) {
  const response = await getCompanyPositions({ page: searchParams.p ?? '1' });
  const paginationData = getPaginationDataFromResponse(response);
  return (
    <Fragment>
      <PositionsTable paginationData={paginationData} positions={response.data} />
      <CreatePositionModal />
    </Fragment>
  );
}
