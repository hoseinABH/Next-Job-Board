import SideBar from './_components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen">
      <SideBar />
      <main className="flex-1 h-screen mr-[300px]">
        <div className="relative h-full">{children}</div>
      </main>
    </main>
  );
}
