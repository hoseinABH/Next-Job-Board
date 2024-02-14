/**
 * @module Reducer/User
 * @desc All User reducers
 */
import { RESET_FACTORY } from '../index.constants';
// Utilities
import { updateState } from '@/lib/store';
import { readToken } from '@/lib/token';
// Types
import type { Reducer } from 'react';
import type { Action } from '@/types/store';
import type { LoggedInUserInfo } from '@/types/auth';
import type { Nullable } from '@/types/common';
// Constants
import * as types from './user.constants';

export interface UserState {
  isLoggedIn: boolean;
  loggedInUserInfo: Nullable<LoggedInUserInfo>;
}

export const initialState: UserState = {
  isLoggedIn: false,
  loggedInUserInfo: null,
};

const reducer: Reducer<UserState, Action> = (state = initialState, action) => {
  const update = updateState<UserState>(state);
  switch (action.type) {
    case types.SET_USER_INFO:
      return update({ loggedInUserInfo: action.payload });
    case types.SET_IS_LOGGED_IN:
      return update({ isLoggedIn: action.payload });
    case RESET_FACTORY:
      return initialState;
    default:
      return state;
  }
};

export default reducer;