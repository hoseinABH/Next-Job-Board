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
  const { resumeData, loading } = useAppSelector((state) => state.resume);
  const skills = resumeData?.skills;
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
      })
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
          <div className="flex items-center justify-center h-28">
            <Button variant="secondary" onClick={openCreateModal}>
              افزودن مهارت
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
                {skills?.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center border justify-between gap-x-2 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-x-2">
                      <IconButton
                        title="حذف"
                        onClick={() => handleDeleteSkill(skill)}
                      >
                        <RemoveIcon className="w-4 h-4" />
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
