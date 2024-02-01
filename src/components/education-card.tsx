// UI Frameworks
import { Trash2 } from 'lucide-react';
// Common components
import IconButton from './icon-button';
// Types
import type { Education, EducationLevel } from '@/types/resume';

const mapEducationLevel: Record<EducationLevel, string> = {
  bachelor: 'لیسانس',
  doctoral: 'دکترا',
  master: 'فوق لیسانس',
};

interface Props {
  education: Education;
  onDelete: () => void;
}

export default function EducationCard({ education, onDelete }: Props) {
  return (
    <div className="flex justify-between">
      <div className="space-y-1">
        <h6 className="font-semibold text-lg ">{education.field}</h6>
        <div className="flex items-center">
          {mapEducationLevel[education.level]} - <p>{education.school}</p>
        </div>
        <p className="text-muted-foreground">{education.location}</p>
        <p className="text-muted-foreground">
          {education.date.from} - {education.date.to}
        </p>
      </div>
      <IconButton title="حذف" onClick={onDelete}>
        <Trash2 className="w-5 h-4" />
      </IconButton>
    </div>
  );
}
