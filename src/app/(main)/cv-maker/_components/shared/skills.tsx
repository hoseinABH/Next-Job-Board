// UI Frameworks
import { ShieldCheck, X as RemoveIcon } from 'lucide-react';
// Common components
import { Badge } from '@/components/ui/badge';
import { SkillModal } from '@/components/modal';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import IconButton from '@/components/icon-button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/User/user.actions';
import CommonActions from '@/store/Common/common.actions';
// Constants
import { mapLanguageLevel } from '@/constants';
// Types
import type { Skill } from '@/types/user';

export default function Skills() {
  const dispatch = useAppDispatch();
  const { userResume, loading } = useAppSelector((state) => state.user);
  const skills = userResume?.skills;
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'skill'));
  }
  function handleDeleteSkill(skill: Skill) {
    dispatch(
      ResumeActions.setDialogData({
        title: 'حذف مهارت',
        message: `آیا از حذف مهارت ${skill.name} مطمئن هستید؟`,
        model: {
          id: skill.skillId,
          entity: 'skill',
        },
      }),
    );
    dispatch(CommonActions.setModalOpen(true, 'confirmDelete'));
  }
  return (
    <>
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
            {loading.getUserResume ? (
              <>
                {[1, 2].map((skeleton) => (
                  <Skeleton key={skeleton} className="h-16 w-full" />
                ))}
              </>
            ) : (
              <>
                {skills?.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-x-2 rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-x-2">
                      <IconButton title="حذف" onClick={() => handleDeleteSkill(skill)}>
                        <RemoveIcon className="h-4 w-4" />
                      </IconButton>
                      <p className="text-muted-foreground">{skill.name}</p>
                    </div>
                    <Badge>{mapLanguageLevel[skill.level]}</Badge>
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </SectionWrapper>
      <SkillModal />
    </>
  );
}
