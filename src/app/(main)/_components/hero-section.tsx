import Image from 'next/image';
// Common components
import JobSearch from '@/components/job-search';

export default function HeroSection() {
  return (
    <section className="mt-4 flex w-full items-center justify-around">
      <div>
        <div className="mb-4 w-full md:mb-12 lg:w-[600px]">
          <h1 className="text-xl font-bold">دنبال چه شغلی می‌گردید؟</h1>
          <p className="text-justify text-muted-foreground">
            ۲۷,۲۷۴ آگهی استخدام فعال در ۱۰,۹۸۱ شرکت ایرانی: سامانه کاریابی آنلاین با بیشترین تعداد
            آگهی استخدام در ایران عنوان شغلی، نام شرکت، مهارت یا...
          </p>
        </div>
        <JobSearch />
      </div>
      <Image
        className="hidden drop-shadow-2xl lg:block"
        src="/hero.webp"
        alt="hero image"
        height={400}
        width={400}
        priority={true}
      />
    </section>
  );
}
