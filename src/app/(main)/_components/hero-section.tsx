import Image from 'next/image';
// Common components
import JobSearch from '@/components/job-search';

export default function HeroSection() {
  return (
    <section className="flex mt-4 items-center justify-around w-full">
      <div>
        <div className="w-full lg:w-[600px] mb-4 md:mb-12">
          <h1 className="font-bold text-xl">دنبال چه شغلی می‌گردید؟</h1>
          <p className="text-muted-foreground text-justify">
            ۲۷,۲۷۴ آگهی استخدام فعال در ۱۰,۹۸۱ شرکت ایرانی: سامانه کاریابی
            آنلاین با بیشترین تعداد آگهی استخدام در ایران عنوان شغلی، نام شرکت،
            مهارت یا...
          </p>
        </div>
        <JobSearch />
      </div>
      <Image
        className="drop-shadow-2xl hidden lg:block"
        src="/hero.webp"
        alt="نمایشکار"
        height={400}
        width={400}
        priority={true}
      />
    </section>
  );
}
