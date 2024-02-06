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
      className="text-muted-foreground flex items-center gap-x-px group w-max cursor-pointer"
      onClick={goBack}
    >
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />{' '}
      {children}
    </div>
  );
}
