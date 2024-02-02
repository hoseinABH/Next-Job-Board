/**
 * @module Reducer/Jobs
 * @desc All Jobs reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { JobsModals } from '@/types/jobs';
// Constants
import * as types from './jobs.constants';

export interface JobsState {
  modals: JobsModals;
}

export const initialState: JobsState = {
  modals: {
    filter: false,
  },
};

const reducer: Reducer<JobsState, Action> = (state = initialState, action) => {
  const update = updateState<JobsState>(state);
  switch (action.type) {
    case types.SET_OPEN_MODAL:
      return update({
        modals: updateState<JobsModals>(state.modals)({
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
