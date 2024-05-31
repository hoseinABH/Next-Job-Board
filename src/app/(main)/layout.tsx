import Footer from '@/components/footer';
import Header from '@/components/header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex min-h-screen flex-col">
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </main>
  );
}
