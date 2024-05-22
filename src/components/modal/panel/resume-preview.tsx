'use client';
// Common components
import { Dialog, DialogContent } from '@/components/ui/dialog';
// Hooks
import useCompanyStore from '@/store/company';

export default function ResumePreview() {
  const { openModal, modals } = useCompanyStore();
  function onOpenChange(open: boolean) {
    openModal(open, 'resumePreview');
  }
  return (
    <Dialog open={modals.resumePreview} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-full max-w-4xl overflow-auto pb-4 pt-12 sm:pt-4">
        <div className="space-y-8 py-12">
          <div>
            <div className="relative mb-6">
              <div className="h-px w-full bg-muted-foreground"></div>
              <h1 className="absolute -translate-x-5 -translate-y-3 bg-background text-xl font-bold">
                اطلاعات شخصی
              </h1>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex gap-x-2">
                <h4 className="font-semibold">نام</h4>
                <p>حسین ابوالحسنی</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">محل سکونت</h4>
                <p>تهران</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">تاریخ تولد</h4>
                <p>۱۳۷۷/۰۲/۱۷</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">شماره تماس</h4>
                <p>۰۹۳۸۰۹۸۰۸۰۰</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">وضعیت تاهل</h4>
                <p>مجرد</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">جنسیت</h4>
                <p>آقا</p>
              </div>
              <div className="flex gap-x-2">
                <h4 className="font-semibold">وضعیت نظام وظیفه</h4>
                <p>در حال انجام</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative mb-8">
              <div className="h-px w-full bg-muted-foreground"></div>
              <h1 className="absolute -translate-x-5 -translate-y-3 bg-background text-xl font-bold">
                سوابق شغلی
              </h1>
            </div>
            {/* <WorkExperienceCard
              experience={{
                experienceId: '12',
                companyName: 'ناسا',
                position: 'مهندس نرم افزار',
                startDate: new Date(),
                endDate: new Date(),
                description: 'ماه در ناسا به دنبال بقا در فضا هستیم',
                isCurrent: true,
              }}
            /> */}
          </div>
          <div>
            <div className="relative mb-8">
              <div className="h-px w-full bg-muted-foreground"></div>
              <h1 className="absolute -translate-x-5 -translate-y-3 bg-background text-xl font-bold">
                سوابق تحصیلی
              </h1>
            </div>
            {/* <EducationCard
              education={{
                id: 1,
                educationalInstitution: 'دانشگاه تهران',
                degree: 'Bachelor',
                fieldOfStudy: 'مهندسی نرم افزار',
                startDate: new Date(),
                endDate: new Date(),
                currentlyEnrolled: true,
              }}
            /> */}
          </div>
          <div>
            <div className="relative mb-8">
              <div className="h-px w-full bg-muted-foreground"></div>
              <h1 className="absolute -translate-x-5 -translate-y-3 bg-background text-xl font-bold">
                مهارت‌ها
              </h1>
            </div>
            <p>{['حل مسئله', 'توسعه نرم افزار', 'استاندارد‌های وب'].join('-')}</p>
          </div>
          <div>
            <div className="relative mb-8">
              <div className="h-px w-full bg-muted-foreground"></div>
              <h1 className="absolute -translate-x-5 -translate-y-3 bg-background text-xl font-bold">
                زبان‌ها
              </h1>
            </div>
            <p>{['فارسی', 'انگلیسی'].join('-')}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
