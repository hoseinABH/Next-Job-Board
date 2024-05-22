'use client';
import { Fragment } from 'react';
// UI Frameworks
import { ShieldCheck } from 'lucide-react';
// Common components
import { SkillModal } from '@/components/modal';
import { Button } from '@/components/ui/button';
import SkillBox from '@/components/skill-box';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import useUserStore from '@/store/user';
// Constants
import { mapSeniorityLevel } from '@/constants/user';
// Types
import type { Skill } from '@/types/user';

interface Props {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  const { openModal } = useUserStore();
  function openCreateModal() {
    openModal(true, 'skill');
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
              <SkillBox
                key={skill.id}
                action={() => handleDeleteSkill(skill)}
                level={mapSeniorityLevel[skill.level]}
              >
                {skill.title}
              </SkillBox>
            ))}
          </div>
        )}
      </SectionWrapper>
      <SkillModal />
    </Fragment>
  );
}
