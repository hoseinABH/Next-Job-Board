/**
 * @module Actions/AUTH
 * @desc All AUTH actions
 */
import * as types from './auth.constants';
// Types
import type { Action } from '@/types/store';
import type { LoadingKeys, LoginDto } from '@/types/auth';

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
   * trigger login sagas
   * @param {LoginDto} loginDto
   * @return {Action<LoginDto>}
   */
  public login(loginDto: LoginDto): Action<LoginDto> {
    return {
      type: types.SAGAS_LOGIN,
      payload: loginDto,
    };
  }
}

const AuthActions = new Actions();

export default AuthActions;
