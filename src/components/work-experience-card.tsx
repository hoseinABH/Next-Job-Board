// UI Frameworks
import { Trash2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Types
import type { WorkExperience } from '@/types/resume';

interface Props {
  experience: WorkExperience;
  onDelete: () => void;
}

export default function WorkExperienceCard({ experience, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="font-semibold text-lg ">{experience.position}</h6>
        <p>{experience.company}</p>
        <p className="text-muted-foreground">{experience.location}</p>
        <p className="text-muted-foreground">
          {experience.date.from} - {experience.date.to}
        </p>
        <p className="text-sm mt-2">{experience.description}</p>
      </div>
      <IconButton title="حذف" onClick={onDelete}>
        <Trash2 className="w-5 h-4" />
      </IconButton>
    </div>
  );
}
