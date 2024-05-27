import { create } from 'zustand';

export interface TestValues {
  questionIndex: number;
}
export interface TestActions {
  setQuestionIndex: (questionIndex: number) => void;
}
export type CompanyState = TestValues & TestActions;

const initialValues: TestValues = {
  questionIndex: 0,
};
const useTestStore = create<CompanyState>((set) => ({
  ...initialValues,
  setQuestionIndex: (questionIndex) => set({ questionIndex }),
}));

export default useTestStore;
