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
