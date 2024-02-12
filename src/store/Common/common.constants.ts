/**
 * @module Constants/Common
 * @desc All common constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('COMMON');

/**
 * @module COMMON
 * @desc toggle global app loading
 */
export const SET_APP_LOADING = prefix('SET_APP_LOADING');

/**
 * @module COMMON
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');

/**
 * @module COMMON
 * @desc some dummy sagas - just for test
 */
export const SAGAS_SOME_ACTION = prefix('SAGAS_SOME_ACTION');
