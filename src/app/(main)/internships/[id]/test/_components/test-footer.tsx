'use client';
// Common components
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import useTestStore from '@/store/tests';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface Props {
  className?: string;
  questionCount: number;
}

export default function TestFooter({ className, questionCount }: Props) {
  const { questionIndex, setQuestionIndex } = useTestStore();
  const router = useRouter();
  const { firstQuestion, lastQuestion, backButtonText, nextButtonText } = useMemo(() => {
    const lastQuestion = questionIndex + 1 === questionCount;
    const firstQuestion = questionIndex === 0;
    const nextButtonText = lastQuestion ? 'ثبت پاسخ ها' : 'مرحله بعد';
    const backButtonText = firstQuestion ? 'بازگشت' : 'مرحله بعد';
    return {
      lastQuestion,
      firstQuestion,
      nextButtonText,
      backButtonText,
    };
  }, [questionCount, questionIndex]);

  function next() {
    if (lastQuestion) {
      router.back();
      return;
    }
    setQuestionIndex(questionIndex + 1);
  }
  function back() {
    if (firstQuestion) {
      router.back();
      return;
    }
    setQuestionIndex(questionIndex - 1);
  }
  return (
    <div className={cn('flex items-center justify-center gap-x-4', className)}>
      <Button
        onClick={next}
        className="rounded-full bg-purple-600 hover:bg-purple-600/90"
        size="lg"
      >
        {nextButtonText}
      </Button>
      <Button onClick={back} className="rounded-full" variant="outline" size="lg">
        {backButtonText}
      </Button>
    </div>
  );
}
