/**
 * @module Constants/Jobs
 * @desc All Jobs constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('JOBS');

/**
 * @module JOBS
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');
