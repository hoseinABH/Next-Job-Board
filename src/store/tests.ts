import { create } from 'zustand';
import type { Answer } from '@/types/internship';

export interface TestValues {
  questionIndex: number;
  currentQuestionAnswerIndex: string;
  testAnswers: Answer[];
}
export interface TestActions {
  setQuestionIndex: (questionIndex: number) => void;
  setCurrentQuestionAnswer: (answerIndex: string) => void;
  setTestAnswers: (answers: Answer[]) => void;
}
export type CompanyState = TestValues & TestActions;

const initialValues: TestValues = {
  questionIndex: 0,
  currentQuestionAnswerIndex: '',
  testAnswers: [],
};
const useTestStore = create<CompanyState>((set) => ({
  ...initialValues,
  setQuestionIndex: (questionIndex) => set({ questionIndex }),
  setCurrentQuestionAnswer: (answerIndex) => set({ currentQuestionAnswerIndex: answerIndex }),
  setTestAnswers: (answers) => set({ testAnswers: answers }),
}));

export default useTestStore;
