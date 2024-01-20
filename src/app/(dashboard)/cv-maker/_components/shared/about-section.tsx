// UI Frameworks
import { Briefcase, Pencil, User } from 'lucide-react';
// Common components
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="p-6 rounded-md shadow-md relative bg-card dark:bg-secondary/30"
    >
      <div className="flex gap-x-4 items-start">
        <div className="border rounded-full flex justify-center items-center p-8 hover:bg-neutral-100 dark:hover:bg-slate-800 cursor-pointer transition-all">
          <User className="text-muted-foreground" />
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-2xl">حسین ابوالحسنی</p>
          <p className="flex items-center">
            <Briefcase className="w-4 h-4 text-primary ml-2" /> توسعه دهنده
            فرانت اند
          </p>
          <p className="text-justify text-muted-foreground leading-6 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
      </div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-5 left-5"
            >
              <Pencil className="text-primary w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>ویرایش</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </section>
  );
}
