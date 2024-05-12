/**
 * @module Actions/AUTH
 * @desc All AUTH actions
 */
import * as types from './auth.constants';
// Types
import type { Action } from '@/types/store';
import type { LoadingKeys, LoginDto, RegisterDto } from '@/types/auth';

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
   * call login service
   * @param {LoginDto} loginDto
   * @return {Action<LoginDto>}
   */
  public login(loginDto: LoginDto): Action<LoginDto> {
    return {
      type: types.SAGAS_LOGIN,
      payload: loginDto,
    };
  }

  /**
   * call register service
   * @param {Omit<RegisterDto, 'userType'>} registerDto
   * @return {Action<Omit<RegisterDto, 'userType'>>}
   */
  public register(
    registerDto: Omit<RegisterDto, 'userType'>,
  ): Action<Omit<RegisterDto, 'userType'>> {
    return {
      type: types.SAGAS_REGISTER,
      payload: registerDto,
    };
  }
  /**
   * logging out user
   * @return {Action}
   */
  public logout(): Action {
    return {
      type: types.SAGAS_LOGOUT,
    };
  }
}

const AuthActions = new Actions();

export default AuthActions;
