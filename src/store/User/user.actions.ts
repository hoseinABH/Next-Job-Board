/**
 * @module Actions/User
 * @desc All User actions
 */
import * as types from './user.constants';
// Types
import type { Action } from '@/types/store';
import type { LoggedInUserInfo } from '@/types/auth';
import type { Nullable } from '@/types/common';

class Actions {
  /**
   * set loggedIn user info
   * @param {Nullable<LoggedInUserInfo>} userData
   * @return {Action<Nullable<LoggedInUserInfo>>}
   */
  public setUserInfo(
    userData: Nullable<LoggedInUserInfo>
  ): Action<Nullable<LoggedInUserInfo>> {
    return {
      type: types.SET_USER_INFO,
      payload: userData,
    };
  }
}

const UserActions = new Actions();

export default UserActions;
