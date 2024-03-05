// Local components
import StatisticCard from './_components/statistic-card';
// Data
import { statistics } from './data';

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      {statistics.map((statistic) => (
        <StatisticCard key={statistic.key} statistic={statistic} />
      ))}
    </div>
  );
}
