'use client';
import Link from 'next/link';
import { useMemo } from 'react';
// UI frameworks
import { Fingerprint } from 'lucide-react';
// Common components
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { buttonVariants } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
// Hooks
import { useRouter } from 'next/navigation';
// Actions
import { logout } from '@/actions/auth';
// Configs
import * as Routes from '@/config/routes';
import { companyDropdownMenu, userDropdownMenu } from '@/config/app';
// Types
import type { UserMinimalProfile, UserRole } from '@/types/user';
import type { Company } from '@/types/company';

interface Props {
  profileData?: UserMinimalProfile | Company;
  userRole?: UserRole;
}

export default function UserDropDown({ profileData, userRole }: Props) {
  const router = useRouter();

  function handleSelectMenu(menuKey: string) {
    switch (menuKey) {
      case 'Resume':
        router.push(Routes.CV_MAKER);
        break;
      case 'Dashboard':
        router.push(Routes.DASHBOARD);
        break;
      case 'DashboardApplications':
        router.push(Routes.DASHBOARD_APPLICATIONS);
        break;
      case 'DashboardPositions':
        router.push(Routes.DASHBOARD_POSITIONS);
        break;
      case 'Logout':
        logout();
        break;
      case 'ApplicationRequest':
        router.push(Routes.APPLIED);
        break;
      default:
        break;
    }
  }
  const dropdownMenu = userRole === 'Company' ? companyDropdownMenu : userDropdownMenu;
  const fullName = useMemo(() => {
    if (userRole === 'Company') {
      return (profileData as Company)?.title;
    }
    return (
      (profileData as UserMinimalProfile)?.firstName +
      ' ' +
      (profileData as UserMinimalProfile)?.lastName
    );
  }, [profileData, userRole]);
  return (
    <>
      {Boolean(profileData) ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-x-2 outline-none">
            <Avatar>
              <AvatarImage src="/" alt={fullName} />
              <AvatarFallback className="text-secondary-foreground">{fullName[0]}</AvatarFallback>
            </Avatar>
            {fullName}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {dropdownMenu.map((menu) => (
              <DropdownMenuItem
                key={menu.key}
                onClick={() => handleSelectMenu(menu.key)}
                className="cursor-pointer"
                disabled={menu.disabled}
              >
                {menu.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={Routes.LOGIN} className={buttonVariants({ variant: 'ghost' })}>
          <Fingerprint className="ml-2 h-4 w-4" />
          <span>ورود | ثبت نام</span>
        </Link>
      )}
    </>
  );
}
