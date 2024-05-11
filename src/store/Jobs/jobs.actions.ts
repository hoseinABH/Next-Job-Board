/**
 * @module Actions/Jobs
 * @desc All Jobs actions
 */
import * as types from './jobs.constants';
// Types
import type { Action } from '@/types/store';
import type { ModalKeys } from '@/types/jobs';

class Actions {
  /**
   * set modals open
   * @param {boolean} open
   * @param {ModalKeys} key
   * @return {Action<{ open: boolean; key: ModalKeys }>}
   */
  public setModalOpen(open: boolean, key: ModalKeys): Action<{ open: boolean; key: ModalKeys }> {
    return {
      type: types.SET_OPEN_MODAL,
      payload: { open, key },
    };
  }
}

const JobsActions = new Actions();

export default JobsActions;
