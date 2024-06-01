// Local components
import QuestionList from '../_components/question-list';
import TestFooter from '../_components/test-footer';
import TestHeader from '../_components/test-header';
// Actions
import { getTestById } from '@/actions/internship';
// Types
import type { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const test = await getTestById(params.testId);
  return {
    title: test.testTitle,
    description: `تست ${test.testTitle} برای این موقعیت شغلی`,
  };
}
interface Props {
  params: {
    testId: string;
  };
}
export default async function TestPage({ params }: Props) {
  const test = await getTestById(params.testId);
  return (
    <div className="container space-y-8 px-4 py-24 sm:px-8">
      <TestHeader questionCount={test.questions.length} testTitle={test.testTitle} />
      <QuestionList questions={test.questions} />
      <TestFooter questions={test.questions} questionCount={test.questions.length} />
    </div>
  );
}
