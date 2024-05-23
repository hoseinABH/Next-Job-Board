'use client';
import { useRouter } from 'next/navigation';
// UI Frameworks
import { ArrowRight } from 'lucide-react';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}
export default function BackButton({ onClick, children = 'بازگشت' }: Props) {
  const router = useRouter();
  function goBack() {
    if (onClick) return onClick();
    router.back();
  }
  return (
    <div
      className="group flex w-max cursor-pointer items-center gap-x-px text-muted-foreground print:hidden"
      onClick={goBack}
    >
      <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" /> {children}
    </div>
  );
}
