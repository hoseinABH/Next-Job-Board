// Common components
import ApplyRequestCard from '@/components/apply-request-card';
// Actions
import { getUserApplyRequests } from '@/actions/user';
// Types
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const requests = await getUserApplyRequests({ page: '1' });
  return {
    title: `${requests.length} درخواست شغلی`,
    description: `نمایش ${requests.length} درخوست موقعیت شغلی`,
  };
}

export default async function AppliedPage() {
  const requests = await getUserApplyRequests({ page: '1' });
  return (
    <div className="container space-y-8 px-4 py-24 sm:px-8">
      <h1 className="text-lg font-bold text-secondary sm:text-xl">
        درخواست‌های ارسال‌شده به کارفرما
      </h1>
      {requests.map((request) => (
        <ApplyRequestCard key={request.requestId} request={request} />
      ))}
    </div>
  );
}
