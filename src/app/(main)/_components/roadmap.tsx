import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import * as Routes from '@/config/routes';
const data = [
  {
    id: 1,
    title: 'ایجاد حساب کاربری',
    text: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
    src: '/landing/user-plus-duotone.svg',
    afterArrow: '/landing/Arrow1.svg',
  },
  {
    id: 2,
    title: 'ساخت و آپلود رزومه',
    text: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
    src: '/landing/cloud-arrow-up-duotone.svg',
    afterArrow: '/landing/Arrow2.svg',
  },
  {
    id: 3,
    title: 'جست و جو در مشاغل موجود',
    text: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
    src: '/landing/magnifying-glass-plus-duotone.svg',
    afterArrow: '/landing/Arrow3.svg',
  },
  {
    id: 4,
    title: 'ثبت درخواست',
    text: 'لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
    src: '/landing/circle-wavy-check-duotone.svg',
  },
];
export default function Roadmap() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 sm:px-8">
      <h1 className="mb-4 text-center text-xl font-bold text-secondary sm:text-2xl md:text-3xl">
        مراحل ثبت درخواست کارآموزی
      </h1>
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
        {data.map((item, index) => (
          <div key={item.id} className="relative">
            <div className="flex flex-col items-center gap-y-6">
              <div className="rounded-full bg-[#F2F5FF] p-4">
                <Image src={item.src} width={28} height={28} alt={item.title} />
              </div>
              <div className="space-y-2 text-center">
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
      <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
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
    </div>
  );
}
