/**
 * @module Reducer/Common
 * @desc All Common reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { CommonModals } from '@/types/common';
// Constants
import * as types from './common.constants';

export interface CommonState {
  appLoading: boolean;
  modals: CommonModals;
}

export const initialState: CommonState = {
  appLoading: false,
  modals: {
    confirmDelete: false,
  },
};

const reducer: Reducer<CommonState, Action> = (state = initialState, action) => {
  const update = updateState<CommonState>(state);
  switch (action.type) {
    case types.SET_APP_LOADING:
      return update({ appLoading: action.payload });
    case types.SET_OPEN_MODAL:
      return update({
        modals: updateState<CommonModals>(state.modals)({
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
