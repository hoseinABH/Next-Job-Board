// UI Frameworks
import { Trash2, Building2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Types
import type { WorkExperience } from '@/types/resume';

interface Props {
  experience: WorkExperience;
}

export default function WorkExperienceCard({ experience }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-2 items-start">
        <div className="bg-gray-100 dark:bg-zinc-800 p-6 rounded-full">
          <Building2 className="text-muted-foreground" />
        </div>
        <div className="space-y-1">
          <h6 className="font-semibold text-lg golden-text">
            {experience.position}
          </h6>
          <p>{experience.company}</p>
          <p className="text-muted-foreground">{experience.location}</p>
          <p className="text-muted-foreground">
            {experience.date.from} - {experience.date.to}
          </p>
          <p className="text-sm mt-2">{experience.description}</p>
        </div>
      </div>
      <IconButton title="حذف">
        <Trash2 className="w-5 h-4" />
      </IconButton>
    </div>
  );
}
