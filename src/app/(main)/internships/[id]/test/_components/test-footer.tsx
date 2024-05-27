'use client';
// Common components
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import useTestStore from '@/store/tests';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
// Types
import type { Question } from '@/types/internship';

interface Props {
  className?: string;
  questionCount: number;
  questions: Question[];
}

export default function TestFooter({ className, questions, questionCount }: Props) {
  const {
    questionIndex,
    currentQuestionAnswerIndex,
    testAnswers,
    setCurrentQuestionAnswer,
    setQuestionIndex,
    setTestAnswers,
  } = useTestStore();
  const router = useRouter();
  console.log(testAnswers);
  const { firstQuestion, currentQuestion, lastQuestion, backButtonText, nextButtonText } =
    useMemo(() => {
      const lastQuestion = questionIndex + 1 === questionCount;
      const firstQuestion = questionIndex === 0;
      const currentQuestion = questions[questionIndex];
      const nextButtonText = lastQuestion ? 'ثبت پاسخ ها' : 'سوال بعد';
      const backButtonText = firstQuestion ? 'بازگشت' : 'سوال قبل';
      return {
        currentQuestion,
        lastQuestion,
        firstQuestion,
        nextButtonText,
        backButtonText,
      };
    }, [questions, questionIndex, questionCount]);

  function next() {
    setTestAnswers([
      ...testAnswers,
      { questionId: currentQuestion.id, answerIndex: +currentQuestionAnswerIndex },
    ]);
    if (lastQuestion) {
      router.back();
      return;
    }
    setCurrentQuestionAnswer('');
    setQuestionIndex(questionIndex + 1);
  }
  function back() {
    if (firstQuestion) {
      router.back();
      return;
    }
    setQuestionIndex(questionIndex - 1);
    setCurrentQuestionAnswer('');
  }
  useEffect(() => {
    return () => {
      setQuestionIndex(0);
      setTestAnswers([]);
      setCurrentQuestionAnswer('');
    };
  }, []);
  return (
    <div className={cn('flex items-center justify-center gap-x-4', className)}>
      <Button
        onClick={next}
        className="w-32 rounded-full bg-purple-600 hover:bg-purple-600/90"
        size="lg"
      >
        {nextButtonText}
      </Button>
      <Button onClick={back} className="w-32 rounded-full" variant="outline" size="lg">
        {backButtonText}
      </Button>
    </div>
  );
}
