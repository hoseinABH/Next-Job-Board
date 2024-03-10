'use server';

import { cookies } from 'next/headers';

const sessionKey = 'session';
export async function setCookie(token: string, expires: Date) {
  cookies().set(sessionKey, token, { expires, httpOnly: true });
}

export async function getSession() {
  const session = cookies().get(sessionKey)?.value;
  if (!session) return;
  return session;
}

export async function clearSession() {
  cookies().delete(sessionKey);
}
