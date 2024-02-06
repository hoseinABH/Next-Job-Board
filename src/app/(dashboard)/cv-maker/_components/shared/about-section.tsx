// UI Frameworks
import { ScanFace } from 'lucide-react';
// Common components
import { AboutMeModal } from '@/components/modal';
// Local components
import SectionWrapper from './section-wrapper';
// Hooks
import { useAppDispatch } from '@/hooks/store';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';

export default function AboutSection() {
  const dispatch = useAppDispatch();
  function openEditModal() {
    dispatch(ResumeActions.setModalOpen(true, 'aboutMe'));
  }
  return (
    <>
      <SectionWrapper
        id="about-me"
        title="درباره من"
        icon={ScanFace}
        actionType="edit"
        actionHandler={openEditModal}
      >
        <div className="flex flex-col items-center md:items-start">
          <p className="text-2xl mb-0">حسین ابوالحسنی</p>
          <p className="flex items-center text-muted-foreground">
            توسعه دهنده فرانت اند
          </p>
          <p className="text-muted-foreground leading-8 text-center md:text-right mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </SectionWrapper>
      <AboutMeModal />
    </>
  );
}
