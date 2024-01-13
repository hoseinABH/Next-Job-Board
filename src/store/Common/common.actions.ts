/**
 * @module Actions/Common
 * @desc All Common actions
 */
import * as types from './common.constants';
// Types
import type { Action } from '@/types/store';

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
