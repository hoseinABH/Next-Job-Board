// Common components
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

export function LanguageModal() {
  const dispatch = useAppDispatch();
  const { modals } = useAppSelector((state) => state.resume);
  function onOpenChange(open: boolean) {
    dispatch(ResumeActions.setModalOpen(open, 'language'));
  }
  return (
    <Dialog open={modals.language} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>زبان ها</DialogTitle>
          <DialogDescription>
            لطفا فیلد های مورد نظر را تکمیل نمایید
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="language">زبان</Label>
            <Select>
              <SelectTrigger>
                <SelectValue id="language" placeholder="زبان" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">انگلیسی</SelectItem>
                <SelectItem value="germany">آلمانی</SelectItem>
                <SelectItem value="french">فرانسوی</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="level">سطح</Label>
            <Select>
              <SelectTrigger>
                <SelectValue id="level" placeholder="سطح" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">مبتدی</SelectItem>
                <SelectItem value="mid">متوسط</SelectItem>
                <SelectItem value="professional">حرفه ای</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">ذخیره تغییرات</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
