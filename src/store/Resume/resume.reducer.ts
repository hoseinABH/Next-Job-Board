/**
 * @module Reducer/Resume
 * @desc All Resume reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type {
  DeleteAlertData,
  ResumeLoading,
  ResumeModals,
} from '@/types/resume';
import type { Nullable } from '@/types/common';
// Constants
import * as types from './resume.constants';

export interface ResumeState {
  loading: ResumeLoading;
  modals: ResumeModals;
  deleteAlertData: Nullable<DeleteAlertData>;
}

export const initialState: ResumeState = {
  loading: {
    updatePersonal: false,
  },
  modals: {
    aboutMe: false,
    personalInfo: false,
    workExperience: false,
    education: false,
    language: false,
    skill: false,
  },
  deleteAlertData: null,
};

const reducer: Reducer<ResumeState, Action> = (
  state = initialState,
  action
) => {
  const update = updateState<ResumeState>(state);
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
    case types.SET_DELETE_DATA:
      return update({
        deleteAlertData: action.payload,
      });

    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
