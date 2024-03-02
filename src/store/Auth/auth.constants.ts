/**
 * @module Constants/Auth
 * @desc All Auth constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('AUTH');

/**
 * @module AUTH
 * @desc set loading
 */
export const SET_LOADING = prefix('SET_LOADING');

/**
 * @module AUTH
 * @desc call login service
 */
export const SAGAS_LOGIN = prefix('SAGAS_LOGIN');

/**
 * @module AUTH
 * @desc call register service
 */
export const SAGAS_REGISTER = prefix('SAGAS_REGISTER');

/**
 * @module AUTH
 * @desc fetch logged in user information
 */
export const SAGAS_FETCH_ME = prefix('SAGAS_FETCH_ME');

/**
 * @module AUTH
 * @desc logout user
 */
export const SAGAS_LOGOUT = prefix('SAGAS_LOGOUT');
