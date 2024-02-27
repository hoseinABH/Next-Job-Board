// UI Frameworks
import { Languages as LanguagesIcon, X as RemoveIcon } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { Badge } from '@/components/ui/badge';
import { LanguageModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Constants
import { mapLanguageLevel } from '@/constants';
// Types
import type { Language } from '@/types/resume';

export default function Languages() {
  const dispatch = useAppDispatch();
  const languages = useAppSelector(
    (state) => state.resume.resumeData?.languages
  );
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'language'));
  }
  function handleDeleteLanguage(language: Language) {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'language',
        title: 'حذف زبان',
        message: `آیا از حذف زبان ${language.name} مطمئن هستید؟`,
        model: {
          id: language.level,
          entity: 'language',
        },
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
          {languages?.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center border justify-between gap-x-2 rounded-lg p-4"
            >
              <div className="flex items-center gap-x-2">
                <IconButton
                  title="حذف"
                  onClick={() => handleDeleteLanguage(lang)}
                >
                  <RemoveIcon className="w-4 h-4" />
                </IconButton>
                <p className="text-muted-foreground">{lang.name}</p>
              </div>
              <Badge>{mapLanguageLevel[lang.level]}</Badge>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <LanguageModal />
    </>
  );
}
