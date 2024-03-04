import dynamic from 'next/dynamic';
// Common components
import NavigationDrawer from './navigation-drawer';
import NavigationItems from './navigation-items';

/** If we don't do this, we get the following warning:
 * * Warning: Prop className did not match.
 */
const UserDropDown = dynamic(() => import('./user-drop-down'), { ssr: false });
const Logo = dynamic(() => import('./logo'), { ssr: false });

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container px-2 sm:px-8 flex justify-between h-14 items-center">
        {/* Right Part */}
        <div className="flex items-center">
          <div className="inline md:hidden ml-4">
            <NavigationDrawer />
          </div>
          <Logo />
          <NavigationItems className="hidden md:flex items-center gap-6 text-sm mr-6" />
        </div>
        {/* Left Part */}
        <div className="flex flex-1 items-center justify-end">
          <UserDropDown />
        </div>
      </div>
    </header>
  );
}
