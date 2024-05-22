import SideBar from './_components/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen overflow-hidden">
      <SideBar />
      <main className="mr:0 h-screen flex-1 overflow-auto md:mr-[280px]">
        <div className="relative h-full py-2 sm:container sm:py-12">{children}</div>
      </main>
    </main>
  );
}
