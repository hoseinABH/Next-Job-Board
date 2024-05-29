'use client';
// Common components
import { Button } from '@/components/ui/button';
// Utilities
import { cn } from '@/lib/utils';
// Actions
import { postTestAnswer } from '@/actions/internship';
// Hooks
import useTestStore from '@/store/tests';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useTransition } from 'react';
// Types
import type { Answer, AnswerIndex, Question } from '@/types/internship';

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
  const [pending, startTransition] = useTransition();
  const params: { id: string; testId: string } = useParams();
  const router = useRouter();
  const {
    firstQuestion,
    currentQuestion,
    lastQuestion,
    backButtonText,
    nextButtonText,
    alreadyAnswered,
    currentAnswer,
  } = useMemo(() => {
    const lastQuestion = questionIndex + 1 === questionCount;
    const firstQuestion = questionIndex === 0;
    const currentQuestion = questions[questionIndex];
    const nextButtonText = lastQuestion ? 'ثبت پاسخ ها' : 'سوال بعد';
    const backButtonText = firstQuestion ? 'بازگشت' : 'سوال قبل';
    const alreadyAnswered = testAnswers.find((answer) => answer.questionId === currentQuestion.id);
    const currentAnswer: AnswerIndex =
      currentQuestionAnswerIndex === '' ? 'unanswered' : +currentQuestionAnswerIndex;
    return {
      currentQuestion,
      lastQuestion,
      firstQuestion,
      nextButtonText,
      backButtonText,
      alreadyAnswered,
      currentAnswer,
    };
  }, [questionIndex, questionCount, questions, testAnswers, currentQuestionAnswerIndex]);

  function next() {
    let finalAnswers: Answer[] = [];
    if (alreadyAnswered) {
      finalAnswers = testAnswers.map((answer) =>
        answer.questionId === currentQuestion.id
          ? { ...alreadyAnswered, answerIndex: currentAnswer }
          : answer,
      );
    } else {
      finalAnswers = [
        ...testAnswers,
        { questionId: currentQuestion.id, answerIndex: currentAnswer },
      ];
    }
    setTestAnswers(finalAnswers);
    if (lastQuestion) {
      return finalizeTest(finalAnswers);
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
  function finalizeTest(answers: Answer[]) {
    startTransition(() => {
      postTestAnswer(params.testId, params.id, answers);
    });
  }
  useEffect(() => {
    return () => {
      setQuestionIndex(0);
      setTestAnswers([]);
      setCurrentQuestionAnswer('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={cn('flex items-center justify-center gap-x-4', className)}>
      <Button
        onClick={next}
        className="w-32 rounded-full bg-purple-600 hover:bg-purple-600/90"
        size="lg"
        loading={pending}
      >
        {nextButtonText}
      </Button>
      <Button
        onClick={back}
        className="w-32 rounded-full"
        variant="outline"
        size="lg"
        disabled={pending}
      >
        {backButtonText}
      </Button>
    </div>
  );
}
