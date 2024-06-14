// Common components
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Constants
import * as Routes from '@/config/routes';
import LandingSection from '@/components/landing-section';
import { appData } from '@/config/app';

const data = [
  {
    id: 1,
    title: 'ایجاد حساب کاربری',
    text: 'حساب کاربری خود را در سریع ترین زمان ممکن ایجاد کنید.',
    src: '/landing/user-plus-duotone.svg',
    afterArrow: '/landing/Arrow1.svg',
  },
  {
    id: 2,
    title: 'ساخت رزومه',
    text: 'پروفایل شخصی خود را با کاریوا تجربه کنید.',
    src: '/landing/cloud-arrow-up-duotone.svg',
    afterArrow: '/landing/Arrow2.svg',
  },
  {
    id: 3,
    title: 'جست و جو در مشاغل موجود',
    text: 'به راحتی از بین مشاغل موجود شغل مورد نظر خود را پیدا کنید.',
    src: '/landing/magnifying-glass-plus-duotone.svg',
    afterArrow: '/landing/Arrow3.svg',
  },
  {
    id: 4,
    title: 'ثبت درخواست',
    text: 'با ایجاد درخواست برای موقعیت شغلی مورد نظر شما در مسیر موفقیت گام خواهید برداشت.',
    src: '/landing/circle-wavy-check-duotone.svg',
  },
];
export default function Roadmap() {
  return (
    <LandingSection
      title="مراحل ثبت درخواست کارآموزی"
      subTitle={`طراحی و اجرای مسیر استخدام حرفه ای با ${appData.appName}`}
    >
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-8 lg:flex-row">
        {data.map((item, index) => (
          <div key={item.id} className="relative">
            <div className="flex flex-col items-center gap-y-6">
              <div className="rounded-full bg-[#F2F5FF] p-4">
                <Image src={item.src} width={28} height={28} alt={item.title} />
              </div>
              <div className="max-w-[300px] space-y-2 text-center">
                <h6 className="text-secondary">{item.title}</h6>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            </div>
            {item.afterArrow ? (
              <Image
                className={cn('absolute left-0 top-0 hidden -translate-x-28 lg:block', {
                  ['top-12']: index === 1,
                })}
                src={item.afterArrow}
                width={180}
                height={80}
                priority
                quality={60}
                alt={item.title}
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-20 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href={Routes.INTERNSHIPS} className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary sm:w-auto"
          >
            جست و جو در مشاغل موجود
          </Button>
        </Link>
        <Link href={Routes.REGISTER} className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto">ایجاد حساب کاربری</Button>
        </Link>
      </div>
    </LandingSection>
  );
}
