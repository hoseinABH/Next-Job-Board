/**
 * @module Actions/Common
 * @desc All Common actions
 */
import * as types from './common.constants';
// Types
import type { Action } from '@/types/store';
import type { ModalKeys } from '@/types/common';

class Actions {
  /**
   * toggle global app loading
   * @param {boolean} isLoading
   * @return {Action<boolean>}
   */
  public setAppLoading(isLoading: boolean): Action<boolean> {
    return {
      type: types.SET_APP_LOADING,
      payload: isLoading,
    };
  }
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

const CommonActions = new Actions();

export default CommonActions;
