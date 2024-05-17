import { NextRequest, NextResponse } from 'next/server';
// Configs
import * as Routes from '@/config/routes';

const privateRoutes = [Routes.CV_MAKER];
const authenticationRoutes = [Routes.LOGIN, Routes.REGISTER];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  const path = req.nextUrl.pathname;
  const isAuthenticationRoute = authenticationRoutes.includes(path);
  const isPrivateRoute = privateRoutes.includes(path);
  if (!token && isPrivateRoute) {
    const absoluteURL = new URL(Routes.LOGIN, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
  }
  if (token && isAuthenticationRoute) {
    const absoluteURL = new URL(Routes.HOME, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL);
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
