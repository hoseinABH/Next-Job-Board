/**
 * @module Constants/User
 * @desc All User constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('USER');

/**
 * @module User
 * @desc set user information
 */
export const SET_USER_INFO = prefix('SET_USER_INFO');
/**
 * @module User
 * @desc set is LoggedIn
 */
export const SET_IS_LOGGED_IN = prefix('SET_IS_LOGGED_IN');
