import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="mt-8">
      <div className="flex items-center justify-around w-full">
        <div className="">
          <div className="w-[600px] mb-12">
            <h1 className="font-bold text-xl">دنبال چه شغلی می‌گردید؟</h1>
            <p className="text-muted-foreground">
              ۲۷,۲۷۴ آگهی استخدام فعال در ۱۰,۹۸۱ شرکت ایرانی: سامانه کاریابی
              آنلاین با بیشترین تعداد آگهی استخدام در ایران عنوان شغلی، نام
              شرکت، مهارت یا...
            </p>
          </div>
          <div className="w-full bg-card border border-b-8 border-neutral-400 dark:border-neutral-600 border-r-4 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <input
                type="text"
                placeholder="عنوان شغلی یا شرکت..."
                className="h-12 bg-transparent outline-none"
              />
              <input
                type="text"
                placeholder="شهر"
                className="h-12 bg-transparent outline-none"
              />
              <Button>جستجو در مشاغل</Button>
            </div>
          </div>
        </div>
        <Image
          className="drop-shadow-2xl"
          src="hero-img.svg"
          objectFit="contain"
          alt="جاب اونجا"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
