import { toast } from '@/components/ui/use-toast';
import type { FormState } from '@/lib/error';
import { useEffect, useRef } from 'react';

const useToastMessage = (formState?: FormState) => {
  const prevTimestamp = useRef(formState?.timestamp);
  const showToast = formState?.message && formState?.timestamp !== prevTimestamp.current;
  useEffect(() => {
    if (showToast) {
      if (formState.status === 'ERROR') {
        toast({
          title: 'خطایی رخ داده است',
          description: formState.message,
        });
      } else {
        toast({
          variant: 'success',
          title: 'عملیات موفق',
          description: formState.message,
        });
      }
      prevTimestamp.current = formState.timestamp;
    }
  }, [formState, showToast]);
};

export { useToastMessage };
