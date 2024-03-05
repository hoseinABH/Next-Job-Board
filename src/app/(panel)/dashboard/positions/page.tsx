// Local components
import PositionTable from './_components/positions-table';
// Common components
import CreatePositionModal from '@/components/modal/panel/create-position';
// Data
import { positions } from '../data';

export default function DashboardPositionsPage() {
  return (
    <>
      <div className="h-full container pt-24">
        <PositionTable positions={positions} />
      </div>
      <CreatePositionModal />
    </>
  );
}
