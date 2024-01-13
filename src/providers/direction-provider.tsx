'use client';
import { ReactNode } from 'react';
import { DirectionProvider as RadixDirectionProvider } from '@radix-ui/react-direction';

export default function DirectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <RadixDirectionProvider dir="rtl">{children}</RadixDirectionProvider>;
}
