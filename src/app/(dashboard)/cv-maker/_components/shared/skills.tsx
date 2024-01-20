// UI Frameworks
import { ShieldCheck } from 'lucide-react';
// Local components
import SectionWrapper from './section-wrapper';

const infoRows = [
  {
    title: 'نام و نام خانوادگی',
    value: 'حسین ابوالحسنی',
  },
];

export default function Skills() {
  return (
    <SectionWrapper icon={ShieldCheck} title="مهارت ها" id="skills">
      <div className="flex flex-col gap-y-6">
        {infoRows.map((info) => (
          <div key={info.value} className="flex items-center">
            <p className="text-muted-foreground w-52">{info.title}</p>
            <p>{info.value}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
