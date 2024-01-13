'use client';
// Common components
import { Button } from '@/components/ui/button';
// Hooks
import { useAppDispatch, useAppSelector } from '@/hooks/store';
// Actions
import CommonActions from '@/store/Common/common.actions';

export default function HomeContent() {
  const dispatch = useAppDispatch();
  const { appLoading } = useAppSelector((state) => state.common);

  function callAction() {
    dispatch(CommonActions.triggerSomeAction());
  }

  return (
    <div>
      <Button loading={appLoading} onClick={callAction}>
        سلام دنیا
      </Button>
    </div>
  );
}
