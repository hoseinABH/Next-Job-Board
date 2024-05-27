'use client';
// Common components
import QuestionOption from '@/components/question-option';
import { RadioGroup } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
// Utilities
import { cn } from '@/lib/utils';
import { Question } from '@/types/internship';
// Hooks
import { Fragment, useState } from 'react';

interface Props {
  className?: string;
  question: Question;
  questionNumber: number;
}

export default function QuestionItem({ question, className, questionNumber }: Props) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  function onChange(value: string) {
    setSelectedAnswer(value);
  }
  return (
    <Fragment>
      <span className="text-muted-foreground">سوال {questionNumber}</span>
      <h1 className="mt-4">{question.question}</h1>
      <Separator className="my-6" />
      <RadioGroup
        value={selectedAnswer}
        onValueChange={onChange}
        className={cn('space-y-4', className)}
      >
        {question.answers.map((answer, index) => (
          <QuestionOption
            key={`${answer}__${index}`}
            value={String(index)}
            selectedOption={selectedAnswer}
            title={answer}
          />
        ))}
      </RadioGroup>
    </Fragment>
  );
}
