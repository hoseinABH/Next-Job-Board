import { NextRequest, NextResponse } from 'next/server';
// Configs
import * as Routes from '@/config/routes';
// Types
import type { UserRole } from './types/user';

const internRoutes = [Routes.CV_MAKER];
const companyRoutes = [Routes.DASHBOARD, Routes.DASHBOARD_APPLICATIONS, Routes.DASHBOARD_POSITIONS];
const privateRoutes = [...internRoutes, companyRoutes];
const authenticationRoutes = [Routes.LOGIN, Routes.REGISTER];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  const userRole = req.cookies.get('userRole')?.value as UserRole;
  const path = req.nextUrl.pathname;
  const isAuthenticationRoute = authenticationRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);
  const isCompanyRoute = companyRoutes.includes(path);
  const isInternRoute = internRoutes.includes(path);
  const isCompanyEntity = userRole === 'Company';
  const isInternshipEntity = userRole === 'InnerUser';
  const homePage = new URL(Routes.HOME, req.nextUrl.origin);

  if (!token && isPrivateRoute) {
    const absoluteURL = new URL(`${Routes.LOGIN}?redirectUrl=${path}`, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }
  if (token && isAuthenticationRoute) {
    return NextResponse.redirect(homePage);
  }
  if (token && userRole) {
    if (isInternshipEntity && isCompanyRoute) {
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
