/**
 * @module Constants/Resume
 * @desc All resume constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('RESUME');

/**
 * @module RESUME
 * @desc set loading
 */
export const SET_LOADING = prefix('SET_LOADING');

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

/**
 * @module RESUME
 * @desc update personal user info
 */
export const SAGAS_UPDATE_PERSONAL = prefix('SAGAS_UPDATE_PERSONAL');

/**
 * @module RESUME
 * @desc create a work experience
 */
export const SAGAS_CREATE_EXPERIENCE = prefix('SAGAS_CREATE_EXPERIENCE');

/**
 * @module RESUME
 * @desc create an education
 */
export const SAGAS_CREATE_EDUCATION = prefix('SAGAS_CREATE_EDUCATION');
/**
 * @module RESUME
 * @desc create a language
 */
export const SAGAS_CREATE_LANGUAGE = prefix('SAGAS_CREATE_LANGUAGE');
/**
 * @module RESUME
 * @desc create a skill
 */
export const SAGAS_CREATE_SKILL = prefix('SAGAS_CREATE_SKILL');
/**
 * @module RESUME
 * @desc remove a field
 */
export const SAGAS_REMOVE_RESUME_FIELD = prefix('SAGAS_REMOVE_RESUME_FIELD');
/**
 * @module RESUME
 * @desc fill resume data
 */
export const SAGAS_GET_RESUME_DATA = prefix('SAGAS_GET_RESUME_DATA');
export const SET_RESUME_DATA = prefix('SET_RESUME_DATA');
