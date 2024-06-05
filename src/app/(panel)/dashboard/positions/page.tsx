import { Fragment } from 'react';
// Local components
import PositionsTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Actions
import { getCompanyPositions } from '@/actions/company';
import { PaginationData } from '@/types/common';

export default async function DashboardPositionsPage() {
  const response = await getCompanyPositions({ page: '1' });
  const paginationData: PaginationData = {
    countPerPage: response.countPerPage,
    currentPage: response.currentPage,
    totalCount: response.totalCount,
  };
  return (
    <Fragment>
      <PositionsTable paginationData={paginationData} positions={response.data} />
      <CreatePositionModal />
    </Fragment>
  );
}
