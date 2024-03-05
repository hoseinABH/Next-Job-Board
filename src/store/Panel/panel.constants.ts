/**
 * @module Constants/Panel
 * @desc All Panel constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('PANEL');

/**
 * @module Panel
 * @desc set loading
 */
export const SET_LOADING = prefix('SET_LOADING');
/**
 * @module Panel
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');
