// Common components
import { Card } from '@/components/ui/card';
// Types
import type { Statistic } from '../data';

interface Props {
  statistic: Statistic;
}

export default function StatisticCard({ statistic }: Props) {
  return (
    <Card className="flex items-center justify-between p-6" key={statistic.key}>
      <div>
        <h6 className="mb-2 text-xl text-muted-foreground">{statistic.title}</h6>
        <p className="text-lg font-bold">{statistic.value}</p>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-md border">
        <statistic.icon className="h-4 w-4 text-muted-foreground" />
      </div>
    </Card>
  );
}
