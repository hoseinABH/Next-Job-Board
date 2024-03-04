import SideBar from './_components/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen overflow-hidden">
      <SideBar />
      <main className="flex-1 h-screen overflow-auto mr-[300px]">
        <div className="relative">{children}</div>
      </main>
    </main>
  );
}
