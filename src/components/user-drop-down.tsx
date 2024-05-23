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
// Configs
import * as Routes from '@/config/routes';
// Types
import type { UserMinimalProfile } from '@/types/user';
import { logout } from '@/actions/auth';

const userMenuItems = [
  {
    title: 'درخواست های من',
    key: 'ApplicationRequest',
    disabled: false,
  },
  {
    title: 'حساب کاربری',
    key: 'Account',
    disabled: true,
  },
  {
    title: 'رزومه من',
    key: 'Resume',
    disabled: false,
  },
  {
    title: 'خروج',
    key: 'Logout',
    disabled: false,
  },
];

interface Props {
  profileData?: UserMinimalProfile;
}

export default function UserDropDown({ profileData }: Props) {
  const router = useRouter();

  function handleSelectMenu(menuKey: string) {
    switch (menuKey) {
      case 'Resume':
        router.push(Routes.CV_MAKER);
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
  const fullName = useMemo(
    () => profileData?.firstName + ' ' + profileData?.lastName,
    [profileData],
  );
  return (
    <>
      {Boolean(profileData) ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-x-2 outline-none">
            <Avatar>
              <AvatarImage src="/" alt={fullName} />
              <AvatarFallback>{fullName[0]}</AvatarFallback>
            </Avatar>
            {fullName}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {userMenuItems.map((menu) => (
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
        <Link href={Routes.LOGIN} className={buttonVariants()}>
          <Fingerprint className="ml-2 h-4 w-4" />
          <span>ورود | ثبت نام</span>
        </Link>
      )}
    </>
  );
}
