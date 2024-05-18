'use client';
import { useFormStatus } from 'react-dom';
import { Button, ButtonProps } from './ui/button';
import type { ReactNode } from 'react';

interface SubmitButtonProps extends ButtonProps {
  children: ReactNode;
  className?: string;
}
export default function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();
  return <Button loading={pending} {...props} />;
}
