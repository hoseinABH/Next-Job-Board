// UI Frameworks
import { ShieldCheck, X as RemoveIcon } from 'lucide-react';
// Common components
import { Badge } from '@/components/ui/badge';
import { SkillModal } from '@/components/modal';
import IconButton from '@/components/icon-button';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
import CommonActions from '@/store/Common/common.actions';
// Constants
import { mapSkillLevel } from '@/constants';
// Types
import type { Skill } from '@/types/resume';

const skills: Skill[] = [
  {
    id: '1',
    name: 'ReduxJS',
    level: 'senior',
  },
  {
    id: '2',
    name: 'Typescript',
    level: 'mid',
  },
  {
    id: '3',
    name: 'ReactNative',
    level: 'mid',
  },
  {
    id: '4',
    name: 'NestJS',
    level: 'junior',
  },
  {
    id: '5',
    name: 'Mongoose',
    level: 'junior',
  },
];

export default function Skills() {
  const dispatch = useAppDispatch();
  function openCreateModal() {
    dispatch(ResumeActions.setModalOpen(true, 'skill'));
  }
  function handleDeleteSkill(skill: Skill) {
    dispatch(
      ResumeActions.setDeleteAlertData({
        key: 'skill',
        title: 'حذف مهارت',
        message: `آیا از حذف مهارت ${skill.name} مطمئن هستید؟`,
        model: {
          id: skill.id,
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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2">
          {skills.map((skill) => (
            <div
              key={skill.id}
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
              <Badge>{mapSkillLevel[skill.level]}</Badge>
            </div>
          ))}
        </div>
      </SectionWrapper>
      <SkillModal />
    </>
  );
}
