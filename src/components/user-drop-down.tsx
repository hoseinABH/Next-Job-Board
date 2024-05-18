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

const userMenuItems = [
  {
    title: 'درخواست های من',
    key: 'ApplicationRequest',
  },
  {
    title: 'حساب کاربری',
    key: 'Account',
  },
  {
    title: 'رزومه من',
    key: 'Resume',
  },
  {
    title: 'خروج',
    key: 'Logout',
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
        // dispatch(AuthActions.logout());
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
