/**
 * @module Reducer/Loading
 * @desc All Loading reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { AuthLoading } from '@/types/auth';
// Constants
import * as types from './auth.constants';

export interface AuthState {
  loading: AuthLoading;
}

export const initialState: AuthState = {
  loading: {
    login: false,
    register: false,
    fetchMe: false,
  },
};

const reducer: Reducer<AuthState, Action> = (state = initialState, action) => {
  const update = updateState<AuthState>(state);
  switch (action.type) {
    case types.SET_LOADING:
      return update({
        loading: updateState<AuthLoading>(state.loading)({
          [action.payload.key]: action.payload.status,
        }),
      });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
