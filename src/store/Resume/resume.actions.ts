/**
 * @module Actions/Resume
 * @desc All Resume actions
 */
import * as types from './resume.constants';
// Types
import type { Action } from '@/types/store';
import type {
  DeleteAlertData,
  LoadingKeys,
  ModalKeys,
  UpdatePersonalDto,
} from '@/types/resume';

class Actions {
  /**
   * set loading
   * @param {boolean} status
   * @param {LoadingKeys} key
   * @return {Action<{ open: boolean; key: LoadingKeys }>}
   */
  public setLoading(
    status: boolean,
    key: LoadingKeys
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
   * set delete alert data
   * @param {DeleteAlertData} data
   * @return {Action<DeleteAlertData>}
   */
  public setDeleteAlertData(data: DeleteAlertData): Action<DeleteAlertData> {
    return {
      type: types.SET_DELETE_DATA,
      payload: data,
    };
  }
  /**
   * update personal user info
   * @param {UpdatePersonalDto} data
   * @return {Action<UpdatePersonalDto>}
   */
  public updatePersonalInfo(
    data: UpdatePersonalDto
  ): Action<UpdatePersonalDto> {
    return {
      type: types.SAGAS_UPDATE_PERSONAL,
      payload: data,
    };
  }
}

const ResumeActions = new Actions();

export default ResumeActions;
