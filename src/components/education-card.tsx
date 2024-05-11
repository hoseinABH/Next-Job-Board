// UI Frameworks
import { Trash2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Utilities
import { persianDate } from '@/lib/date';
// Types
import type { Education } from '@/types/user';
// Constants
import { mapEducationLevel } from '@/constants';
import Maybe from './maybe';

interface Props {
  education: Education;
  onDelete?: () => void;
}

export default function EducationCard({ education, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="text-lg font-semibold ">{education.fieldOfStudy}</h6>
        <div className="flex items-center">
          {mapEducationLevel[education.degree]} - <p>{education.institution}</p>
        </div>
        <p className="text-muted-foreground">
          {persianDate(education.startDate)} -{' '}
          {education.currentlyEnrolled ? 'اکنون' : persianDate(education.degree)}
        </p>
      </div>
      <Maybe condition={Boolean(onDelete)}>
        <IconButton title="حذف" onClick={onDelete}>
          <Trash2 className="h-4 w-5" />
        </IconButton>
      </Maybe>
    </div>
  );
}
