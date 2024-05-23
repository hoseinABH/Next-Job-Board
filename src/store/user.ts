import { create } from 'zustand';
import type { UserModals, ModalKeys } from '@/types/user';
import type { ModalMetadata } from '@/types/common';

export interface UserValues {
  modals: UserModals;
  metadata: ModalMetadata;
}
export interface UserActions {
  openModal: (open: boolean, key: ModalKeys, metadata?: ModalMetadata) => void;
}
export type UserState = UserValues & UserActions;

const initialValues: UserValues = {
  modals: {
    aboutMe: false,
    personalInfo: false,
    workExperience: false,
    education: false,
    skill: false,
    language: false,
    apply: false,
    removeConfirm: false,
  },
  metadata: null,
};
const useUserStore = create<UserState>((set) => ({
  ...initialValues,
  openModal: (open, key, metadata) =>
    set((state) => ({ modals: { ...state.modals, [key]: open }, metadata })),
}));

export default useUserStore;
