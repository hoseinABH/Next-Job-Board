// Common components
import SearchForm from '@/components/search-form';
// Constants
import * as Routes from '@/config/routes';
import * as appConfigs from '@/config/app';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-none bg-[#0A65CC] text-primary-foreground md:rounded-b-[5rem]">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-y-4 px-4 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">
          استخدام حرفه ای با {appConfigs.appData.appName}
        </h1>
        <p className="mt-2 text-lg">کاریابی • کارورزی • کارآموزی </p>
        <p className="mt-2 text-xl">
          اولین پلتفرم مبتنی بر طراحی و اجرای پروژه های استخدامی حرفه ای
        </p>
        <SearchForm className="z-50 mx-auto block pt-6" targetRoute={Routes.INTERNSHIPS} />
      </div>
      <Image
        width={300}
        height={300}
        src="/hero-shape.svg"
        alt="hero-shape"
        className="absolute bottom-24 left-0 z-auto hidden translate-y-24 select-none md:block"
        priority
      />
      <Image
        width={1200}
        height={100}
        className="absolute right-0 top-0 z-auto hidden translate-x-20 select-none md:block"
        src="/line-vector.svg"
        alt="line-vector"
        priority
      />
    </section>
  );
}
