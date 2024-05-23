import { create } from 'zustand';
import type { CompanyModals, ModalKeys } from '@/types/company';
import type { ModalMetadata } from '@/types/common';

export interface CompanyValues {
  modals: CompanyModals;
  metadata: ModalMetadata;
}
export interface CompanyActions {
  openModal: (open: boolean, key: ModalKeys, metadata?: ModalMetadata) => void;
}
export type CompanyState = CompanyValues & CompanyActions;

const initialValues: CompanyValues = {
  modals: {
    createPosition: false,
  },
  metadata: null,
};
const useCompanyStore = create<CompanyState>((set) => ({
  ...initialValues,
  openModal: (open, key, metadata) =>
    set((state) => ({ modals: { ...state.modals, [key]: open }, metadata })),
}));

export default useCompanyStore;
