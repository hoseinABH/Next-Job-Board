// UI Frameworks
import { Languages as LanguagesIcon, X as RemoveIcon } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { Badge } from '@/components/ui/badge';
// Local components
import SectionWrapper from './section-wrapper';
// Types
import type { Language, LanguageLevel } from '@/types/job-seeker';

const mapLanguageLevel: Record<LanguageLevel, string> = {
  beginner: 'مبتدی',
  intermediate: 'متوسط',
  fluent: 'در حد زبان مادری',
  expert: 'حرفه ای کار',
};

const languages: Language[] = [
  {
    id: 1,
    name: 'فارسی',
    level: 'fluent',
  },
  {
    id: 2,
    name: 'انگلیسی',
    level: 'expert',
  },
];

export default function Languages() {
  return (
    <SectionWrapper icon={LanguagesIcon} title="زبان ها" id="languages">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
        {languages.map((lang) => (
          <div
            key={lang.id}
            className="flex items-center border justify-between gap-x-2 rounded-lg p-4"
          >
            <div className="flex items-center gap-x-2">
              <IconButton title="حذف">
                <RemoveIcon className="w-4 h-4" />
              </IconButton>
              <p className="text-muted-foreground">{lang.name}</p>
            </div>
            <Badge>{mapLanguageLevel[lang.level]}</Badge>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
