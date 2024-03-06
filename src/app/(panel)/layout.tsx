import SideBar from './_components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen overflow-hidden">
      <SideBar />
      <main className="flex-1 h-screen overflow-auto mr:0 md:mr-[280px]">
        <div className="relative h-full container py-12">{children}</div>
      </main>
    </main>
  );
}
