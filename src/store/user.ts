import { create } from 'zustand';
import type { UserModals, ModalKeys } from '@/types/user';

export interface UserValues {
  modals: UserModals;
}

export interface UserActions {
  openModal: (open: boolean, key: ModalKeys) => void;
}

export type UserState = UserValues & UserActions;

const initialValues: UserValues = {
  modals: {
    aboutMe: false,
    personalInfo: false,
  },
};

const useUserStore = create<UserState>((set) => ({
  ...initialValues,
  openModal: (open, key) => set((state) => ({ modals: { ...state.modals, [key]: open } })),
}));

export default useUserStore;
