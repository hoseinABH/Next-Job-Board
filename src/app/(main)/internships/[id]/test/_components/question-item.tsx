'use client';
// Common components
import QuestionOption from '@/components/question-option';
import { RadioGroup } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';
// Hooks
import useTestStore from '@/store/tests';
// Types
import type { Question } from '@/types/internship';

interface Props {
  className?: string;
  question: Question;
  questionNumber: number;
}

export default function QuestionItem({ question, className, questionNumber }: Props) {
  const { currentQuestionAnswerIndex, setCurrentQuestionAnswer } = useTestStore();
  function onChange(value: string) {
    setCurrentQuestionAnswer(value);
  }
  return (
    <div className="animate-slide-bottom">
      <span className="text-muted-foreground">سوال {questionNumber}</span>
      <h1 className="mt-4">{question.question}</h1>
      <Separator className="my-6" />
      <RadioGroup
        value={currentQuestionAnswerIndex}
        onValueChange={onChange}
        className={cn('space-y-4', className)}
      >
        {question.answers.map((answer, index) => (
          <QuestionOption
            key={`${answer}__${index}`}
            value={String(index)}
            selectedOption={currentQuestionAnswerIndex}
            title={answer}
          />
        ))}
      </RadioGroup>
    </div>
  );
}
