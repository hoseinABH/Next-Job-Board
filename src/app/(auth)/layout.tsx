import Image from 'next/image';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="container px-4 sm:px-8">
        <div className="grid h-full min-h-full w-full grid-cols-1 overflow-hidden rounded-lg border bg-background shadow-md dark:bg-secondary/30 md:min-h-[700px] lg:grid-cols-2">
          {children}
          <div className="hidden items-center justify-center bg-secondary dark:bg-secondary/40 lg:flex">
            <Image
              src="/hero.webp"
              alt="صفحه ورود"
              height={400}
              width={400}
              className="select-none"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
