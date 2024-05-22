import { create } from 'zustand';
import type { CompanyModals, ModalKeys } from '@/types/company';

export interface CompanyValues {
  modals: CompanyModals;
}
export interface CompanyActions {
  openModal: (open: boolean, key: ModalKeys) => void;
}
export type CompanyState = CompanyValues & CompanyActions;

const initialValues: CompanyValues = {
  modals: {
    resumePreview: false,
  },
};
const useCompanyStore = create<CompanyState>((set) => ({
  ...initialValues,
  openModal: (open, key) => set((state) => ({ modals: { ...state.modals, [key]: open } })),
}));

export default useCompanyStore;
