// UI Frameworks
import { Languages as LanguagesIcon, X as RemoveIcon } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { Badge } from '@/components/ui/badge';
import { LanguageModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Types
import type { Language, LanguageLevel } from '@/types/resume';

const mapLanguageLevel: Record<LanguageLevel, string> = {
  beginner: 'مبتدی',
  intermediate: 'متوسط',
  fluent: 'در حد زبان مادری',
  expert: 'حرفه ای',
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
  const dispatch = useAppDispatch();
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'language'));
  }
  function handleDeleteLanguage() {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'language',
        title: 'حذف زبان',
        message: 'آیا از حذف زبان انگلیسی مطمئن هستید؟',
        model: {},
      })
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
      <SectionWrapper
        icon={LanguagesIcon}
        title="زبان ها"
        id="languages"
        actionHandler={openCreateModal}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
          {languages.map((lang) => (
            <div
              key={lang.id}
              className="flex items-center border justify-between gap-x-2 rounded-lg p-4"
            >
              <div className="flex items-center gap-x-2">
                <IconButton title="حذف" onClick={handleDeleteLanguage}>
                  <RemoveIcon className="w-4 h-4" />
                </IconButton>
                <p className="text-muted-foreground">{lang.name}</p>
              </div>
              <Badge variant="gradient">{mapLanguageLevel[lang.level]}</Badge>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <LanguageModal />
    </>
  );
}
