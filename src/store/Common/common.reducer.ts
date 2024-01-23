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
// Constants
import * as types from './common.constants';

export interface CommonState {
  appLoading: boolean;
}

export const initialState: CommonState = {
  appLoading: false,
};

const reducer: Reducer<CommonState, Action> = (
  state = initialState,
  action
) => {
  const update = updateState<CommonState>(state);
  switch (action.type) {
    case types.SET_APP_LOADING:
      return update({ appLoading: action.payload });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
