/**
 * @module Reducer/User
 * @desc All User reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type {
  DeleteDialogData,
  UserResume,
  ResumeLoading,
  ResumeModals,
  UserMinimalProfile,
} from '@/types/user';
import type { Nullable } from '@/types/common';
// Constants
import * as types from './user.constants';

export interface UserState {
  loading: ResumeLoading;
  modals: ResumeModals;
  dialogData: Nullable<DeleteDialogData>;
  userResume: Nullable<UserResume>;
  profile: Nullable<UserMinimalProfile>;
}

export const initialState: UserState = {
  loading: {
    getUserProfile: false,
    getUserResume: false,
    updatePersonal: false,
    createExperience: false,
    createEducation: false,
    createLanguage: false,
    createSkill: false,
    removeEntity: false,
  },
  modals: {
    aboutMe: false,
    personalInfo: false,
    workExperience: false,
    education: false,
    language: false,
    skill: false,
  },
  dialogData: null,
  userResume: null,
  profile: null,
};

const reducer: Reducer<UserState, Action> = (state = initialState, action) => {
  const update = updateState<UserState>(state);
  switch (action.type) {
    case types.SET_OPEN_MODAL:
      return update({
        modals: updateState<ResumeModals>(state.modals)({
          [action.payload.key]: action.payload.open,
        }),
      });
    case types.SET_LOADING:
      return update({
        loading: updateState<ResumeLoading>(state.loading)({
          [action.payload.key]: action.payload.status,
        }),
      });
    case types.SET_DIALOG_DATA:
      return update({
        dialogData: action.payload,
      });
    case types.SET_USER_RESUME:
      return update({
        userResume: action.payload,
      });
    case types.SET_USER_PROFILE:
      return update({
        profile: action.payload,
      });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
