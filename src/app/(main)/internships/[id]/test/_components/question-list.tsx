'use client';
// Local components
import QuestionItem from './question-item';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import useTestStore from '@/store/tests';
import { useMemo } from 'react';
// Types
import type { Question } from '@/types/internship';

interface Props {
  className?: string;
  questions: Question[];
}

export default function QuestionList({ className, questions }: Props) {
  const { questionIndex } = useTestStore();
  const currentQuestion = useMemo(() => questions[questionIndex], [questionIndex, questions]);
  return (
    <div
      className={cn(
        'flex items-center justify-between rounded-md border bg-accent/40 px-6 py-12',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-4xl overflow-hidden">
        <QuestionItem
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={questionIndex + 1}
        />
      </div>
    </div>
  );
}
