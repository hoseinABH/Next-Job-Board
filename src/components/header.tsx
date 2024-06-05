// Common components
import HeaderContainer from './header-container';
import Logo from './logo';
import NavigationDrawer from './navigation-drawer';
import NavigationItems from './navigation-items';
import UserDropDown from './user-drop-down';
// Actions
import { getUserRole } from '@/actions/cookie';
import { getUserProfile } from '@/actions/shared';

export default async function Header() {
  const userRole = await getUserRole();
  const profile = await getUserProfile(userRole);
  return (
    <HeaderContainer>
      <div className="container flex h-14 items-center justify-between px-4 sm:px-8">
        {/* Right Part */}
        <div className="flex items-center">
          <div className="block md:hidden">
            <NavigationDrawer userRole={userRole} />
          </div>
          <Logo className="hidden sm:block" />
          <NavigationItems
            userRole={userRole}
            className="mr-6 hidden items-center gap-6 text-sm md:flex"
          />
        </div>
        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <UserDropDown profileData={profile} userRole={userRole} />
        </div>
      </div>
    </HeaderContainer>
  );
}
