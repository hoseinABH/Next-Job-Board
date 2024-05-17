'use client';
import { Fragment } from 'react';
// Local components
import PositionsTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Data
import { positions } from './data';

export default function DashboardPositionsPage() {
  return (
    <Fragment>
      <PositionsTable positions={positions} />
      <CreatePositionModal />
    </Fragment>
  );
}
