'use client';
import { Fragment } from 'react';
// UI Frameworks
import { X as RemoveIcon, ShieldCheck } from 'lucide-react';
// Common components
import IconButton from '@/components/icon-button';
import { SkillModal } from '@/components/modal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Local components
import SectionWrapper from './section-wrapper';
// Constants
import { mapLanguageLevel } from '@/constants';
// Types
import type { Skill } from '@/types/user';

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  function openCreateModal() {
    // dispatch(UserActions.setModalOpen(true, 'skill'));
  }
  function handleDeleteSkill(skill: Skill) {
    // dispatch(
    //   UserActions.setDialogData({
    //     title: 'حذف مهارت',
    //     message: `آیا از حذف مهارت ${skill.title} مطمئن هستید؟`,
    //     model: {
    //       id: String(skill.id),
    //       entity: 'skill',
    //     },
    //   }),
    // );
    // dispatch(UserActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <Fragment>
      <SectionWrapper
        icon={ShieldCheck}
        title="مهارت ها"
        id="skills"
        actionHandler={openCreateModal}
      >
        {!skills?.length ? (
          <div className="flex h-28 items-center justify-center">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن مهارت
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 xl:grid-cols-3">
            {skills?.map((skill) => (
              <div
                key={skill.id}
                className="flex items-center justify-between gap-x-2 rounded-lg border p-4"
              >
                <div className="flex items-center gap-x-2">
                  <IconButton title="حذف" onClick={() => handleDeleteSkill(skill)}>
                    <RemoveIcon className="h-4 w-4" />
                  </IconButton>
                  <p className="text-muted-foreground">{skill.title}</p>
                </div>
                <Badge>{mapLanguageLevel[skill.level]}</Badge>
              </div>
            ))}
          </div>
        )}
      </SectionWrapper>
      <SkillModal />
    </Fragment>
  );
}
