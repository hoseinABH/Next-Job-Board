import { NextRequest, NextResponse } from 'next/server';
// Configs
import * as Routes from '@/config/routes';

const privateRoutes = [Routes.CV_MAKER];
const authenticationRoutes = [Routes.LOGIN, Routes.REGISTER];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  if (!token && privateRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL(Routes.LOGIN, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (token && authenticationRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL(Routes.HOME, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
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
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
