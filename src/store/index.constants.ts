/**
 * @module Constants/Root
 * @desc All Root constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('ROOT');

/**
 * @module RESET_FACTORY
 * @desc RESET_FACTORY constant
 */
export const RESET_FACTORY = prefix('RESET_FACTORY');
