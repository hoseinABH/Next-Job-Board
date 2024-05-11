'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
// UI Frameworks
import { Package, ClipboardList, Home, LucideIcon } from 'lucide-react';
// Common components
import ThemeToggle from '@/components/theme-toggle';
import AppVersion from '@/components/app-version';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// Utilities
import { cn } from '@/lib/utils';
// Configs
import * as Routes from '@/config/routes';

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
  return <SidebarContent className="fixed top-0 hidden w-[280px] md:flex " />;
}

function SidebarContent({ className }: { className: string }) {
  return (
    <Card className={cn('flex h-full flex-col justify-between rounded-none', className)}>
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
        <CardDescription className="text-lg">به پنل مدیریت خوش آمدید</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        {menuItems.map((menu) => (
          <MenuItem key={menu.href} {...menu} />
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex w-full justify-between">
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
      className={cn('flex h-20 items-center gap-x-2 px-8 transition-all', {
        ['bg-primary/5 text-primary dark:bg-primary/15']: menu.href === pathname,
      })}
    >
      <menu.icon className="h-5 w-5" />
      <p className="w-[50%]">{menu.title}</p>
    </Link>
  );
}
