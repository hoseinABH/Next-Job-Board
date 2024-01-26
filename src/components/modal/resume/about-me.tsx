// Common components
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';

export function AboutMeModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.resume);
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'aboutMe'));
  }
  return (
    <Dialog open={modals.aboutMe} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>درباره من</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">عنوان</Label>
            <Input id="title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="aboutMe">درباره خود - حداکثر ۴۰۰ کاراکتر</Label>
            <Textarea rows={6} id="aboutMe" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
