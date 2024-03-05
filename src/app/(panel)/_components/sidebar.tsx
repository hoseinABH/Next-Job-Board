'use client';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
// UI Frameworks
import { Package, ClipboardList, Home, LucideIcon } from 'lucide-react';
// Common components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import AppVersion from '@/components/app-version';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import * as Routes from '@/config/routes';

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
});

interface Menu {
  title: string;
  href: string;
  icon: LucideIcon;
}

const menuItems: Menu[] = [
  {
    title: 'داشبورد',
    href: Routes.DASHBOARD,
    icon: Home,
  },
  {
    title: 'موقعیت شغلی',
    href: Routes.DASHBOARD_POSITIONS,
    icon: Package,
  },
  {
    title: 'درخواست ها',
    href: Routes.DASHBOARD_APPLICATIONS,
    icon: ClipboardList,
  },
];

export default function SideBar() {
  // Should be handle for mobile users later
  return <SidebarContent className="fixed hidden md:flex w-[280px] top-0 " />;
}

function SidebarContent({ className }: { className: string }) {
  return (
    <Card
      className={cn(
        'h-full rounded-none flex flex-col justify-between',
        className
      )}
    >
      <CardHeader>
        <CardTitle>
          <Link href="/dashboard">
            <Image
              priority
              src="/javascript.webp"
              className="rounded-sm drop-shadow-md"
              width={60}
              height={60}
              alt="شرکت ایرانسل"
            />
          </Link>
        </CardTitle>
        <CardDescription className="text-lg">
          به پنل مدیریت خوش آمدید
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        {menuItems.map((menu) => (
          <MenuItem key={menu.href} {...menu} />
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex justify-between w-full">
        <ThemeToggle />
        <AppVersion />
      </CardFooter>
    </Card>
  );
}

function MenuItem(menu: Menu) {
  const pathname = usePathname();
  return (
    <Link
      key={menu.href}
      href={menu.href}
      className={cn('flex h-20 items-center gap-x-2 transition-all px-8', {
        ['bg-primary/5 text-primary dark:bg-primary/15']:
          menu.href === pathname,
      })}
    >
      <menu.icon className="w-5 h-5" />
      <p className="w-[50%]">{menu.title}</p>
    </Link>
  );
}
