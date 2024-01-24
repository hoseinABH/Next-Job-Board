/**
 * @module Actions/Resume
 * @desc All Resume actions
 */
import * as types from './resume.constants';
// Types
import type { Action } from '@/types/store';
import type { ModalKeys } from '@/types/resume';

class Actions {
  /**
   * set modals open
   * @param {boolean} open
   * @param {ModalKeys} key
   * @return {Action<{ open: boolean; key: ModalKeys }>}
   */
  public setModalOpen(
    open: boolean,
    key: ModalKeys
  ): Action<{ open: boolean; key: ModalKeys }> {
    return {
      type: types.SET_OPEN_MODAL,
      payload: { open, key },
    };
  }

  /**
   * trigger some test action
   * @return {Action}
   */
  public triggerSomeAction(): Action {
    return {
      type: types.SAGAS_SOME_ACTION,
    };
  }
}

const ResumeActions = new Actions();

export default ResumeActions;