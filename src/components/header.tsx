// Common components
import Logo from './logo';
import NavigationDrawer from './navigation-drawer';
import NavigationItems from './navigation-items';
import UserDropDown from './user-drop-down';
// Database
import { getUserMinimalProfile } from '@/db/user';

export default async function Header() {
  const profileData = await getUserMinimalProfile();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-2 sm:px-8">
        {/* Right Part */}
        <div className="flex items-center">
          <div className="ml-4 inline md:hidden">
            <NavigationDrawer />
          </div>
          <Logo />
          <NavigationItems className="mr-6 hidden items-center gap-6 text-sm md:flex" />
        </div>
        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <UserDropDown profileData={profileData} />
        </div>
      </div>
    </header>
  );
}
