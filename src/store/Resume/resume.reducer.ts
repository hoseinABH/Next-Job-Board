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
import type { ResumeModals } from '@/types/resume';
// Constants
import * as types from './resume.constants';

export interface ResumeState {
  modals: ResumeModals;
}

export const initialState: ResumeState = {
  modals: {
    aboutMe: false,
    personalInfo: false,
  },
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
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
