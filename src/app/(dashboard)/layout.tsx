import Footer from '@/components/footer';
import Header from '@/components/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen flex-col bg-gray-50 dark:bg-background">
      <Header />
      <main className="flex-1">
        <div className="container px-4 sm:px-8 relative">{children}</div>
      </main>
      <Footer />
    </main>
  );
}
