'use client';
import { Fragment } from 'react';
// UI Frameworks
import { Languages as LanguagesIcon } from 'lucide-react';
// Common components
import { LanguageModal } from '@/components/modal';
import SkillBox from '@/components/skill-box';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Constants
import { mapSeniorityLevel } from '@/constants/user';
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
  function removeLanguage(language: Language) {
    openModal(true, 'removeConfirm', {
      title: 'حذف زبان',
      message: `آیا از حذف زبان ${language.title} مطمئن هستید؟`,
      id: language.id,
      entityType: 'language',
    });
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
              <SkillBox
                key={lang.id}
                action={() => removeLanguage(lang)}
                level={mapSeniorityLevel[lang.level]}
              >
                {lang.title}
              </SkillBox>
            ))}
          </div>
        )}
      </SectionWrapper>
      <LanguageModal />
    </Fragment>
  );
}
