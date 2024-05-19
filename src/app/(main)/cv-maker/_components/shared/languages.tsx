'use client';
import { Fragment } from 'react';
// UI Frameworks
import { Languages as LanguagesIcon, X as RemoveIcon } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { LanguageModal } from '@/components/modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Constants
import { mapLanguageLevel } from '@/constants';
// Types
import type { Language } from '@/types/user';

interface Props {
  languages: Language[];
}

export default function Languages({ languages }: Props) {
  const { openModal } = useUserStore();
  function openCreateModal() {
    openModal(true, 'language');
  }
  function handleDeleteLanguage(language: Language) {
    // dispatch(
    //   UserActions.setDialogData({
    //     title: 'حذف زبان',
    //     message: `آیا از حذف زبان ${language.title} مطمئن هستید؟`,
    //     model: {
    //       id: String(language.id),
    //       entity: 'language',
    //     },
    //   }),
    // );
    // dispatch(UserActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <Fragment>
      <SectionWrapper
        icon={LanguagesIcon}
        title="زبان ها"
        id="languages"
        actionHandler={openCreateModal}
      >
        {!languages?.length ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن زبان
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {languages?.map((lang) => (
              <div
                key={lang.id}
                className="flex items-center justify-between gap-x-2 rounded-lg border p-4"
              >
                <div className="flex items-center gap-x-2">
                  <IconButton title="حذف" onClick={() => handleDeleteLanguage(lang)}>
                    <RemoveIcon className="h-4 w-4" />
                  </IconButton>
                  <p className="text-muted-foreground">{lang.title}</p>
                </div>
                <Badge>{mapLanguageLevel[lang.level]}</Badge>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
      <LanguageModal />
    </Fragment>
  );
}
