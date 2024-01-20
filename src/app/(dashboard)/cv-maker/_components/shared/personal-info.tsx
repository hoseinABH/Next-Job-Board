// UI Frameworks
import { User } from 'lucide-react';
// Local components
import SectionWrapper from './section-wrapper';

const infoRows = [
  {
    title: 'نام و نام خانوادگی',
    value: 'حسین ابوالحسنی',
  },
  {
    title: 'وضعیت تاهل',
    value: 'متاهل',
  },
  {
    title: 'جنسیت',
    value: 'آقا',
  },
  {
    title: 'وضعیت نظام وظیفه',
    value: 'مشمول',
  },
  {
    title: 'محل سکونت',
    value: 'تهران',
  },
  {
    title: 'تاریخ تولد',
    value: '17/02/1377',
  },
  {
    title: 'شماره تلفن',
    value: '09380980800',
  },
  {
    title: 'ایمیل',
    value: 'user@gmail.com',
  },
];

export default function PersonalInfo() {
  return (
    <SectionWrapper
      icon={User}
      actionType="edit"
      title="مشخصات فردی"
      id="personal-info"
      hasShowMore
    >
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
