// UI Frameworks
import { Languages as LanguagesIcon, X as RemoveIcon } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { Badge } from '@/components/ui/badge';
import { LanguageModal } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
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
  const { resumeData, loading } = useAppSelector((state) => state.resume);
  const languages = resumeData?.languages;
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'language'));
  }
  function handleDeleteLanguage(language: Language) {
    dispatch(
      ResumeActions.setDialogData({
        title: 'حذف زبان',
        message: `آیا از حذف زبان ${language.name} مطمئن هستید؟`,
        model: {
          id: language.languageId,
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
        {!languages?.length ? (
          <div className="flex items-center justify-center h-28">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن زبان
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
            {loading.getMyResume ? (
              <>
                {[1, 2].map((skeleton) => (
                  <Skeleton key={skeleton} className="h-16 w-full" />
                ))}
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        )}
      </SectionWrapper>
      <LanguageModal />
    </>
  );
}
