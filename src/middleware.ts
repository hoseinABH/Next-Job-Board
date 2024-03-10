import { NextRequest, NextResponse } from 'next/server';
// Configs
import * as Routes from '@/config/routes';

const privateRoutes = [Routes.CV_MAKER];
const protectedRoutes = [Routes.LOGIN, Routes.REGISTER];

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get('session')?.value;
  if (!token && privateRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL(Routes.LOGIN, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
  if (token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL(Routes.HOME, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
