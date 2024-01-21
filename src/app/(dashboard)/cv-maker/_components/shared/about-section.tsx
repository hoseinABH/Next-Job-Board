// UI Frameworks
import { User, ScanFace } from 'lucide-react';
// Local components
import SectionWrapper from './section-wrapper';

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about-me"
      title="درباره من"
      icon={ScanFace}
      actionType="edit"
    >
      <div className="flex gap-x-4 items-start">
        <div className="border rounded-full flex justify-center items-center p-8 cursor-pointer transition-all">
          <User className="text-muted-foreground" />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl mb-0">حسین ابوالحسنی</p>
          <p className="flex items-center text-muted-foreground">
            توسعه دهنده فرانت اند
          </p>
          <p className="text-justify text-muted-foreground leading-6 mt-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
