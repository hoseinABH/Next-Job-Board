import { NextRequest, NextResponse } from 'next/server';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { UserRole } from './types/user';

const internRoutes = [Routes.CV_MAKER, Routes.APPLIED, Routes.TEST];
const authenticationRoutes = [Routes.LOGIN, Routes.REGISTER];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  const userRole = req.cookies.get('userRole')?.value as UserRole;
  const path = req.nextUrl.pathname;
  const isAuthenticationRoute = authenticationRoutes.includes(path);
  const isCompanyRoute = path.startsWith(Routes.DASHBOARD);
  const isInternRoute = internRoutes.includes(path);
  const isPrivateRoute = isInternRoute || isCompanyRoute;
  const isCompanyEntity = userRole === 'Company';
  const isInternEntity = userRole === 'InnerUser' || userRole === 'OuterUser';
  const homePage = new URL(Routes.HOME, req.nextUrl.origin);

  if (!token && isPrivateRoute) {
    const absoluteURL = new URL(`${Routes.LOGIN}?redirectUrl=${path}`, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }
  if (token && isAuthenticationRoute) {
    return NextResponse.redirect(homePage);
  }
  if (token && userRole) {
    if (isInternEntity && isCompanyRoute) {
      return NextResponse.redirect(homePage);
    }
    if (isCompanyEntity && isInternRoute) {
      return NextResponse.redirect(homePage);
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png|lock.png|hero.png).*)',
  ],
};
