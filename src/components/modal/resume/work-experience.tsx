// Common components
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';

export function WorkExperienceModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.resume);
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'workExperience'));
  }
  return (
    <Dialog open={modals.workExperience} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>سوابق شغلی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">عنوان شغلی</Label>
            <Input id="title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName">نام شرکت</Label>
            <Input id="companyName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyLocation">محل شرکت</Label>
            <Input id="companyLocation" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="startDate">تاریخ شروع</Label>
            <Input id="startDate" dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="endDate">تاریخ پایان</Label>
            <Input id="endDate" dir="ltr" />
          </div>
          <div className="flex items-center gap-x-2 self-end">
            <Checkbox id="present" />
            <Label htmlFor="present">در این شرکت مشغول به کار هستم</Label>
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="aboutMe">توضیحات</Label>
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
