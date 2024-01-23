// UI Frameworks
import type { Education, EducationLevel } from '@/types/resume';
// Common components
import IconButton from './icon-button';
// Types
import { Trash2 } from 'lucide-react';

const mapEducationLevel: Record<EducationLevel, string> = {
  bachelor: 'لیسانس',
  doctoral: 'دکترا',
  master: 'فوق لیسانس',
};

interface Props {
  education: Education;
}

export default function EducationCard({ education }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="font-semibold text-lg golden-text">{education.field}</h6>
        <div className="flex items-center">
          {mapEducationLevel[education.level]} -{' '}
          <p>{education.school}</p>
        </div>
        <p className="text-muted-foreground">{education.location}</p>
        <p className="text-muted-foreground">
          {education.date.from} - {education.date.to}
        </p>
      </div>
      <IconButton title="حذف">
        <Trash2 className="w-5 h-4" />
      </IconButton>
    </div>
  );
}
