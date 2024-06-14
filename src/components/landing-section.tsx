import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface Props {
  className?: string;
  title?: ReactNode | string;
  subTitle?: string;
  children: ReactNode;
}

export default function LandingSection({ className, children, title, subTitle }: Props) {
  return (
    <section
      className={cn('container flex flex-col items-center justify-center px-4 sm:px-8', className)}
    >
      <div className="text-center">
        {title ? (
          <h1 className="mb-4 text-xl font-bold text-secondary sm:text-2xl md:text-3xl">{title}</h1>
        ) : null}
        {subTitle ? <p className="text-muted-foreground">{subTitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
