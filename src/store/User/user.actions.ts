/**
 * @module Actions/User
 * @desc All User actions
 */
import * as types from './user.constants';
// Types
import type { Action } from '@/types/store';
import type { LoggedInUserInfo } from '@/types/auth';

class Actions {
  /**
   * set loggedIn user info
   * @param {LoggedInUserInfo} userData
   * @return {Action<LoggedInUserInfo>}
   */
  public setUserInfo(userData: LoggedInUserInfo): Action<LoggedInUserInfo> {
    return {
      type: types.SET_USER_INFO,
      payload: userData,
    };
  }
  /**
   * set is LoggedIn
   * @param {boolean} isLoggedIn
   * @return {Action<boolean>}
   */
  public setIsLoggedIn(isLoggedIn: boolean): Action<boolean> {
    return {
      type: types.SET_IS_LOGGED_IN,
      payload: isLoggedIn,
    };
  }
}

const UserActions = new Actions();

export default UserActions;
