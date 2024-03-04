'use client';
import Link from 'next/link';
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
// Utilities
import { getVersion } from '@/lib/version';
import { cn } from '@/lib/utils';
// Configs
import * as Routes from '@/config/routes';

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  ssr: false,
});
const Logo = dynamic(() => import('@/components/logo'), { ssr: false });

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
  return (
    <Card className="fixed top-0 h-full w-[280px] rounded-none flex flex-col justify-between">
      <CardHeader>
        <CardTitle>
          <Logo />
        </CardTitle>
        <CardDescription>به پنل مدیریت خوش آمدید</CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        {menuItems.map((menu) => (
          <MenuItem key={menu.href} {...menu} />
        ))}
      </CardContent>
      <CardFooter className="mt-auto flex justify-between w-full">
        <ThemeToggle />
        نسخه:{getVersion()}
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