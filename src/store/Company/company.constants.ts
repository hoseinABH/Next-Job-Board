/**
 * @module Constants/Company
 * @desc All Company constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('COMPANY');

/**
 * @module Company
 * @desc set loading
 */
export const SET_LOADING = prefix('SET_LOADING');
/**
 * @module Company
 * @desc get/set companies
 */
export const SAGAS_GET_ALL_COMPANY = prefix('SAGAS_GET_ALL_COMPANY');
export const SET_COMPANIES = prefix('SET_COMPANIES');
/**
 * @module Company
 * @desc get/set company
 */
export const SAGAS_GET_COMPANY_DETAILS = prefix('SAGAS_GET_COMPANY_DETAILS');
export const SET_COMPANY_DETAILS = prefix('SET_COMPANY_DETAILS');
