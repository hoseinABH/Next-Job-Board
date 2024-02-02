// Common components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterForm() {
  return (
    <form className="mt-8 max-w-sm w-full space-y-8">
      <Input
        dir="ltr"
        type="email"
        placeholder="ایمیل"
        className="placeholder:text-right"
      />
      <Input
        type="password"
        dir="ltr"
        placeholder="رمز عبور"
        className="placeholder:text-right"
      />
      <Button className="w-full mt-4">ثبت نام</Button>
    </form>
  );
}
