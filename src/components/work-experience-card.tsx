// UI Frameworks
import { Trash2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Types
import type { Experience } from '@/types/resume';
import { persianDate } from '@/lib/date';

interface Props {
  experience: Experience;
  onDelete: () => void;
}

export default function WorkExperienceCard({ experience, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="font-semibold text-lg ">{experience.position}</h6>
        <p>{experience.companyName}</p>
        <p className="text-muted-foreground">
          {persianDate(experience.startDate)} -{' '}
          {experience.isCurrent ? 'تا اکنون' : persianDate(experience.endDate)}
        </p>
        <p className="text-sm mt-2">{experience.description}</p>
      </div>
      <IconButton title="حذف" onClick={onDelete}>
        <Trash2 className="w-5 h-4" />
      </IconButton>
    </div>
  );
}
