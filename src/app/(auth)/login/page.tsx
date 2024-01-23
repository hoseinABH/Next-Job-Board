import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
// UI Frameworks
import { GitHubLogoIcon } from '@radix-ui/react-icons';
// Common components
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'ورود',
};

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full border bg-background dark:bg-secondary/30 shadow-md rounded-lg min-h-full md:min-h-[700px] overflow-hidden">
          <div className="w-full flex flex-col items-center justify-center mt-4 md:mt-28 p-4">
            <h1 className="font-bold text-2xl">یک حساب کاربری ایجاد کنید</h1>
            <p className="text-muted-foreground mt-2">
              برای ایجاد حساب کاربری ایمیل خود را در زیر وارد کنید
            </p>
            <div className="mt-8 max-w-sm w-full space-y-12">
              <form className="w-full">
                <Input dir="ltr" placeholder="name@example.com" />
                <Button className="w-full mt-4">ورود با ایمیل</Button>
              </form>
              <div className="bg-muted mb-4 h-px w-full mt-8 relative flex justify-center">
                <div className="absolute -top-3 bg-background dark:bg-secondary/10 px-4 text-center">
                  <p>یا از طریق</p>
                </div>
              </div>
              <Button className="w-full" variant="outline">
                <GitHubLogoIcon className="ml-4" />
                گیتهاب
              </Button>
            </div>
          </div>
          <div className="bg-zinc-950 dark:bg-secondary/40 hidden lg:flex items-center justify-center">
            <Image
              src="/javascript.webp"
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
