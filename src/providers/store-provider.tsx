'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
// Global store
import appStore from '@/store';

export default function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={appStore}>{children}</Provider>;
}
