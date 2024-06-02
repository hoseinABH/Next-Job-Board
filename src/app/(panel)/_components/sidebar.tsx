'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Common components
import AppVersion from '@/components/app-version';
import IconButton from '@/components/icon-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ClipboardList, Home, LucideIcon, LucideLogOut, Package } from 'lucide-react';
// Actions
import { logout } from '@/actions/auth';
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
        <CardTitle className="flex items-center justify-between">
          <Link href="/dashboard">
            <Image
              priority
              src="/logo.png"
              className="h-auto w-auto drop-shadow-md"
              alt="شرکت"
              width={80}
              height={40}
            />
          </Link>
          <IconButton onClick={() => logout()} title="خروج">
            <LucideLogOut />
          </IconButton>
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
        <AppVersion />
      </CardFooter>
    </Card>
  );
}

function MenuItem(menu: Menu) {
  const pathname = usePathname();
  const mainRoute = pathname.split('/')[2] ?? pathname.split('/')[1];
  const isActive = pathname.split('/')[2] ? menu.href.includes(mainRoute) : pathname === menu.href;
  return (
    <Link
      key={menu.href}
      href={menu.href}
      className={cn('flex h-20 items-center gap-x-2 px-8 transition-all', {
        ['bg-primary/5 text-primary dark:bg-primary/15']: isActive,
      })}
    >
      <menu.icon className="h-5 w-5" />
      <p className="w-[50%]">{menu.title}</p>
    </Link>
  );
}
