// Common components
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// Actions
import ResumeActions from '@/store/Resume/resume.actions';
// Hooks
import { useAppSelector, useAppDispatch } from '@/hooks/store';

export function PersonalInfoModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.resume);
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'personalInfo'));
  }
  return (
    <Dialog open={modals.personalInfo} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>مشخصات فردی</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">نام</Label>
            <Input id="firstName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">نام خانوادگی</Label>
            <Input id="lastName" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">جنسیت</Label>
            <RadioGroup id="gender" className="flex">
              <div className="flex items-center gap-x-2">
                <RadioGroupItem value="woman" id="woman" />
                <Label htmlFor="woman">زن</Label>
              </div>
              <div className="flex items-center gap-x-2">
                <RadioGroupItem value="man" id="man" />
                <Label htmlFor="man">مرد</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="martialStatus">وضعیت تاهل</Label>
            <RadioGroup id="martialStatus" className="flex">
              <div className="flex items-center gap-x-2">
                <RadioGroupItem value="married" id="married" />
                <Label htmlFor="married">متاهل</Label>
              </div>
              <div className="flex items-center gap-x-2">
                <RadioGroupItem value="single" id="single" />
                <Label htmlFor="single">مجرد</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthDate">تاریخ تولد</Label>
            <Input id="birthDate" dir="ltr" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">محل سکونت</Label>
            <Input id="location" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="militaryService">وضعیت خدمت</Label>
            <Select>
              <SelectTrigger>
                <SelectValue id="militaryService" placeholder="وضعیت خدمت" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="done">تمام شده</SelectItem>
                <SelectItem value="notDoneYet">هنوز انجام نشده</SelectItem>
                <SelectItem value="exempt">معاف</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="mobileNumber">شماره موبایل</Label>
            <Input id="mobileNumber" dir="ltr" inputMode="numeric" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
