/**
 * @module Constants/Internships
 * @desc All Internships constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('INTERNSHIPS');

/**
 * @module INTERNSHIPS
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');
