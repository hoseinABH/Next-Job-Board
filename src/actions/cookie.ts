'use server';

import type { UserRole } from '@/types/user';
import { cookies } from 'next/headers';

const sessionKey = 'session';
const roleKey = 'userRole';

export async function setSession(token: string, expires: Date) {
  cookies().set(sessionKey, token, { expires, httpOnly: true });
}
export async function setUserRole(userRole: UserRole, expires: Date) {
  cookies().set(roleKey, userRole, { expires, httpOnly: true });
}

export async function getSession() {
  const session = cookies().get(sessionKey)?.value;
  if (!session) return;
  return session;
}
export async function getUserRole() {
  const useRole = cookies().get(roleKey)?.value;
  if (!useRole) return;
  return useRole as UserRole;
}

export async function clearSession() {
  cookies().delete(sessionKey);
}
export async function clearUserRole() {
  cookies().delete(roleKey);
}
