// Actions
import { getSession } from './cookie';
import { getCompanyProfile } from './company';
import { getUserMinimalProfile } from './user';
// Types
import type { Company } from '@/types/company';
import type { UserMinimalProfile, UserRole } from '@/types/user';

export async function getUserProfile(userRole?: UserRole) {
  const session = await getSession();
  let profile: Company | UserMinimalProfile | null = null;
  if (!Boolean(session) || !userRole) return;
  if (userRole === 'Company') {
    profile = await getCompanyProfile();
  } else {
    profile = await getUserMinimalProfile();
  }
  return profile;
}
