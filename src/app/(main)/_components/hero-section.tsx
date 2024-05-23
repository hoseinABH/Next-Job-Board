import Image from 'next/image';
// Common components
import SearchForm from '@/components/search-form';
// Constants
import * as Routes from '@/config/routes';

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
        <SearchForm targetRoute={Routes.INTERNSHIPS} />
      </div>
      <Image
        className="hidden drop-shadow-2xl lg:block"
        src="/hero.png"
        alt="hero image"
        height={300}
        width={300}
        priority={true}
      />
    </section>
  );
}
