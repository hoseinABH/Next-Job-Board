/**
 * @module Constants/User
 * @desc All user constant variables
 */

import { createReduxConstant } from '@/lib/store';

const prefix = createReduxConstant('USER');

/**
 * @module USER
 * @desc set loading
 */
export const SET_LOADING = prefix('SET_LOADING');

/**
 * @module USER
 * @desc set modals open
 */
export const SET_OPEN_MODAL = prefix('SET_OPEN_MODAL');

/**
 * @module USER
 * @desc set dialog data
 */
export const SET_DIALOG_DATA = prefix('SET_DIALOG_DATA');

/**
 * @module USER
 * @desc update personal user info
 */
export const SAGAS_UPDATE_PERSONAL = prefix('SAGAS_UPDATE_PERSONAL');

/**
 * @module USER
 * @desc create a work experience
 */
export const SAGAS_CREATE_EXPERIENCE = prefix('SAGAS_CREATE_EXPERIENCE');

/**
 * @module USER
 * @desc create an education
 */
export const SAGAS_CREATE_EDUCATION = prefix('SAGAS_CREATE_EDUCATION');
/**
 * @module USER
 * @desc create a language
 */
export const SAGAS_CREATE_LANGUAGE = prefix('SAGAS_CREATE_LANGUAGE');
/**
 * @module USER
 * @desc create a skill
 */
export const SAGAS_CREATE_SKILL = prefix('SAGAS_CREATE_SKILL');
/**
 * @module USER
 * @desc remove a field
 */
export const SAGAS_REMOVE_RESUME_FIELD = prefix('SAGAS_REMOVE_RESUME_FIELD');
/**
 * @module USER
 * @desc get/set resume data
 */
export const SAGAS_GET_RESUME_DATA = prefix('SAGAS_GET_RESUME_DATA');
export const SET_RESUME_DATA = prefix('SET_RESUME_DATA');

/**
 * @module USER
 * @desc get/set user profile
 */
export const SAGAS_GET_USER_PROFILE = prefix('SAGAS_GET_USER_PROFILE');
export const SET_USER_PROFILE = prefix('SET_USER_PROFILE');
