import { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  console.log(request.cookies.get('session')?.value);
}
