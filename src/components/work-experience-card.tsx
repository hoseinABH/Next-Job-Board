// UI Frameworks
import { Trash2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Types
import type { Experience } from '@/types/user';
import { persianDate } from '@/lib/date';
import Maybe from './maybe';

interface Props {
  experience: Experience;
  onDelete?: () => void;
}

export default function WorkExperienceCard({ experience, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="text-lg font-semibold ">{experience.position}</h6>
        <p>{experience.companyName}</p>
        <p className="text-muted-foreground">
          {persianDate(experience.startDate)} -{' '}
          {experience.isCurrent ? 'تا اکنون' : persianDate(experience.endDate)}
        </p>
        <p className="mt-2 text-sm">{experience.description}</p>
      </div>
      <Maybe condition={Boolean(onDelete)}>
        <IconButton title="حذف" onClick={onDelete}>
          <Trash2 className="h-4 w-5" />
        </IconButton>
      </Maybe>
    </div>
  );
}
