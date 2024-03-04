// Common components
import { Card } from '@/components/ui/card';
// Types
import type { Statistic } from '../data';

interface Props {
  statistic: Statistic;
}

export default function StatisticCard({ statistic }: Props) {
  return (
    <Card className="p-6 flex justify-between items-center" key={statistic.key}>
      <div>
        <h6 className="text-xl mb-2 text-muted-foreground">
          {statistic.title}
        </h6>
        <p className="text-lg font-bold">{statistic.value}</p>
      </div>
      <div className="border rounded-md w-8 h-8 flex justify-center items-center">
        <statistic.icon className="w-4 h-4 text-muted-foreground" />
      </div>
    </Card>
  );
}
