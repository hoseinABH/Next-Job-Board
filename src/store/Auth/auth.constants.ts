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
export const SET_LOADING = prefix('SET_OPEN_MODAL');

/**
 * @module AUTH
 * @desc call login service
 */
export const SAGAS_LOGIN = prefix('SAGAS_LOGIN');
