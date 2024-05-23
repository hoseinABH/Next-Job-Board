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
  await new Promise((res) => setTimeout(res, 5000));
  const requests = await getUserApplyRequests({ page: '1' });
  return (
    <div className="space-y-8 py-4 lg:py-12">
      <h1 className="text-xl text-muted-foreground">درخواست‌های ارسال‌شده به کارفرما</h1>
      {requests.map((request) => (
        <ApplyRequestCard key={request.requestId} request={request} />
      ))}
    </div>
  );
}
