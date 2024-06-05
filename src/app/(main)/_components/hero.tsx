// Common components
import SearchForm from '@/components/search-form';
// Constants
import * as Routes from '@/config/routes';
import * as appConfigs from '@/config/app';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full overflow-hidden rounded-none bg-[#0A65CC] pb-6 pt-20 text-primary-foreground md:rounded-b-[5rem] md:pb-28 md:pt-24">
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-y-4 px-4 text-center">
        <h1 className="text-2xl font-bold md:text-3xl">
          {appConfigs.appData.appName} پلتفرم جذب کارآموزان
        </h1>
        <p className="text-sm leading-6">
          لورم ایپسوم یا طرح‌نما به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک
          گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه
          اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید.
        </p>
        <SearchForm className="z-50 mx-auto block pt-6" targetRoute={Routes.INTERNSHIPS} />
      </div>
      <Image
        width={300}
        height={300}
        src="/hero-shape.svg"
        alt="hero-shape"
        className="absolute left-0 top-0 z-auto hidden translate-y-24 select-none md:block"
        priority
      />
      <Image
        width={1100}
        height={100}
        className="absolute top-0 z-auto hidden -translate-y-28 translate-x-20 select-none md:block"
        src="/line-vector.svg"
        alt="line-vector"
        priority
      />
    </section>
  );
}
