// UI Frameworks
import { User, ScanFace } from 'lucide-react';
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
    console.log('test');
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
        <div className="flex flex-col md:flex-row gap-x-4 items-center md:items-start">
          <div className="border rounded-full flex justify-center items-center p-8 cursor-pointer transition-all">
            <User className="text-muted-foreground" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-2xl mb-0">حسین ابوالحسنی</p>
            <p className="flex items-center text-muted-foreground">
              توسعه دهنده فرانت اند
            </p>
            <p className="text-justify text-muted-foreground leading-6 mt-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
        </div>
      </SectionWrapper>
      <AboutMeModal />
    </>
  );
}
