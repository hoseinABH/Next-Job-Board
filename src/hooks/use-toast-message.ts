import { toast } from '@/components/ui/use-toast';
import { useEffect, useRef } from 'react';
// Types
import type { FormState } from '@/lib/error';

const useToastMessage = (formState?: FormState, onSuccess?: () => void) => {
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
        if (onSuccess) {
          onSuccess();
        }
        toast({
          variant: 'success',
          title: 'عملیات موفق',
          description: formState.message,
        });
      }
      prevTimestamp.current = formState.timestamp;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState, showToast]);
};

export { useToastMessage };
