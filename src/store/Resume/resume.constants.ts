/**
 * @module Constants/Resume
 * @desc All resume constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('RESUME');

/**
 * @module RESUME
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');

/**
 * @module RESUME
 * @desc some dummy sagas - just for test
 */
export const SAGAS_SOME_ACTION = prefix('SAGAS_SOME_ACTION');
