/**
 * @module Constants/Internship
 * @desc All Internship constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('INTERNSHIP');
/**
 * @module INTERNSHIPS
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');
