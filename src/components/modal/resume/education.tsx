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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function EducationModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.resume);
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'education'));
  }
  return (
    <Dialog open={modals.education} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen py-12 sm:py-4 overflow-auto">
        <DialogHeader>
          <DialogTitle>سوابق تحصیلی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="major">رشته تحصیلی و گرایش</Label>
            <Input id="major" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="school">نام دانشگاه</Label>
            <Input id="school" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="schoolLocation">محل تحصیل</Label>
            <Input id="schoolLocation" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="grade">مقطع تحصیلی</Label>
            <Select>
              <SelectTrigger>
                <SelectValue id="grade" placeholder="مقطع تحصیلی" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bachelor">لیسانس</SelectItem>
                <SelectItem value="master">فوق لیسانس</SelectItem>
                <SelectItem value="doctoral">دکترا</SelectItem>
              </SelectContent>
            </Select>
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
            <Label htmlFor="present">در این مقطع مشغول به تحصیل هستم</Label>
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
