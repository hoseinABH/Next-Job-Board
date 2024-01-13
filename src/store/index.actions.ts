/**
 * @module Actions/Root
 * @desc All root actions
 */
// Types
import { Action } from '@/types/store';
// Constants
import * as types from './index.constants';

class Actions {
  /**
   * Reset factory the whole application reducers
   *
   * @return {Action}
   */
  public resetFactory(): Action {
    return {
      type: types.RESET_FACTORY,
    };
  }
}

const RootActions = new Actions();

export default RootActions;
