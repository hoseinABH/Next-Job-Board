import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="container px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full border bg-background dark:bg-secondary/30 shadow-md rounded-lg min-h-full md:min-h-[700px] overflow-hidden">
          {children}
          <div className="bg-zinc-950 dark:bg-secondary/40 hidden lg:flex items-center justify-center">
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
