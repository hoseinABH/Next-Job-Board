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
 * @desc set delete modal data
 */
export const SET_DELETE_DATA = prefix('SET_DELETE_DATA');
