'use client';
import { useState } from 'react';
// Common components
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Actions
import InternshipsActions from '@/store/Internship/internships.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';
// Configs
import { requestTests } from '@/config/app';

export function InternshipApplicationModal() {
  const dispatch = useAppDispatch();
  const [selectedTest, setSelectedTest] = useState<null | number>(null);
  const { modals } = useAppSelector((state) => state.internships);

  function onOpenChange(open: boolean) {
    dispatch(InternshipsActions.setModalOpen(open, 'internshipApplication'));
  }

  return (
    <Dialog open={modals.internshipApplication} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>ارسال درخواست موقعیت کارآموزی</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <h5 className="text-md">تست های لازم برای این موقعیت کارآموزی</h5>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {requestTests.map((test) => (
            <Card
              key={test.key}
              className={cn(
                'flex h-32 cursor-pointer items-center justify-center transition-all hover:border hover:border-foreground',
                {
                  ['border border-primary']: selectedTest === test.key,
                },
              )}
              onClick={() => setSelectedTest(test.key)}
            >
              <CardTitle>{test.name}</CardTitle>
            </Card>
          ))}
        </div>
        <DialogFooter>
          <Button>ارسال درخواست</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
