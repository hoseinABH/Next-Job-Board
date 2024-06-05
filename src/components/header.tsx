// Common components
import HeaderContainer from './header-container';
import Logo from './logo';
import NavigationDrawer from './navigation-drawer';
import NavigationItems from './navigation-items';
import UserDropDown from './user-drop-down';
// Actions
import { getUserMinimalProfile } from '@/actions/user';
import { getUserRole } from '@/actions/cookie';

export default async function Header() {
  const profileData = await getUserMinimalProfile();
  const userRole = await getUserRole();
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
          <UserDropDown profileData={profileData} />
        </div>
      </div>
    </HeaderContainer>
  );
}
