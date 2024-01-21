/**
 * @module Reducer/Resume
 * @desc All Resume reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import * as R from 'ramda';
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
  },
};

const reducer: Reducer<ResumeState, Action> = (
  state = initialState,
  action
) => {
  const update = R.mergeRight<ResumeState>(state)<Partial<ResumeState>>;
  switch (action.type) {
    case types.SET_OPEN_MODAL:
      return update({
        modals: R.mergeRight<ResumeModals>(state.modals)({
          [action.payload.key]: action.payload.open,
        }),
      });
    case RESET_FACTORY:
      return update(initialState);
    default:
      return state;
  }
};

export default reducer;
