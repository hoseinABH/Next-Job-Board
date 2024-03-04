// Local components
import StatisticCard from './_components/statistic-card';
// Data
import { statistics } from './data';

export default function DashboardPage() {
  return (
    <div className="h-full container pt-24">
      <div className="grid grid-cols-4 gap-6">
        {statistics.map((statistic) => (
          <StatisticCard key={statistic.key} statistic={statistic} />
        ))}
      </div>
    </div>
  );
}