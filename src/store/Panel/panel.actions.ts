/**
 * @module Actions/Panel
 * @desc All Panel actions
 */
import * as types from './panel.constants';
// Types
import type { DeleteDialogData, LoadingKeys, ModalKeys } from '@/types/panel';
import type { Action } from '@/types/store';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys,
  ): Action<{ status: boolean; key: LoadingKeys }> {
    return {
      type: types.SET_LOADING,
      payload: { status, key },
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
   * set dialog data
   * @param {DialogData} data
   * @return {Action<DialogData>}
   */
  public setDialogData(data: DeleteDialogData): Action<DeleteDialogData> {
    return {
      type: types.SET_DIALOG_DATA,
      payload: data,
    };
  }
}

const PanelActions = new Actions();

export default PanelActions;
