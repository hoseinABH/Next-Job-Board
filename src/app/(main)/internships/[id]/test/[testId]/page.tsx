// Local components
import QuestionList from '../_components/question-list';
import TestFooter from '../_components/test-footer';
import TestHeader from '../_components/test-header';
// Actions
import { getTestQuestions } from '@/actions/internship';
// Types
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تست شخصیتی',
  description: 'تست مورد نیاز برای درخواست کارآموزی',
};
interface Props {
  params: {
    testId: string;
  };
}
export default async function TestPage({ params }: Props) {
  const questions = await getTestQuestions(params.testId);
  return (
    <div className="space-y-8 py-4 lg:py-12">
      <TestHeader questionCount={questions.length} testTitle="تست شخصیتی" />
      <QuestionList questions={questions} />
      <TestFooter questions={questions} questionCount={questions.length} />
    </div>
  );
}
